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

      <!-- Dynamic background -->
      <img
        class="header-img"
        :src="currentBg"
        alt="Header background"
        loading="lazy"
      />
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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Share+Tech&display=swap");

html, body, #app {
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
  z-index: 1;
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
  z-index: 0;
  filter: brightness(0.6);
}

.nav {
  position: relative;
  height: 100%;
}

/* Анимация переходов */
.fade-enter-from,
.fade-leave-to { opacity: 0; }
.fade-enter-to,
.fade-leave-from { opacity: 1; }
.fade-enter-active,
.fade-leave-active { transition: opacity 0.5s ease; }

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
  z-index: 1;
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

@media (max-width:768px) { 
  .header-background {
    height: 40vh;
  }
}
</style>