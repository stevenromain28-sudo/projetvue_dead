<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
import Notification from './components/Notification.vue'

const cart = reactive([])
const notification = ref('')
const achat = ref(false)

const addToCart = (product) => {
  const item = cart.find((p) => p.id === product.id)

  if (item) {
    item.quantity++
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }
  achat.value = !achat.value
  notification.value = ` ✖(1) ${product.title} ajouté au panier 🛒`

  setTimeout(() => {
    achat.value = false
  }, 3000)
}
</script>

<template>
  <nav id="header">
    <h1><span id="white">Dev</span>👀<span id="violet">Shop</span></h1>
    <ul>
      <li><router-link :to="{ name: 'Home' }" class="route">Accueuil</router-link></li>
      <li><router-link :to="{ name: 'Produits' }" class="route">Nos Produits</router-link></li>
      <li>
        <router-link :to="{ name: 'Card' }" class="route2"
          ><span>Paniers</span
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L312 96L312 198.1L281 167.1C271.6 157.7 256.4 157.7 247.1 167.1C237.8 176.5 237.7 191.7 247.1 201L319.1 273C328.5 282.4 343.7 282.4 353 273L425 201C434.4 191.6 434.4 176.4 425 167.1C415.6 157.8 400.4 157.7 391.1 167.1L360.1 198.1L360.1 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528z"
            />
          </svg>
        </router-link>
      </li>
    </ul>
    <div id="SVG">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
        />
      </svg>
    </div>
  </nav>
  <div>
    <RouterView :cart="cart" @add-to-cart="addToCart" />
  </div>
  <div>
    <Notification v-if="achat === true" :message="notification" />
  </div>
</template>

<style scoped>
#header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, black, purple, rgba(255, 0, 0, 0.993));
}
ul {
  display: flex;
  gap: 20px;
}
h1 {
  margin-left: 1%;
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

li {
  list-style-type: none;
  color: whitesmoke;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.route {
  width: 90%;
  margin: 10px;
  text-decoration: none;
  color: white;
  border-radius: 8px;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
}
.route2 {
  background-color: rgba(221, 13, 13, 0.692);
  width: 90%;
  margin: 10px;
  padding-inline: 8px;
  text-decoration: none;
  color: white;
  border-radius: 8px;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
}
.route:hover {
  color: aqua;
  cursor: pointer;
}
.route2:hover {
  background-color: aqua;
  color: black;
}
#SVG {
  margin: 10px;
  display: flex;
  gap: 20px;
}
#white {
  color: white;
}
#violet {
  color: aqua;
}
svg {
  width: 30px;
  height: 50px;
  color: white;
}
</style>
