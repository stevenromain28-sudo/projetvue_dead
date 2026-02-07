<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  message: String,
})
</script>

<template>
  <div class="notif">
    <h1>Notification</h1>
    <p>{{ message }}</p>
    <button id="voir"><router-link :to="{ name: 'Card' }" class="route">Voir mon panier</router-link></button>
  </div>
</template>

<style scoped>
.notif {
  position: fixed;
  top: 90px;
  right: 25px;
  width: 280px;
  padding: 16px 20px;
  border-radius: 14px;

  background: linear-gradient(135deg, #00ffff, #8a2be2, #ff3c3c);
  color: white;

  box-shadow:
    0 0 15px rgba(0, 255, 255, 0.6),
    0 0 30px rgba(138, 43, 226, 0.4);

  animation:
    slideIn 0.5s ease-out,
    pulse 2.5s ease-in-out infinite;

  z-index: 9999;
}

/* TITRE */
.notif h1 {
  font-size: 1rem;
  margin-bottom: 6px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000;
}
 
/* MESSAGE */
.notif p {
  font-size: 0.95rem;
  font-weight: bold;
  margin: 0;
  color: white;
}

/* ANIMATION D'ENTRÉE */
@keyframes slideIn {
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* PULSATION LÉGÈRE */
@keyframes pulse {
  0% {
    box-shadow:
      0 0 12px rgba(0, 255, 255, 0.5),
      0 0 22px rgba(138, 43, 226, 0.3);
  }
  50% {
    box-shadow:
      0 0 22px rgba(255, 60, 60, 0.6),
      0 0 35px rgba(138, 43, 226, 0.6);
  }
  100% {
    box-shadow:
      0 0 12px rgba(0, 255, 255, 0.5),
      0 0 22px rgba(138, 43, 226, 0.3);
  }
}
#voir {
  margin-top: 14px;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  cursor: pointer;

  background: linear-gradient(135deg, #000, #111);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 12px rgba(0, 255, 255, 0.6);

  animation: glow 2.5s ease-in-out infinite;
  transition: all 0.3s ease;
}

/* TEXTE DU LIEN */
#voir .route {
  display: block;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  color: aqua;
  transition: color 0.3s ease;
}

/* HOVER */
#voir:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 18px rgba(138, 43, 226, 0.8),
    0 0 30px rgba(255, 60, 60, 0.6);
}

/* TEXTE AU HOVER */
#voir:hover .route {
  color: white;
}

/* ANIMATION D'APPEL À L'ACTION */
@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  }
  50% {
    box-shadow:
      0 0 18px rgba(138, 43, 226, 0.8),
      0 0 30px rgba(255, 60, 60, 0.6);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  }
}
</style>
