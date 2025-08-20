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

      <!-- Dynamic background with slide animation -->
      <div class="slider-container" :class="{ 'mobile': isMobile }">
        <transition-group
          v-if="!isMobile"
          name="slide"
          tag="div"
          class="slide-wrapper"
        >
          <img
            :key="currentBg"
            class="header-img"
            :src="currentBg"
            alt="Header background"
            loading='eager'
            @load="onImageLoad"
          />
        </transition-group>

        <!-- Mobile: simple fade (or instant switch) -->
        <transition name="fade" v-else>
          <img
            :key="currentBg"
            class="header-img"
            :src="currentBg"
            alt="Header background"
            loading="lazy"
            @load="onImageLoad"
          />
        </transition>
      </div>
    </header>

    <router-view />
  </section>

  <Footer />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";
import NavRouter from "./components/NavRouter.vue";
import NavContacts from "./components/NavContacts.vue";
import DynamicTitle from "./components/DynamicTitle.vue";
import Footer from "./components/Footer.vue";
import { dynamicTitles } from "./routes/dynamicTitles";

const route = useRoute();

// Titles
const currentTitle = computed(
  () =>
    dynamicTitles[route.path]?.title || "Строительная компания КСМ"
);
const currentSubtitle = computed(
  () =>
    dynamicTitles[route.path]?.subtitle ||
    "OOO «СК КАПИТАЛСТРОЙМОНТАЖ»"
);

// Backgrounds
const routeBackgrounds = {
  "/": "/images/dynamic/stroyka.webp",
  "/uslugi/landshaftnyy-dizayn": "/images/dynamic/park.webp",
  "/uslugi/otdelochnye-raboty": "/images/dynamic/otdelka.webp",
  "/uslugi/fasadnye-raboty": "/images/dynamic/facade.webp",
  "/uslugi/blagoustroystvo-territorii": "/images/dynamic/benches.webp",
  "/uslugi/krovelnye-raboty": "/images/dynamic/house.webp",
  "/uslugi/kladochnye-raboty": "/images/dynamic/kladka.webp",
  "/uslugi/gidroizolyatsiya": "/images/dynamic/hydro.webp",
  "/remont-kvartir-i-komnat": "/images/dynamic/interiour-1.webp",
  "/stroitelstvo-domov-i-kottedzhey": "/images/dynamic/main.webp",
  "/kontakty": "/images/dynamic/interiour-2.webp",
  "/rekvizity": "/images/dynamic/contract.webp",
  "/proekty": "/images/dynamic/plans.webp",
  "/kcm": "/images/dynamic/ksm.webp",
  "/galereya": "/images/dynamic/otdelka.webp",
  "/:pathMatch(.*)*": "/images/dynamic/stroyka.webp"
};
const currentBg = computed(
  () => routeBackgrounds[route.path] || "/images/architect-02.webp"
);

// Image loading state for blur
const imageLoaded = ref(false);
function onImageLoad() {
  imageLoaded.value = true;
}

// Watch route change to reset blur
watch(() => currentBg.value, () => {
  imageLoaded.value = false;
});

// Apply loaded class
watch(imageLoaded, (loaded) => {
  const imgs = document.querySelectorAll(".header-img");
  imgs.forEach(img => {
    if (loaded) img.classList.add("loaded");
    else img.classList.remove("loaded");
  });
});

// Detect mobile
const isMobile = ref(false);
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);

  // Add loaded class if already cached
  const imgs = document.querySelectorAll(".header-img");
  imgs.forEach(img => {
    if (img.complete) img.classList.add("loaded");
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@300;400;500;700&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Share+Tech&display=swap");

html,
body,
#app {
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: white;
  background: #d5eeff;
  font-family: "Fira Sans", sans-serif;
}

/* Header background */
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

.slider-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

/* LQIP blur */
.header-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6) blur(20px);
  transition: filter 0.6s ease;
  will-change: transform, opacity;
}

.header-img.loaded {
  filter: brightness(0.6) blur(0);
}

/* Slide animations */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}

/* Mobile fallback fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Заголовок */
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

.router-link-exact-active {
  background: #ff895d;
}

@media (max-width: 768px) {
  .header-background {
    height: 40vh;
  }
}
</style>