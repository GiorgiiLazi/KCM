<template>
  <main class="construction-page" itemscope itemtype="https://schema.org/LocalBusiness">
    <section class="hero first-color">
      <div class="container">
        <h1 itemprop="name" class="fade-in">Строительство коттеджей в Ленинградской области</h1>
        <p itemprop="description" class="fade-in delay-1">
          Мы предлагаем профессиональное строительство коттеджей «под ключ» в Ленинградской области — от проектирования до сдачи готового дома.
          Возводим дома из монолита, кирпича, газобетона и по современным каркасным технологиям.
        </p>
      </div>
    </section>

    <section class="types third-color">
      <div class="container">
        <h2 class="fade-in">Типы домов, которые мы строим</h2>
        <ul>
          <li class="fade-in delay-1"><strong>Монолитные</strong> — долговечные, прочные, с отличной шумоизоляцией.</li>
          <li class="fade-in delay-2"><strong>Каркасные</strong> — быстрые в строительстве, энергоэффективные.</li>
          <li class="fade-in delay-3"><strong>Кирпичные</strong> — классика, устойчивая к перепадам температур.</li>
          <li class="fade-in delay-4"><strong>Газобетонные</strong> — лёгкие, тёплые и экологичные.</li>
        </ul>
      </div>
    </section>

    <section class="gallery third-color">
      <div class="container">
        <h2 class="fade-in">Наши проекты</h2>
        <div class="photo-grid">
          <img v-for="n in 4" :key="n" :src="`/images/project${n}.jpg`" :alt="`Коттедж проект ${n}`" class="fade-in delay-1" />
        </div>
      </div>
    </section>

    <section class="cta fourth-color">
      <div class="container">
        <h2 class="fade-in">Готовы построить ваш дом</h2>
        <p class="fade-in delay-1">Закажите бесплатную консультацию и узнайте, какой вариант дома подойдёт именно вам — построим коттедж, который будет радовать долгие годы.</p>
         <router-link class="btn fade-in delay-2" itemprop="url" to="/kontakty">
          <AnimatedButton>Оставить заявку</AnimatedButton>
         </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import AnimatedButton from '@/components/UI/AnimatedButton.vue';
// Нет JS логики — чисто презентационный компонент
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.construction-page {
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
  padding: 0;
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
}

.photo-grid img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.photo-grid img:hover {
  transform: scale(1.05);
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

/* Мобильная версия */
@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
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