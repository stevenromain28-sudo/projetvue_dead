<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  cart: Array,
})
// Total des achats
console.log(props.cart)

const total = computed(() => props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0))
const totalFormatted = computed(() =>
  total.value.toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }),
)

function goform() {
  router.push({ name: 'formulaire' })
}


</script>

<template>
  <div id="container">
    <aside class="sidebar">
      <h2>Vos actions</h2>
      <ul>
        <li>Vos achats</li>
        <li>Inscrivez-vous</li>
        <li><router-link :to="{ name:'Produits'}" class="route">Reprendre la course</router-link></li>
      </ul>
    </aside>
    <div id="main">
      <h1>DECOUVREZ VOTRE PANIER</h1>
      <div id="paniers">
        <div v-if="props.cart.length === 0">Panier vide 😢</div>

        <div v-else v-for="item in props.cart" :key="item.id" id="item">
          <div>
            <h3>{{ item.title }}</h3>
            <img :src="item.thumbnail" />
          </div>
          <div class="info">
            <p>Quantité : {{ item.quantity }}</p>
            <p>Prix unitaire : {{ item.price }}</p>
            <p>Total : {{ item.price * item.quantity }} €</p>
          </div>
        </div>
      </div>
    </div>
    <div id="paiement">
      <div id="submit">
        <h2>Soumettez vos achats</h2>
        <div>
          <h3>Solde : {{ totalFormatted }}</h3>
        </div>
        <button @click="goform()" class="go">Soumettre</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
}

/* item */

#main {
  padding: 30px;
  color: white;
}

#main h1 {
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(90deg, aqua, violet, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CONTAINER PANIER */
#paniers {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* PANIER VIDE */
#paniers > div:first-child {
  text-align: center;
  padding: 40px;
  background: #111;
  border-radius: 12px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

/* ITEM PANIER */
#item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  padding: 15px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* HOVER */
#item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 255, 255, 0.3);
}

/* IMAGE */
#item img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid rgba(0, 255, 255, 0.3);
}

/* INFOS */
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

h3 {
  margin-bottom: 10px;
  color: violet;
}

.info p {
  margin: 4px 0;
  font-size: 0.95rem;
  opacity: 0.85;
}

/* TOTAL */
.info p:last-child {
  font-weight: bold;
  color: violet;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  #item {
    flex-direction: column;
  }
}

/* ASIDE */
.sidebar {
  width: 240px;
  min-height: 100vh;
  background: #0f0f0f;
  padding: 20px;
  color: white;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);
  border-left: 4px solid;
  border-image: linear-gradient(180deg, aqua, purple, red) 1;
}

/* TITRE */
.sidebar h2 {
  margin-bottom: 20px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: aqua;
}

/* LISTE */
.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 15px;
  padding: 12px 15px;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  transition: all 0.3s ease;
}

/* HOVER */
.sidebar li:hover {
  background: linear-gradient(135deg, purple, red);
  transform: translateX(6px);
  color: white;
}

/* OPTIONNEL : effet actif */
.sidebar li.active {
  background: linear-gradient(135deg, aqua, purple);
  color: black;
}

img {
  width: 100px;
  height: 100px;
}
aside {
  width: 30%;
}
#paniers {
  width: 90%;
}
#item {
  display: flex;
}

/*  */
#paiement {
  position: absolute;
  right: 100px;
  top: 100px;
}

#submit {
  background: #0f0f0f;
  padding: 25px;
  border-radius: 16px;
  height: fit-content;
  top: 100px;
  position: sticky;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border-left: 4px solid;
  border-image: linear-gradient(180deg, aqua, violet, red) 1;
}

#submit h2 {
  margin-bottom: 20px;
  text-align: center;
  color: aqua;
}

#submit h3 {
  font-size: 1.8rem;
  text-align: center;
  margin-top: 20px;
  color: violet;
}

/* Button go */
.go {
  margin-top: 30px;
  width: 100%;
  padding: 15px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  color: black;
  background: linear-gradient(90deg, aqua, violet, red);

  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
  animation: pulseGlow 2s infinite ease-in-out;
}

/* Hover = contrôle utilisateur */
.go:hover {
  animation-play-state: paused;
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.9);
}

/* Animation douce et continue */
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow:
      0 0 12px rgba(0, 255, 255, 0.6),
      0 0 25px rgba(138, 43, 226, 0.4);
  }

  50% {
    transform: scale(1.04);
    box-shadow:
      0 0 22px rgba(255, 0, 255, 0.8),
      0 0 45px rgba(255, 0, 0, 0.5);
  }

  100% {
    transform: scale(1);
    box-shadow:
      0 0 12px rgba(0, 255, 255, 0.6),
      0 0 25px rgba(138, 43, 226, 0.4);
  }
}

.okay {
  text-decoration: none;
  color: aqua;
}
.route {
  text-decoration: none;
  color: aqua;
}
</style>
