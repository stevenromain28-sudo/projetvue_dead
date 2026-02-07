<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// champs
const nom = ref('')
const prenom = ref('')
const email = ref('')

// état paiement
const paiementOk = ref(false)

// 👉 solde (exemple : à passer depuis le panier via props plus tard)
const total = ref(129.99)

function backform() {
  router.push({ name: 'Card' })
}
function submitPayment() {
  paiementOk.value = true
}
</script>

<template>
  <div class="payment-wrapper">
    <!-- ✅ CONFIRMATION -->
    <div v-if="paiementOk" class="success-box">
      <h1>✅ Paiement confirmé</h1>
      <p>
        Merci <strong>{{ nom }}</strong
        >, votre achat a été effectué avec succès.
      </p>

      <div class="summary">
        <p><strong>Email :</strong> {{ email }}</p>
        <p><strong>Montant payé :</strong> {{ total }} €</p>
      </div>

      <button class="pay-btn" @click="router.push({ name: 'Home' })">Retour à l’accueil</button>
    </div>

    <!-- 💳 FORMULAIRE -->
    <form v-else class="payment-form" @submit.prevent="submitPayment">
      <button class="button-85" type="button" @click="backform">Retour</button>

      <h2>Paiement sécurisé</h2>

      <div class="field">
        <label>Nom du client</label>
        <input v-model="nom" type="text" required placeholder="Entrez votre nom et votre prénom" />
      </div>

      <div class="field">
        <label>Numéro de carte</label>
        <input v-model="prenom" type="number" required />
      </div>

      <div class="field">
        <label>Email</label>
        <input v-model="email" type="email" required placeholder="Entrez votre email" />
      </div>

      <div class="row">
        <div class="field">
          <label>Date d’expiration</label>
          <input type="date" required />
        </div>

        <div class="field">
          <label>CVV (fictif)</label>
          <input type="text" required />
        </div>
      </div>

      <button class="pay-btn">Valider le paiement</button>
    </form>
  </div>
</template>

<style scoped>
.payment-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top,white, #000);
}

.payment-form {
  width: 420px;
  background: linear-gradient(145deg, #0f0f0f, #1c1c1c);
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: fadeUp 0.6s ease;
  position: relative;
}

.payment-form h2 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6rem;
  background: linear-gradient(90deg, aqua, violet, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Champs */
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.field label {
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #ccc;
}

.field input {
  padding: 12px 14px;
  border-radius: 10px;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  transition:
    border 0.3s ease,
    box-shadow 0.3s ease;
}

.field input::placeholder {
  color: #777;
}

.field input:focus {
  border-color: aqua;
  box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.2);
}

/* Ligne double */
.row {
  display: flex;
  justify-content: space-between;
}

/* Bouton paiement */
.pay-btn {
  margin-top: 20px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
  background: linear-gradient(90deg, aqua, violet, red);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.pay-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 0, 255, 0.4);
}

/* Animation d’entrée */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.success-box {
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  color: white;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  animation: pop 0.4s ease;
}

.success-box h1 {
  color: aqua;
  margin-bottom: 15px;
}

.summary {
  margin: 20px 0;
  padding: 20px;
  background: #111;
  border-radius: 12px;
}

@keyframes pop {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* CSS */
.button-85 {
  /* position: absolute;
  right: 15px; */
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: '';
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>
