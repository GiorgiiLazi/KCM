<template>
  <main v-if="content">
    <!-- Hero -->
    <section class="hero first-color">
      <div class="container">
        <h1 class="fade-in">{{ content.title }}</h1>
        <p class="fade-in delay-1">{{ content.description }}</p>
      </div>
    </section>

    <!-- Advantages -->
    <section class="third-color animate-slideIn">
      <div class="container">
        <h2 class="fade-in">Наши преимущества</h2>
        <ul>
          <li
            v-for="(feature, index) in content.features"
            :key="index"
            class="fade-in"
            :class="`delay-${index + 1}`"
          >
            {{ feature }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Gallery -->
    <section class="third-color animate-fadeIn">
      <div class="container">
        <h2 class="fade-in">Фотографии работ</h2>
        <div class="photo-grid">
          <img
            v-for="(img, index) in content.images"
            :key="index"
            :src="img"
            :alt="content.title + ' фото ' + (index + 1)"
            class="fade-in delay-1"
            loading="lazy"
            @click="openLightbox(index)"
          />
        </div>
        <vue-easy-lightbox
          :visible="lightboxVisible"
          :imgs="content.images"
          :index="lightboxIndex"
          @hide="lightboxVisible = false"
        />
      </div>
    </section>

    <!-- Call to action -->
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
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import notFound from "./notFound.vue";
import AnimatedButton from "@/components/UI/AnimatedButton.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { servicesContent } from "../routes/serviceContent";

const route = useRoute();
const content = ref(servicesContent[route.params.opisanieUslug] || null);

// Lightbox state
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);
const openLightbox = (index) => {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
};

// Watching slug change in url
watch(
  () => route.params.opisanieUslug,
  (newSlug) => {
    content.value = servicesContent[newSlug] || null;
    if (content.value) addJSONLD(content.value);
  }
);

// SEO-tags and JSON-LD
onMounted(() => {
  if (route.meta) {
    document.title = route.meta.title || "КСМ — строительная компания";
    setMetaTag("description", route.meta.description);
    setMetaTag("keywords", route.meta.keywords);
  }
  if (content.value) addJSONLD(content.value);
});

function setMetaTag(name, contentValue) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", contentValue);
}

function addJSONLD(service) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "КСМ",
      url: "https://yourdomain.ru",
    },
    image: service.images,
    url: window.location.href,
  });
  document.head.appendChild(script);
}
</script>

<style scoped>
h1,
h2 {
  font-family: "Bebas Neue", sans-serif;
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
}

.fourth-color {
  background: #ff895d;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

/* Галерея */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.photo-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;

  /* hover works independently */
  transition: transform 0.3s ease-in-out, opacity 0.8s ease, margin 0.8s ease;

  /* fade-in using opacity + margin instead of transform */
  opacity: 0;
  margin-top: 20px;
  animation: fadeInUpHover 0.8s forwards;
}

.photo-grid img:hover {
  transform: scale(1.1); /* hover scale works correctly */
}

@keyframes fadeInUpHover {
  to {
    opacity: 1;
    margin-top: 0;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0) scale(1); /* final state after fade-in */
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
  color: #ff895d;
  font-size: 28px;
}
/* Fade-in animations copied from example */
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

@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .first-color,
  .second-color,
  .fourth-color {
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
