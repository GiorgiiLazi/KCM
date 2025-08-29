<template>
  <main class="construction-page">
    <!-- Hero Section -->
    <section class="hero first-color">
      <div class="container">
        <h1 class="fade-in">Строительство коттеджей и домов</h1>
        <p class="fade-in delay-1">
          Мы работаем в Санкт-Петербурге и Ленинградской области, соблюдаем
          сроки и гарантируем качество на всех этапах — от проектирования до
          сдачи объекта.
        </p>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="achievements second-color">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item fade-in">
            <h2>{{ currNumber }}+</h2>
            <p>объектов</p>
          </div>
          <div class="stat-item fade-in delay-1">
            <h2>{{ currExp }}+</h2>
            <p>лет опыта</p>
          </div>
          <div class="stat-item fade-in delay-2">
            <h2>Сотни</h2>
            <p>довольных клиентов</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services first-color">
      <div class="container">
        <h2 class="fade-in">Наши услуги</h2>
        <div class="services-grid">
          <div
            v-for="(img, idx) in refImages"
            :key="idx"
            class="service-item fade-in"
            :class="`delay-${idx + 1}`"
          >
            <img
              loading="lazy"
              :src="img.src"
              :alt="img.alt"
              @click="openLightbox(idx)"
            />
            <h3>{{ img.title }}</h3>
            <p>{{ img.description }}</p>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <vue-easy-lightbox
        :visible="show"
        :imgs="refImages.map(i => i.src)"
        :index="index"
        @hide="show = false"
      />
    </section>

    <!-- Testimonials Section -->
      <section class="testimonials second-color">
    <div class="container">
      <h2 class="fade-in">Отзывы наших клиентов</h2>
      <div class="testimonials-wrapper">
        <button class="arrow left" @click="prevReview">&#10094;</button>
        <div class="reviews-container" ref="reviewsContainer">
          <div
            class="testimonial-card"
            v-for="(review, idx) in reviews"
            :key="idx"
          >
            <p class="testimonial-text">"{{ review.text }}"</p>
            <p class="testimonial-author">— {{ review.author }}</p>
          </div>
        </div>
        <button class="arrow right" @click="nextReview">&#10095;</button>
      </div>
    </div>
  </section>

    <!-- CTA Section -->
    <section class="cta third-color">
      <div class="container">
        <h2 class="fade-in">Готовы обсудить ваш проект?</h2>
        <p class="fade-in delay-1">
          Свяжитесь с нами, чтобы получить бесплатную консультацию и расчёт
          стоимости вашего будущего дома.
        </p>
        <AnimatedButton />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import AnimatedButton from "@/components/UI/AnimatedButton.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { homeImages } from "@/data/homeImages";
import { testimonials } from "@/data/testimonials";

// Lightbox state
const show = ref(false);
const index = ref(0);
const currNumber = ref(0)
const finalNumber = ref(537)
const currExp = ref(0)
const finalExp = ref(25)

const countObjects = async () =>{
    const interval = setInterval(()=>{
      currNumber.value +=1
      if(currNumber.value >= finalNumber.value){
        clearInterval(interval)
      }
    },5)
  }
  const countExperience = async () =>{
    const interval = setInterval(()=>{
      currExp.value +=1
      if(currExp.value >= finalExp.value){
        clearInterval(interval)
      }
    },50)
  }

const refImages = reactive(homeImages)

// testimonials
const reviewsContainer = ref(null);
const currentIndex = ref(0);

const reviews = reactive(testimonials)

const openLightbox = (i) => {
  index.value = i;
  show.value = true;
};

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  ScrollTrigger.create({
    trigger: ".achievements",
    start: "top 80%",
    once: true,
    onEnter: () => {
      countObjects()
      countExperience()
    },
  })
  // snap scroll on manual swipe
  const container = reviewsContainer.value;
  container.addEventListener("scroll", () => {
    const cardWidth = container.children[0].offsetWidth + parseInt(getComputedStyle(container).gap);
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    currentIndex.value = newIndex;
  });
})

onUnmounted(()=>{
  currNumber.value = 0;
  currExp.value = 0;
})



const scrollToIndex = (index) => {
  const container = reviewsContainer.value;
  const cardWidth = container.children[0].offsetWidth + parseInt(getComputedStyle(container).gap);
  container.scrollTo({
    left: cardWidth * index,
    behavior: "smooth",
  });
};

const prevReview = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    scrollToIndex(currentIndex.value);
  }
};

const nextReview = () => {
  if (currentIndex.value < reviews.length - 1) {
    currentIndex.value++;
    scrollToIndex(currentIndex.value);
  }
};
</script>

<style scoped>

/* Base Styles */
.construction-page {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

h1,
h2,
h3 {
  font-family: "Bebas Neue", sans-serif;
}

h1 {
  font-size: 60px;
  text-align: center;
  color: #fff;
}

h2 {
  font-size: 48px;
  text-align: center;
}

h3 {
  font-size: 28px;
  color: #fff;
}

p {
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Section Colors */
.first-color {
  background: #005689;
  color: #fff;
}

.second-color {
  background: #f0f0f0;
  color: #333;
}

.second-color h2 {
  color: #005689;
}

.third-color {
  background: #ff895d;
  color: #fff;
}

/* Hero */
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

/* Achievements */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: center;
  margin-top: 50px;
}

.stat-item h2 {
  font-size: 72px;
  color: #ff895d;
  margin-bottom: 10px;
}

.stat-item p {
  color: #333;
  text-transform: uppercase;
  font-size: 20px;
}

/* Services */
.services h2 {
  margin-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.service-item {
  text-align: center;
}

.service-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.service-item img:hover {
  transform: scale(1.1);
}

/* Testimonials */
.testimonials-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.reviews-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 20px;
  scroll-behavior: smooth;
}

.testimonial-card {
  flex: 0 0 100%;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 30px 20px;
}

.testimonial-text {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.testimonial-author {
  font-size: 16px;
  font-weight: bold;
  color: #005689;
}

.arrow {
  background: #005689;
  color: #fff;
  border: none;
  font-size: 30px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
}

.arrow.left {
  margin-right: 10px;
}

.arrow.right {
  margin-left: 10px;
}

.arrow:hover {
  background: #003f5c;
}

/* CTA */
.cta {
  text-align: center;
}

.cta h2 {
  margin-bottom: 20px;
}

.cta p {
  margin-bottom: 40px;
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
}

/* Media Queries */
@media (max-width: 768px) {
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  .container {
    padding: 40px 15px;
  }

  .stats-grid,
  .services-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .testimonial-card {
    flex: 0 0 85%;
    margin: 0 auto;
  }
}
</style>