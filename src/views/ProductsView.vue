<script setup>
import { ref, onMounted, computed } from 'vue'
import Prouduits from '@/components/Prouduits.vue'
import ProductsDetails from './ProductsDetails.vue'

// ✅ State pour stocker les produits
const products = ref([])
const search = ref('')
const selectedProduct = ref(null)
// Details

// Recupération des données du fetch
onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase()),
  )
})
</script>

<template>
  <section>
    <h1>Nos Produits</h1>
    <div class="search-bar">
      <input type="text" v-model="search" placeholder="Rechercher un produit..." />
    </div>
    <div class="product-grid">
      <Prouduits
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', product)"
      />
    </div>
  </section>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
}
.product-grid {
  width: 60%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}
.search-bar {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.search-bar input {
  width: 320px;
  padding: 12px 16px;
  border-radius: 14px;
  border: 2px solid transparent;
  color: black;
  outline: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

.search-bar input::placeholder {
  color: #777;
}

.search-bar input:focus {
  border-image: linear-gradient(90deg, aqua, violet, red) 1;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  border-radius: 10px;
}
</style>
