<template>
  <main v-if="content">
    <!-- Заголовок услуги -->
     <section class="hero first-color">
      <div class="container">
        <h1 class="fade-in">{{ content.title }}</h1>
        <p class="fade-in delay-1">
          {{ content.description }}
        </p>
      </div>
    </section>

    <!-- Преимущества / особенности -->
    <section class="third-color animate-slideIn">
      <div class="container">
        <h2 class="fade-in">Наши преимущества</h2>
        <ul>
          <li v-for="(feature, index) in content.features"
              :key="index"
              class="fade-in"
              :class="`delay-${index+1}`">
            {{ feature }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Фотографии услуги -->
    <section class="third-color animate-fadeIn">
      <div class="container">
        <h2 class="fade-in">Фотографии работ</h2>
        <div class="images-grid">
          <img v-for="(img, index) in content.images"
               :key="index"
               :src="img"
               :alt="content.title + ' фото ' + (index+1)"
               class="fade-in delay-1"
               loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="fourth-color animate-slideIn">
      <div class="container">
        <h2 class="fade-in">{{ content.cta.title }}</h2>
        <p class="fade-in delay-1">{{ content.cta.text }}</p>
        <router-link itemprop="url" to="/kontakty" class="fade-in delay-2">
          <AnimatedButton>{{ content.cta.button }}</AnimatedButton>
         </router-link>
      </div>
    </section>
  </main>

  <main v-else>
    <notFound></notFound>
  </main>
</template>

<script setup>
import notFound from './notFound.vue'
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

/* Existing styles remain unchanged */

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
  color: #ff895d;
  font-size: 28px;
}
/* Fade-in animations copied from example */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}
.fade-in.delay-1 { animation-delay: 0.3s; }
.fade-in.delay-2 { animation-delay: 0.6s; }
.fade-in.delay-3 { animation-delay: 0.9s; }
.fade-in.delay-4 { animation-delay: 1.2s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .images-grid { 
    grid-template-columns: repeat(2, 1fr);
  }
  .first-color, .second-color, .fourth-color { 
    padding: 20px 10px; 
  }
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  .container {
    padding: 40px 15px;
  }
}
</style>
