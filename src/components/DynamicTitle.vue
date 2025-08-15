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
import Title from "./UI/Title.vue";
import { reactive } from "vue";

const titles = reactive(dynamicTitles);
</script>

<style scoped>
.title-wrapper {
  position: relative;
  height: 40vh; /* now matches the mobile container */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.title-app {
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #d5eeff;
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
  pointer-events: auto;
}

.title-app h1 {
  margin: 0;
  font-size: 2.5rem;
}

.title-app h2 {
  margin: 0.5rem 0 0;
  font-size: 1.5rem;
}

.linkToForm {
  text-decoration: none;
  color: #d5eeff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .title-wrapper {
    height: 40vh; /* mobile container height */
  }
  .title-app h1 {
    font-size: 1.8rem;
  }
  .title-app h2 {
    font-size: 1.2rem;
  }
}
</style>
