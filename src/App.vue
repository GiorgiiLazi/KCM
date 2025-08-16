<template>
  <section class="app-container">
    <header class="header-background">
      <div class="header-content">
        <NavRouter />
        <nav class="nav">
          <NavContacts />
          <DynamicTitle :title="currentTitle" :subtitle="currentSubtitle" />
        </nav>
      </div>

      <!-- Dynamic background slider -->
      <div class="slider-container">
        <transition-group name="slide" tag="div">
          <img
            :key="currentBg"
            class="header-img"
            :src="currentBg"
            alt="Header background"
            loading="lazy"
          />
        </transition-group>
      </div>
    </header>

    <router-view />
  </section>

  <Footer />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavRouter from "./components/NavRouter.vue";
import NavContacts from "./components/NavContacts.vue";
import DynamicTitle from "./components/DynamicTitle.vue";
import Footer from "./components/Footer.vue";
import { dynamicTitles } from "./routes/dynamicTitles";

const route = useRoute();

const currentTitle = computed(() => dynamicTitles[route.path]?.title || "Строительная компания КСМ");
const currentSubtitle = computed(() => dynamicTitles[route.path]?.subtitle || "OOO «СК КАПИТАЛСТРОЙМОНТАЖ»");

const routeBackgrounds = {
  "/": "/images/dynamic/main.webp",
  "/uslugi/landshaftnyy-dizayn": "/images/dynamic/park.webp",
  "/uslugi/otdelochnye-raboty": "/images/dynamic/otdelka.webp",
  "/uslugi/fasadnye-raboty": "/images/dynamic/facade.webp",
  "/uslugi/blagoustroystvo-territorii": "/images/dynamic/benches.webp",
  "/uslugi/krovelnye-raboty": "/images/dynamic/house.webp",
  "/uslugi/kladochnye-raboty": "/images/dynamic/kladka.webp",
  "/uslugi/gidroizolyatsiya": "/images/dynamic/hydro.webp",
  "/remont-kvartir-i-komnat": "/images/dynamic/interiour-1.webp",
  "/stroitelstvo-domov-i-kottedzhey": "/images/dynamic/stroyka.webp",
  "/kontakty": "/images/dynamic/interiour-2.webp",
  "/rekvizity": "/images/dynamic/planning.webp",
  "/proekty": "/images/dynamic/plans.webp",
  "/kcm": "/images/dynamic/ksm.webp",
  "/galereya": "/images/dynamic/otdelka.webp",
};

const currentBg = computed(() => routeBackgrounds[route.path] || "/images/architect-02.webp");
</script>

<style>
html, body, #app {
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: white;
  background: #d5eeff;
  font-family: "Fira Sans", sans-serif;
}

/* Header */
.header-background {
  position: relative;
  height: 75vh;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
}
.header-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Slider */
.slider-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

/* Transition animations */
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-active {
  animation: slide-in 0.4s ease-out forwards;
}

.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-active {
  animation: slide-out 0.4s ease-out forwards;
}

@keyframes slide-in {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}

@keyframes slide-out {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Header title */
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 3;
}

.title-app {
  text-align: center;
  color: #d5eeff;
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
  pointer-events: none;
}

.title-app h1 {
  margin: 0;
  font-size: 2rem;
}
.title-app h2 {
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
}

@media (max-width:768px) {
  .header-background {
    height: 40vh;
  }
}
</style>