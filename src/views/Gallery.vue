<template>
  <section class="gallery-section">
    <h2 class="gallery-title">Галерея выполненных работ КСМ</h2>

    <div v-for="(images, projectName) in refGalleryImages" :key="projectName" class="project-block">
      <h3 class="project-name">{{ projectName }}</h3>
      <div class="gallery-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="gallery-item"
          @click="openLightbox(projectName, index)"
        >
          <img :src="image.src" :alt="image.alt" class="gallery-img" loading="lazy" />
        </div>
      </div>
    </div>

    <!-- Vue Easy Lightbox -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="currentImages"
      :index="currentIndex"
      @hide="visible = false"
    />
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { galleryImages } from '@/data/galleryImages'


const refGalleryImages = reactive(galleryImages)

const visible = ref(false)
const currentIndex = ref(0)
const currentImages = ref([])

function openLightbox(projectName, index) {
  currentImages.value = refGalleryImages[projectName].map(img => img.src)
  currentIndex.value = index
  visible.value = true
}
</script>

<style scoped>
.gallery-section {
  padding: 2rem;
  background-color: #f5f5f5;
}

.gallery-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #005689;
}

.project-block {
  margin-bottom: 2rem;
}

.project-name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-transform: capitalize;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>