<template>
  <div class="container">
    <router-link class="fade-in delay-2" itemprop="url" to="/kontakty">
      <button @click="scrollToTop" class="btn">Оставить заявку</button>
    </router-link>
  </div>
</template>

<script setup>
import { scrollToTop } from '@/composables/scrollToTop';
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.btn {
  background: #fff;
  color: #ff895d;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  text-transform: uppercase;
}
.btn:hover {
  transform: translateY(-5px);
}
</style>
