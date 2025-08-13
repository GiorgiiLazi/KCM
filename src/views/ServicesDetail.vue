<template>
  <main v-if="content">
    <!-- Заголовок услуги -->
    <section class="first-color animate-fadeIn">
      <div class="container">
        <h1>{{ content.title }}</h1>
        <p>{{ content.description }}</p>
      </div>
    </section>

    <!-- Преимущества / особенности -->
    <section class="third-color animate-slideIn">
      <div class="container">
        <h2>Наши преимущества</h2>
        <ul>
          <li v-for="(feature, index) in content.features" :key="index">{{ feature }}</li>
        </ul>
      </div>
    </section>

    <!-- Фотографии услуги -->
    <section class="third-color animate-fadeIn">
      <div class="container">
        <h2>Фотографии работ</h2>
        <div class="images-grid">
          <img v-for="(img, index) in content.images" :key="index" :src="img" :alt="content.title + ' фото ' + (index+1)" />
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="fourth-color animate-slideIn">
      <div class="container">
        <h2>{{ content.cta.title }}</h2>
        <p>{{ content.cta.text }}</p>
        <router-link itemprop="url" to="/kontakty">
          <AnimatedButton>{{ content.cta.button }}</AnimatedButton>
         </router-link>
      </div>
    </section>
  </main>

  <main v-else>
    <section class="container">
      <h1>Услуга не найдена</h1>
      <p>Проверьте правильность ссылки или вернитесь на <a href="/">главную страницу</a>.</p>
    </section>
  </main>
</template>

<script setup>
import AnimatedButton from '@/components/UI/AnimatedButton.vue'
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { servicesContent } from '../routes/serviceContent'

const route = useRoute()
const content = ref(servicesContent[route.params.opisanieUslug] || null)

// Следим за изменением slug в URL
watch(
  () => route.params.opisanieUslug,
  (newSlug) => {
    content.value = servicesContent[newSlug] || null
    if (content.value) addJSONLD(content.value)
  }
)

// SEO-теги и JSON-LD
onMounted(() => {
  if (route.meta) {
    document.title = route.meta.title || 'КСМ — строительная компания'
    setMetaTag('description', route.meta.description)
    setMetaTag('keywords', route.meta.keywords)
  }
  if (content.value) addJSONLD(content.value)
})

function setMetaTag(name, contentValue) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', contentValue)
}

function addJSONLD(service) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": { "@type": "Organization", "name": "КСМ", "url": "https://yourdomain.ru" },
    "image": service.images,
    "url": window.location.href
  })
  document.head.appendChild(script)
}
</script>

<style scoped>
h1, h2 { font-family: "Bebas Neue", sans-serif; }

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
}

.fourth-color {
  background: #ff895d;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.container { max-width: 1200px; margin: 0 auto; }

ul { list-style-type: disc; padding-left: 20px; }

.images-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.images-grid img {
  width: 100%;
  border-radius: 8px;
}

.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.animate-slideIn { animation: slideIn 1s ease forwards; }

@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes slideIn { 0% { transform: translateY(50px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }

@media (max-width: 768px) {
  .images-grid { grid-template-columns: repeat(2, 1fr); }
  .first-color, .second-color, .fourth-color { padding: 20px 10px; }
}
</style>
