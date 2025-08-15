<template>
  <main class="repair-page" itemscope itemtype="https://schema.org/LocalBusiness">
    <section class="hero first-color">
      <div class="container">
        <h1 itemprop="name" class="fade-in">Ремонт квартир в Санкт-Петербурге</h1>
        <p itemprop="description" class="fade-in delay-1">
          Выполняем ремонт квартир «под ключ» в Санкт-Петербурге. Берём на себя все этапы — от черновых работ до чистовой отделки, включая дизайн-проект, сантехнику, электрику и декоративные решения.
        </p>
      </div>
    </section>

    <section class="types third-color">
      <div class="container">
        <h2 class="fade-in">Виды работ, которые мы выполняем</h2>
        <ul>
          <li class="fade-in delay-1"><strong>Косметический ремонт</strong> — обновление отделки, покраска, обои, замена покрытий.</li>
          <li class="fade-in delay-2"><strong>Капитальный ремонт</strong> — перепланировка, инженерные сети, усиление конструкций.</li>
          <li class="fade-in delay-3"><strong>Дизайнерский ремонт</strong> — уникальные решения под ваш стиль и интерьер.</li>
          <li class="fade-in delay-4"><strong>Отделка новостроек</strong> — подготовка жилья к комфортному заселению с нуля.</li>
        </ul>
      </div>
    </section>

       <!-- Gallery Section -->
    <section class="gallery third-color">
      <div class="container">
        <h2 class="fade-in">Наши проекты</h2>
        <div class="photo-grid">
          <div v-for="(img, idx) in images" :key="idx" class="photo">
            <img
              :src="img.src"
              :alt="`Ремонт квартир ${idx + 1}`"
              loading="lazy"
              @click="openLightbox(idx)"
            />
          </div>
        </div>

        <vue-easy-lightbox
          :visible="show"
          :imgs="images.map(i => i.src)"
          :index="index"
          @hide="show = false"
        />
      </div>
    </section>

    <section class="cta fourth-color">
      <div class="container">
        <h2 class="fade-in">Ремонт без лишних хлопот</h2>
        <p class="fade-in delay-1">Мы работаем по договору, соблюдаем сроки и используем только качественные материалы. Закажите бесплатный выезд специалиста и расчёт сметы — сделаем вашу квартиру уютной и современной.</p>
         <router-link class="btn fade-in delay-2" itemprop="url" to="/kontakty">
          <AnimatedButton>Оставить заявку</AnimatedButton>
         </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import AnimatedButton from '@/components/UI/AnimatedButton.vue';// Lightbox state

const show = ref(false);
const index = ref(0);
const images = [
  { src: "/images/repair-1.webp" },
  { src: "/images/repair-2.webp" },
  { src: "/images/repair-3.webp" },
  { src: "/images/repair-4.webp" },
  { src: "/images/repair-5.webp" },
  { src: "/images/repair-6.webp" },
  { src: "/images/repair-7.webp" },
  { src: "/images/repair-8.webp" },
];

const openLightbox = (i) => {
  index.value = i;
  show.value = true;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.repair-page {
  font-family: "Bebas Neue", sans-serif;
  line-height: 1.4;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1, h2 {
  margin-bottom: 20px;
}

p {
  font-size: 18px;
}

.first-color {
  background: #005689;
}

.second-color {
  background: #007cb9;
}

.third-color {
  background: #d5eeff;
  color: #000;
}

.fourth-color {
  background: #ff895d;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

.btn {
  background: #fff;
  color: #000;
  padding: 0px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.btn:hover {
  background: #f0f0f0;
}

/* Галерея */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  overflow: visible; /* make sure hover scale is visible */
}

.photo-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
}

.photo-grid img:hover {
  transform: scale(1.2);
}
/* Анимации */
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

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
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
  font-size: 48px;
  text-align: center;
}

h3 {
  font-size: 28px;
}
/* Мобильная версия */
@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  p {
    font-size: 16px;
  }

  h1, h2 {
    font-size: 22px;
  }

  .container {
    padding: 20px;
  }
}
</style>
