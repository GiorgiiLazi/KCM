<template>
  <header class="title-wrapper">
    <Title v-if="titles[$route.path]">
      <div class="title-app">
        <h1>{{ titles[$route.path].title }}</h1>

        <h2 v-if="$route.path !== '/'">{{ titles[$route.path].subtitle }}</h2>
        <router-link v-else to="/kontakty" class="linkToForm" role="link">
          <h2>{{ titles[$route.path].subtitle }}</h2>
        </router-link>
      </div>
    </Title>
  </header>
</template>

<script setup>
import { dynamicTitles } from "@/routes/dynamicTitles";
import { servicesContent } from "@/routes/serviceContent";
import Title from "./UI/Title.vue";
import { onMounted, reactive } from "vue";
import {gsap} from 'gsap'

onMounted(()=>{
  gsap.to(".linkToForm", {
  x: 20, // Moves the element 200px to the right
  duration: 2, // Animation duration of 2 seconds
  repeat: -1, // Repeats the animation infinitely
  yoyo: true // Makes the animation play forward and then backward
});
})

const titles = reactive(dynamicTitles)


</script>

<style scoped>

.title-wrapper {
  position: relative;
  bottom: 0;
  left: 0;
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.title-app {
  position: absolute;
  top: calc(100% + 10px); /* 10px below the nav bar */
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #d5eeff;
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
}
.title-app a{
  z-index: 1000000;
  cursor: pointer;
}
.title-app h1 {
  margin: 0;
  font-size: 2rem;
}

.title-app h2 {
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
}
.linkToForm {
  pointer-events: auto;
  z-index: 10000;
  cursor: pointer;
  text-decoration: none;
  color: #d5eeff;
}
@media (max-width: 768px) {
  .title-wrapper {
    display: none;
  }
}
</style>
