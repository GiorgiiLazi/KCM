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
import { projects } from '@/data/projects.js'

const sourceProjects = projects
const projectsRef = ref([...sourceProjects])
const selected = ref('All')

const options = reactive([
  { text:'Одноэтажные', value: 1 },
  { text:'Два и выше', value: 2 },
  { text:'Все проекты', value: 'All' }
])

const applyFilter = () => {
  if (selected.value === 'All') {
    projectsRef.value = [...sourceProjects]
  } else if (Number(selected.value) === 1) {
    projectsRef.value = sourceProjects.filter(p => p.floors === 1)
  } else {
    projectsRef.value = sourceProjects.filter(p => p.floors >= 2)
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
  line-height: 1.6;
}

.container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 60px 20px; 
}

.hero.first-color { 
  background: #005689;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}

.hero h1 { 
  font-family: "Bebas Neue", sans-serif; 
  font-size: 60px; 
  margin: 0; 
}

.hero p { 
  margin-top: 20px; 
  font-size: 18px; 
  max-width: 700px; 
  margin-left: auto; 
  margin-right: auto; 
}

.filter.second-color { 
  background: #f0f0f0; 
  padding: 40px 20px;
}

.filter-container { 
  display: flex; 
  justify-content: center; 
  gap: 20px; 
  flex-wrap: wrap;
}

.filter-container select { 
  padding: 12px 25px; 
  font-size: 16px; 
  border: 2px solid #005689; 
  border-radius: 8px;
  background: #fff;
  color: #005689;
  cursor: pointer; 
  transition: all 0.3s ease; 
}

.filter-container select:hover, 
.filter-container select:focus { 
  background: #005689; 
  color: #fff; 
  outline: none;
}

.projects-grid.first-color { 
  background: #fff; 
  padding: 60px 20px;
}

.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); 
  gap: 30px; 
}

.project-card { 
  background: #fff; 
  border-radius: 20px; 
  overflow: hidden; 
  cursor: pointer; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex; 
  flex-direction: column; 
}

.project-card:hover { 
  transform: translateY(-10px); 
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

.project-card img { 
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
  transition: transform 0.3s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-card-content {
  padding: 0px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card h3 { 
  padding: 0px 15px;
  font-family: "Bebas Neue", sans-serif; 
  font-size: 26px; 
  margin-bottom: 10px; 
  color: #005689;
}

.project-card p { 
  padding: 0px 15px;
  margin: 5px 0; 
  font-size: 16px; 
  color: #333;
}

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

@media (max-width: 1024px) {
  .hero h1 { font-size: 50px; }
  .project-card img { height: 180px; }
}

@media (max-width: 768px) {
  .hero h1 { font-size: 40px; }
  .grid { gap: 20px; }
  .project-card img { height: 160px; }
}

@media (max-width: 480px) {
  .hero h1 { font-size: 32px; }
  .project-card h3 { font-size: 20px; }
}
</style>
