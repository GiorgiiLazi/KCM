<template>
  <section class="hero first-color">
    <div class="container">
      <h1 class="fade-in" itemprop="name">ООО «СК КАПИТАЛСТРОЙМОНТАЖ»</h1>
      <p class="fade-in delay-1">
        Наша компания специализируется на широком спектре строительных и
        отделочных работ.
      </p>
    </div>
  </section>
  <section
    class="about-company third-color"
    itemscope
    itemtype="http://schema.org/Organization"
  >
    <div class="about-inner">
      <!-- Левая часть — описание -->
      <div class="about-content third-color">
        <h3 class="fade-in delay-2"> 
          <strong>«</strong>
          <br>
          <p>Качество, прозрачность и индивидуальный подход — вот что ценят наши
          клиенты. 
          <br>
          Мы строим дома, которые служат десятилетиями.</p>
          <br>
          <strong class="right-mark">»</strong>
        </h3>
        <article class="about-description" itemprop="description">
          <h1 class="subtitle fade-in delay-3">Строительная компания «СК КСМ»</h1>
          
          <h2 class="subtitle fade-in delay-4">Мы выполняем:</h2>
          
          <ul  v-for="service in refServicesKcm "class="about-services fade-in delay-5" :key="service.id">
            <li>
              <span class="material-symbols-outlined">check</span>
              <p>{{ service.name }}</p>
            </li>
          </ul>
          
        </article>
      </div>

      <!-- Правая часть — фото -->
      <div class="img-wrapper fourth-color">
        <div class="img-circle">
          <img
            src="/images/general-director.webp"
            alt="Генеральный директор «КСМ» Михаил"
            loading="lazy"
          />
        </div>
        <label class="img-caption">Генеральный директор «СК КСМ» – Михаил</label>
      </div>
    </div>
  </section>
  <section class="team-section second-color">
    <div class="container">
      <h2 class="team-title">Наша команда</h2>
      <ul class="team-list">
        <li
          v-for="(employee, index) in refEmployees"
          :key="index"
          class="team-member third-color"
          itemscope
          itemtype="http://schema.org/Person"
        >
          <h3 class="employee-name" itemprop="name">{{ employee.name }}</h3>
          <p class="employee-position" itemprop="jobTitle">
            {{ employee.position }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { servicesKcm } from '@/data/servicesKsm';
import { employees } from '@/data/employees';

const refServicesKcm = reactive(servicesKcm);
const refEmployees = reactive(employees);
</script>

<style scoped>
.hero {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero p {
  margin-top: 20px;
}
h1 {
  font-size: 60px;
  text-align: center;
}
h2 {
  font-size: 32px;
  text-align: center;
}
.about-content h3{
  margin-bottom: 100px;
  
}
.about-content h3 p{
  padding-left: 30px;
  font-size: 30px;
  font-family: "Fira Sans", serif;
  font-weight: 800;
  font-style: normal;
}
h3 strong{
  font-size: 4.3em;
  color: #ff895d;
}
.right-mark{
  position: absolute;
  right: 0;
}
.subtitle {
  text-align: start;
}
.about-company {
  padding: 40px 20px;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Bebas Neue", sans-serif;
}

.about-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 1s ease forwards;
}

/* === Company's content === */
.about-content {
  flex: 1;
  min-width: 0;
  animation: fadeInUp 0.8s ease forwards;
  position: relative;
}
.first-color {
  background: #005689;
  color: white;
  padding: 40px 20px;
}
.second-color {
  background: #007cb9;
  color: white;
  padding: 30px 20px;
}
.third-color {
  background: #d5eeff;
  color: black;
  padding: 20px;
  margin: 0;
}
.fourth-color {
  background: #ff895d;
  color: white;
  padding: 40px 20px;
  text-align: center;
}
.about-title {
  font-size: 2.2em;
  margin-bottom: 10px;
  color: #ff895d;
}

.about-subtitle {
  font-size: 1.4em;
  margin-bottom: 20px;
  color: #ff895d;
}

.about-description {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-services {
  margin: 15px 0;
  padding-left: 20px;
}

.about-services li {
  display: flex;
  align-items: center;
  justify-items: flex-start;
  list-style: none;
  margin-bottom: 5px;
  font-weight: bold;
}

.about-services li span {
  font-size: 1.5em;
  font-weight: bold;
  color: green;
  margin-right: 8px;
}

/* === General Director photo === */
.img-wrapper {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 300px;
  animation: fadeIn 1.2s ease-in-out;
}

.img-circle {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ccc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.img-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.img-caption {
  margin-top: 12px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  font-family: "Fira Sans", sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* === Team === */
.team-section {
  padding: 20px;
  animation: fadeInUp 1s ease forwards;
}

.team-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.team-member {
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: inline-block; /* makes scaling work nicely */
}

.team-member:hover {
  transform: scale(1.05); /* scales card */
}

/* Optional: counter-scale text so child elements don't grow */
.team-member > * {
  transition: transform 0.3s ease;
}

.team-member:hover > * {
  transform: scale(0.952); /* 1 / 1.05 to keep children visually same size */
}

/* === Mobile version === */
@media (max-width: 768px) {
  .about-inner {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }

  .about-title {
    font-size: 1.6em;
  }
  .subtitle{
    text-align: center;
  }
  .about-subtitle {
    font-size: 1.2em;
  }

  .about-description {
    font-size: 0.95em;
  }

  .about-services li {
    font-size: 0.95em;
    justify-content: flex-start;
  }

  .img-container {
    width: 200px;
    height: auto;
  }

  .img-container img {
    height: 200px;
    width: 200px;
  }

  .team-section {
    padding: 20px 10px;
  }

  .team-title {
    font-size: 1.6em;
  }

  .team-list {
    grid-template-columns: 1fr;
  }

  .team-member {
    padding: 16px;
  }

  .employee-name {
    font-size: 1.1em;
  }

  .employee-position {
    font-size: 0.95em;
  }
  p {
    font-size: 16px;
  }

  h1,
  h2 {
    font-size: 22px;
  }

  .container {
    padding: 20px;
  }
}

/* === Animations === */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}

.fade-in.delay-1 {
  animation-delay: 0.3s;
}

.fade-in.delay-2 {
  animation-delay: 0.6s;
}

.fade-in.delay-3 {
  animation-delay: 0.9s;
}

.fade-in.delay-4 {
  animation-delay: 1.2s;
}
.fade-in.delay-5 {
  animation-delay: 1.4s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
