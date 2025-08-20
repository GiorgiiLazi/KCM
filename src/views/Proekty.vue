<template>
  <main class="projects-page">
    <!-- Hero -->
    <section class="hero first-color fade-in">
      <div class="container">
        <h1>Наши проекты домов</h1>
        <p>Выберите проект, который вам нравится, и узнайте все детали.</p>
      </div>
    </section>

    <!-- Filter -->
    <section class="filter second-color">
      <div class="container filter-container">
        <select v-model="selected" @change="applyFilter">
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid first-color">
      <div class="container">
        <div class="grid">
          <div 
            class="project-card"
            v-for="project in projectsRef" 
            :key="project.id"
            @click="goToProject(project.id)">
            
            <img 
              :src="project.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'" 
              :alt="project.name" 
            />
            <h3>{{ project.name }}</h3>
            <p>Площадь: {{ project.square }} м²</p>
            <p>Этажность: {{ project.floors }}</p>
            <p>Комнат: {{ project.rooms }}</p>
            <p>Описание: {{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { scrollToTop } from "@/composables/scrollToTop";

// ✅ Главный массив (нетронутый)
const sourceProjects = Object.freeze([
  {
    id: 'dom-1',
    name: 'Одноэтажный дом 1',
    square: 120,
    floors: 1,
    rooms: 3,
    height: 6,
    images: [
      '/images/projects/dom1-1.webp',
      '/images/projects/dom1-2.webp',
      '/images/projects/dom1-3.webp'
    ],
    plans: [
      '/images/plans/dom1-1.webp',
      '/images/plans/dom1-2.webp'
    ],
    description: 'Просторный одноэтажный дом с современным дизайном и функциональной планировкой.'
  },
  {
    id: 'dom-2',
    name: 'Двухэтажный дом 2',
    square: 200,
    floors: 2,
    rooms: 5,
    height: 8,
    images: [
      '/images/projects/dom2-1.webp',
      '/images/projects/dom2-2.webp',
      '/images/projects/dom2-3.webp'
    ],
    plans: [
      '/images/plans/dom2-1.webp',
      '/images/plans/dom2-2.webp',
      '/images/plans/dom2-3.webp'
    ],
    description: 'Двухэтажный дом с большими окнами и уютной террасой, идеально для семьи.'
  },
  {
    id: 'dom-3',
    name: 'Одноэтажный дом 3',
    square: 150,
    floors: 1,
    rooms: 4,
    height: 6.5,
    images: [
      '/images/projects/dom3-1.webp',
      '/images/projects/dom3-2.webp'
    ],
    plans: [
      '/images/plans/dom3-1.webp',
      '/images/plans/dom3-2.webp'
    ],
    description: 'Современный одноэтажный коттедж с просторной кухней-гостиной и двумя спальнями.'
  }
])

const projectsRef = ref([...sourceProjects])
const selected = ref('All')

const options = reactive([
  { text:'Одноэтажные', value: 1 },
  { text:'Двухэтажные', value: 2 },
  { text:'Все проекты', value: 'All' }
])

// ✅ фильтрация всегда от sourceProjects
const applyFilter = () => {
  if (selected.value === 'All') {
    projectsRef.value = [...sourceProjects]
  } else {
    projectsRef.value = sourceProjects.filter(
      p => p.floors === Number(selected.value)
    )
  }
}

const router = useRouter()
const goToProject = (id) => {
  router.push(`/proekty/${id}`)
  scrollToTop()
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.projects-page { 
  font-family: Arial, sans-serif; 
  color: #333; 
}

.container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 60px 20px; 
}

.hero h1 { 
  font-family: "Bebas Neue", sans-serif; 
  font-size: 60px; 
  color: #fff; 
  text-align: center; 
}

.hero p { 
  text-align: center; 
  margin-top: 20px; 
  color: #fff; 
}

.first-color { 
  background: #005689; 
  color: #fff; 
}

.second-color { 
  background: #f0f0f0; 
  color: #333; 
}

.filter-container { 
  display: flex; 
  justify-content: center; 
  gap: 20px; 
  margin-bottom: 40px; 
}

.filter-container select { 
  padding: 10px 20px; 
  font-size: 16px; 
  border: 2px solid #005689; 
  background: none; 
  cursor: pointer; 
  transition: 0.3s; 
}

.filter-container select:hover { 
  background: #005689; 
  color: #fff; 
}

.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); 
  gap: 30px; 
}

.project-card { 
  background: #ffff; 
  border-radius: 12px; 
  overflow: hidden; 
  cursor: pointer; 
  transition: transform 0.3s; 
  text-align: center; 
  color: black;
  text-align: left;
  padding: 10px;
}

.project-card img { 
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
}

.project-card h3 { 
  font-family: "Bebas Neue", sans-serif; 
  font-size: 24px; 
  margin: 10px 0; 
}

.project-card p { 
  margin: 5px 0; 
  font-size: 16px; 
}

.project-card:hover { 
  transform: translateY(-10px); 
}

/* fade-in только для Hero */
.fade-in { 
  opacity: 0; 
  transform: translateY(30px); 
  animation: fadeUp 1s ease forwards; 
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) { 
  .hero h1 { font-size: 40px; } 
  .grid { gap: 20px; } 
  .project-card img { height: 180px; } 
}
</style>