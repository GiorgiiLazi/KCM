
  <template>
  <main class="construction-page">

    <section class="hero first-color">
      <div class="container">
        <h1 class="fade-in">Строительство коттеджей и домов</h1>
        <p class="fade-in delay-1">
          Качество, прозрачность и индивидуальный подход — вот что ценят наши клиенты. Мы строим дома, которые служат десятилетиями.
        </p>
      </div>
    </section>

    <section class="achievements second-color">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item fade-in">
            <h2>537+</h2>
            <p>объектов</p>
          </div>
          <div class="stat-item fade-in delay-1">
            <h2>25+</h2>
            <p>лет опыта</p>
          </div>
          <div class="stat-item fade-in delay-2">
            <h2>Сотни</h2>
            <p>довольных клиентов</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services first-color">
      <div class="container">
        <h2 class="fade-in">Наши услуги</h2>
        <div class="services-grid">
          <div class="service-item fade-in delay-1">
            <img loading="lazy" src="/images/project-1.webp" alt="Проектирование и дизайн">
            <h3>Проектирование и дизайн коттеджей</h3>
            <p>Разработка индивидуальных проектов, которые учитывают все ваши пожелания и особенности участка.</p>
          </div>
          <div class="service-item fade-in delay-2">
            <img loading="lazy" src="/images/project-3.webp" alt="Строительство под ключ">
            <h3>Строительство коттеджей «под ключ»</h3>
            <p>Полный цикл работ — от фундамента до отделки. Строим из кирпича, монолита и газобетона.</p>
          </div>
          <div class="service-item fade-in delay-3">
            <img loading="lazy" src="/images/repair-2.webp" alt="Реконструкция и ремонт">
            <h3>Реконструкция и ремонт</h3>
            <p>Обновление, расширение и капитальный ремонт существующих строений с соблюдением всех норм.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta third-color">
      <div class="container">
        <h2 class="fade-in">Готовы обсудить ваш проект?</h2>
        <p class="fade-in delay-1">
          Свяжитесь с нами, чтобы получить бесплатную консультацию и расчёт стоимости вашего будущего дома.
        </p>
        <Animated-button/>
      </div>
    </section>

  </main>
</template>

<script setup>
import AnimatedButton from "@/components/UI/AnimatedButton.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray(".fade-in").forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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

h1, h2, h3 {
  font-family: "Bebas Neue", sans-serif;
  color: #fff;
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

p {
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

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

/* Hero Section */
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

/* Achievements Section */
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

/* Services Section */
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
}

.service-item h3 {
  color: #fff;
  margin-bottom: 10px;
}
.service-item p {
  text-align: center;
  font-size: 16px;
  color: #ddd;
}

/* CTA Section */
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
}
</style>
