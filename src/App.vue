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

      <!-- Dynamic background with smooth slide-fade -->
      <transition name="slide-fade-bg" mode="out-in">
        <img
          :key="currentBg"
          class="header-img"
          :src="currentBg"
          alt="Header background"
          loading="lazy"
        />
      </transition>
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
html, body, #app, .app-container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Fira Sans", sans-serif;
  background: #000;
  color: white;
}

.header-background {
  position: relative;
  height: 75vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
}

.header-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.6);
}

/* Smooth simultaneous slide-fade for backgrounds */
.slide-fade-bg-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-bg-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-bg-leave-from {
  opacity: 1;
  transform: translateX(0);
  position: absolute; /* держим над новым фоном */
}
.slide-fade-bg-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
.slide-fade-bg-enter-active{
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}
.slide-fade-bg-leave-active {
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}

.nav {
  position: relative;
  height: 100%;
}
</style>