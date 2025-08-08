<template>
  <section class="app-container">
    <nav class="background">
      <NavRouter />
      <NavContacts />
    </nav>

    <!-- Заголовок отображается поверх background -->
    <DynamicTitle />

    <router-view />
    <HeroSection v-if="$route.path === '/'" />
  </section>

  <Footer />
</template>

<script setup>
import NavRouter from "./components/NavRouter.vue";
import NavContacts from "./components/NavContacts.vue";
import HeroSection from "./components/HeroSection.vue";
import DynamicTitle from "./components/DynamicTitle.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Share+Tech&display=swap");

#app,
body,
html {
  overflow-x: hidden;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  padding: 0;
  margin: 0;
  color: white;
  background: #d5eeff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-style: normal;
}
.app-container {
  position: relative;
}
.background {
  position: relative;
  height: 35vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url("@/assets/photo1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 25%;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
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
</style>
