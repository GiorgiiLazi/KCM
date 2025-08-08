<template>
  <nav :class="['nav-2', { sticky: isSticky }]">
    <div class="router-container">
      <router-link to="/">Главная</router-link>
      <router-link to="/kcm">О Нас</router-link>
      <router-link to="/stroitelstvo-domov-i-kottedzhey">Строительство домов и коттеджей</router-link>
      <router-link to="/remont-kvartir-i-komnat">Ремонт квартир и комнат</router-link>

      <div class="dropdown">
        <div class="dropdown-trigger">
          <span class="menu-label">Услуги</span>
          <span class="arrow material-symbols-outlined">arrow_drop_down</span>
        </div>

        <div class="dropdownContent">
          <ul class="dropdownList">
            <li v-for="service in servicesList" :key="service.id" class="dropdownItem">
             <router-link class="dropdownRouter"
  :to="{ name: 'opisanie-uslug', params: { opisanieUslug: toSlug(service.name )} }">
  {{ service.name }}
</router-link>

            </li>
          </ul>
        </div>
      </div>

      <router-link to="/primery">Объекты</router-link>
      <router-link to="/galereya">Галерея</router-link>
      <router-link to="/kontakty">Контакты</router-link>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted, reactive} from 'vue';
import { useRoute } from 'vue-router';
import { toSlug } from '@/composables/toSlug';

const servicesList = reactive([
  {name: "Кладочные работы ", id: 4 },
  {name: "Кровельные работы  ", id: 5 },
  {name: "Гидроизоляция  ", id: 6 },
  {name: "Отделочные работы ", id: 7 },
  {name: "Фасадные работы  ", id: 8 },
  {name: "Благоустройство территории  ", id: 9 },
  {name: "Ландшафтный дизайн ", id: 10 }
])

const route = useRoute()
const slug = route.params.slug

const isSticky = ref(false);
const handleScroll = () => {
  isSticky.value = window.scrollY > 200;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.nav-2 {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  position: static;
  background-color: transparent;
  padding: 20px;
  z-index: 1000;
}
.menu-label{
  color:white;
  align-self: center;
}
.menu-labela:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-2.sticky {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #005689;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  padding: 10px 20px;
  animation: fadeInDown 0.3s ease;
}

@keyframes fadeInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.router-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.router-container a,
.dropdownRouter {
  color: white;
  text-align: left;
  text-decoration: none;
  font-size: 14px;
  font-family: "Bebas Neue", sans-serif;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s ease;
  white-space: nowrap;
  display: block;
}

.router-container a:hover,
.dropdownRouter:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;
  user-select: none;
  font-size: 14px;
  color: white;
}

/* Анимация стрелки при hover */
.arrow {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.dropdown:hover .arrow {
  transform: rotate(180deg);
}

/* Контент dropdown */
.dropdownContent {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #005689;
  font-family: "Orbitron", sans-serif;
  border-radius: 8px;
  padding: 6px 0;
  margin-top: 4px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  min-width: max-content;
  max-width: 260px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  z-index: 10000;
}

.dropdown:hover .dropdownContent {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdownList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdownItem {
  padding: 2px 0;
}

.dropdownRouter {
  display: block;
}
</style>