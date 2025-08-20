<template>
  <main class="project-details-page">
    <div class="container">
      <button @click="$router.back()">← Назад</button>

      <h1>{{ project.name }}</h1>
      <p>Площадь: {{ project.square }} м²</p>
      <p>Этажность: {{ project.floors }}</p>
      <p>Комнат: {{ project.rooms }}</p>
      <p>Описание: {{ project.description }}</p>

      <div class="images">
        <img 
          v-for="(img, index) in project.images.length ? project.images : ['https://via.placeholder.com/600x400?text=No+Image']" 
          :key="index" 
          :src="img" 
          :alt="project.name" 
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'

const route = useRoute()

// Находим проект по id из URL
const project = computed(() => {
  return projects.find(p => String(p.id) === route.params.id) || {
    name: 'Проект не найден',
    square: '-',
    floors: '-',
    rooms: '-',
    description: '-',
    images: []
  }
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
.images img {
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 12px;
}
button {
  margin-bottom: 20px;
  padding: 8px 16px;
  cursor: pointer;
  background: #005689;
  color: #fff;
  border: none;
  border-radius: 6px;
}
</style>