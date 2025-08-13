<template>
  <button ref="btnRef" class="animated-btn">
    <slot>закажите ремонт</slot>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const btnRef = ref(null)
let tween = null

onMounted(() => {
  tween = gsap.to(btnRef.value, {
    backgroundPosition: '200% 0%', // движение слева направо
    duration: 1.5,
    ease: 'linear',
    repeat: -1
  })
})

onBeforeUnmount(() => {
  if (tween) tween.kill()
})
</script>

<style scoped>
.animated-btn {
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  background: linear-gradient(
    135deg,
    #001f3f,
    #003366,
    #0077b6,
    #00bfff,
    #001f3f
  );
  background-size: 200% 100%; /* расширяем по горизонтали для движения */
  background-position: 0% 0%; /* начальная позиция */

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.animated-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.5);
}
</style>
