<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
  product.value = await res.json()
  console.log(product.value)
})
// emits et propo

const emit = defineEmits(['add-to-cart'])
const add = () => {
  emit('add-to-cart',product.value)
}
</script>
<template>
  <div v-if="product" class="details">
    <div id="image"><img :src="product.thumbnail" /></div>

    <div>
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>

      <h3><strong>Marque </strong>: {{ product.brand }}</h3>
      <p><strong>Prix </strong>: {{ product.price }} €</p>
      <p><strong>Note </strong>: {{ product.rating }} ⭐</p>
      <p><strong>Stock </strong>: {{ product.stock }}</p>
      <button @click="add" class="button-32">Commander</button>
      <button class="button-33" role="button" @click="$router.back()">Revenir</button>
    </div>
  </div>
  <div></div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
strong {
  color: red;
}
.details {
  display: flex;
  gap: 20px;
  background: white;
  padding: 20px;
  width: 50%;
  height: 360px;
  margin: auto;
  margin-top: 5%;
  border-radius: 10px;
  position: relative;
  animation: scale 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
}
p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
img {
  margin-inline: 50px;
}
#image {
  border: 2px solid;
   border-image: linear-gradient(180deg, aqua, purple, red) 1;
}
h1 {
  background: linear-gradient(90deg, aqua, violet, red);
  padding: 8px;
  border-radius: 5px;
}

@keyframes scale {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* CSS */
.button-33 {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgb(251, 194, 229);
  border-radius: 10px;
  box-shadow:
    rgb(251, 194, 229) 0 -25px 18px -14px inset,
    rgb(251, 194, 229) 0 1px 2px,
    rgb(251, 194, 229) 0 2px 4px,
    rgb(251, 194, 229) 0 4px 8px;

  color: black;
  cursor: pointer;
  display: inline-block;
  font-family:
    CerebriSans-Regular,
    -apple-system,
    system-ui,
    Roboto,
    sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-32 {
  background-color: aqua;
  border-radius: 10px;
  box-shadow:
    aqua 0 -25px 18px -14px inset,
    aqua,
    aqua 2px 4px,
    aqua 0 4px 8px;

  color: black;
  cursor: pointer;
  display: inline-block;
  font-family:
    CerebriSans-Regular,
    -apple-system,
    system-ui,
    Roboto,
    sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-32:hover {
  transform: scale(1.05) rotate(-1deg);
}
.button-33:hover {
  transform: scale(1.05) rotate(-1deg);
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
