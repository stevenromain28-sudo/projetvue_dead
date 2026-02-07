<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  product: Object,
})
// console.log(props.product)

const emit = defineEmits(['add-to-cart', 'view-details'])

const add = () => {
  emit('add-to-cart', props.product)
}
</script>

<template>
  <div class="card">
    <div id="image">
      <img :src="product.thumbnail" :alt="product.title" />
      <h3>{{ product.title }}</h3>
    </div>
    <div>
      <div class="prix">
        <h4>Prix :</h4>
        <p style="color: red; font-weight: bold">{{ product.price }} €</p>
      </div>
      <div class="prix">
        <h4>Evaluation :</h4>
        <p>{{ product.rating }}⭐</p>
      </div>
    </div>
    <div id="button">
      <button @click="add" class="button">Ajouter au panier</button>
      <button class="voir">
        <router-link :to="{ name: 'Details', params: { id: product.id } }" class="router"
          >Voir détails</router-link
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
#image {
  padding: 5px;
  height: 230px;
  border: 2px solid;
  border-image: linear-gradient(180deg, purple, red) 1;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px); /* léger effet de "levée" */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* ombre douce */
}
.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}
.prix {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 8px;
  margin: 3px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.router {
  text-decoration: none;
  color: white;
}
#button {
  display: flex;
  gap: 20px;
}
.button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.button:hover {
  background-color: rgba(255, 0, 0, 0.774);
}
.voir {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: rgba(255, 0, 0, 0.774);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.voir:hover {
  background-color: rgba(139, 0, 139, 0.836);
}
</style>
