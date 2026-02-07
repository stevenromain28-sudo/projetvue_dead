<script setup>
import { RouterLink } from 'vue-router'
// Tableau
const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
  'https://images.unsplash.com/photo-1503602642458-232111445657',
]

// Image choisie aléatoirement au chargement
const heroImage = images[Math.floor(Math.random() * images.length)]
</script>

<template>
  <section
    id="hero"
    :style="{
      backgroundImage: `
        linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.85)),
        url(${heroImage})
      `,
    }"
  >
    <div id="accueil">
      <h1>Bienvenue sur <span class="brand">DevShop</span></h1>
      <p>Découvrez nos produits de qualité et profitez des meilleures offres !</p>
      <router-link :to="{ name: 'Produits' }" class="btn-cta">Voir les produits</router-link>
    </div>
  </section>
</template>

<style scoped>
#hero {
  text-align: center;
  color: white;
  margin: auto;
  min-height: 90vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1523275335684-37898b6baf30');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
}
#accueil {
  background-color: rgba(255, 255, 255, 0.747);
  border-radius: 10px;
  color: black;
  padding: 20px;
  position: absolute;
  top: 30%;
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
p {
  font-size: 18px;
  
}
.brand {
  color: purple;
  font-weight: bold;
}
.btn-cta {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background-color: purple;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}
.btn-cta:hover {
  background-color: darkmagenta;
}
</style>
