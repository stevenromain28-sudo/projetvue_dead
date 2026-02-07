import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'
import ProductsDetails from '@/views/ProductsDetails.vue'
import PaiementForm from '@/components/PaiementForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/Products',
    name: 'Produits',
    component: ProductsView,
  },
  {
    path: '/products/:id',
    name: 'Details',
    component: ProductsDetails,
    props: true,
  },
  {
    path: '/Card',
    name: 'Card',
    component: CartView,
  },
  {
    path: '/Card/Form',
    name: 'formulaire',
    component: PaiementForm,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
