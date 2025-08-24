<template>
  <main class="project-details-page">
    <div class="container">
      <button @click="$router.back()">← Назад</button>

      <nav class="nav-container">
        <router-link to="/">ksm-spb.ru</router-link>/<router-link to="/proekty">proekty</router-link>/<span>{{ project.id }}</span>
      </nav>
      <h1>{{ project.name }}</h1>

      <!-- Images -->
      <div class="images">
        <div class="main-image" @click="openImageViewer(0)">
          <img :src="project.images[0]" :alt="project.name" loading="lazy" />
        </div>
        <div class="side-images">
          <div 
            v-for="(img, index) in project.images.slice(1, 6)" 
            :key="index" 
            class="side-image"
            @click="openImageViewer(index + 1)"
          >
            <img :src="img" :alt="project.name" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Lightbox for images -->
      <vue-easy-lightbox
        :visible="visibleImages"
        :imgs="project.images"
        :index="currentImageIndex"
        @hide="visibleImages = false"
      />

      

      
      <!-- Description -->
      <div class="project-description">
        <h2>Описание проекта</h2>
        <p><strong>Площадь:</strong> {{ project.square }} м²</p>
        <p><strong>Этажность:</strong> {{ project.floors }}</p>
        <p><strong>Комнат:</strong> {{ project.rooms }}</p>
        <p><strong>Описание:</strong> {{ project.description }}</p>
      </div>

      <!-- Plans -->
      <div class="plans">
        <h2>Планировка:</h2>
        <div class="plans-grid">
          <img 
            v-for="(plan, index) in project.plans.length ? project.plans : ['https://via.placeholder.com/600x400?text=No+Image']" 
            :key="index" 
            :src="plan" 
            :alt="project.name" 
            class="plan-image"
            @click="openPlanViewer(index)"
          />
        </div>
      </div>
      <!-- Lightbox for plans -->
      <vue-easy-lightbox
        :visible="visiblePlans"
        :imgs="project.plans"
        :index="currentPlanIndex"
        @hide="visiblePlans = false"
      />

    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'
import VueEasyLightbox from 'vue-easy-lightbox'

const route = useRoute()

// Project
const project = computed(() => {
  return projects.find(p => String(p.id) === route.params.id) || {
    name: 'Проект не найден',
    square: '-',
    floors: '-',
    rooms: '-',
    description: '-',
    images: ['https://via.placeholder.com/600x400?text=No+Image'],
    plans: []
  }
})

// Lightbox states
const visibleImages = ref(false)
const currentImageIndex = ref(0)

const visiblePlans = ref(false)
const currentPlanIndex = ref(0)

const openImageViewer = (index) => {
  currentImageIndex.value = index
  visibleImages.value = true
}

const openPlanViewer = (index) => {
  currentPlanIndex.value = index
  visiblePlans.value = true
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: black;
}

/* Images block */
.images {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}
.main-image {
  flex: 2;
  cursor: pointer;
}
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.side-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.side-image {
  flex: 1;
  cursor: pointer;
}
.side-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Plans */
.plans {
  margin-top: 40px;
}
.plans h2 {
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
}
.plans-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.plan-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}

/* Description */
.project-description {
  margin-top: 40px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  line-height: 1.6;
}
.project-description h2 {
  font-size: 22px;
  margin-bottom: 16px;
}
.project-description p {
  margin-bottom: 8px;
}

/* Button */
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