<template>
  <nav :class="['nav-2', { sticky: isSticky }]">
    <div class="router-container">
      <button class="burger" @click="toggleMenu">
        <span :class="{ open: showMenu }">&#9776;</span>
      </button>

      <div class="links-wrapper" :class="{ open: showMenu }">
        <router-link to="/">Главная</router-link>
        <router-link to="/kcm">О нас</router-link>
        <router-link to="/stroitelstvo-domov-i-kottedzhey">Строительство</router-link>
        <router-link to="/remont-kvartir-i-komnat">Ремонт</router-link>

        <div class="dropdown">
          <div class="dropdown-trigger">
            <span class="menu-label">Услуги</span>
            <span class="arrow material-symbols-outlined">arrow_drop_down</span>
          </div>

          <div class="dropdownContent">
            <ul class="dropdownList">
              <li v-for="service in servicesList" :key="service.id" class="dropdownItem">
                <router-link class="dropdownRouter"
                  :to="{ name: 'opisanie-uslug', params: { opisanieUslug: toSlug(service.name) } }">
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
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { toSlug } from '@/composables/toSlug';

const servicesList = reactive([
  { name: "Кладочные работы ", id: 4 },
  { name: "Кровельные работы", id: 5 },
  { name: "Гидроизоляция", id: 6 },
  { name: "Отделочные работы", id: 7 },
  { name: "Фасадные работы", id: 8 },
  { name: "Благоустройство территории", id: 9 },
  { name: "Ландшафтный дизайн", id: 10 }
]);

const isSticky = ref(false);
const showMenu = ref(false);
const toggleMenu = () => showMenu.value = !showMenu.value;

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
  background-color: transparent;
  padding: 20px;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  position: static;
}

.nav-2.sticky {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #005689;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  animation: fadeInDown 0.3s ease;
}

@keyframes fadeInDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.router-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.links-wrapper {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.router-container a,
.dropdownRouter {
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-family: "Bebas Neue", sans-serif;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.router-container a:hover,
.dropdownRouter:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Dropdown */
.dropdown {
  position: relative;
}
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: white;
}
.dropdownContent {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #005689;
  border-radius: 8px;
  padding: 6px 0;
  margin-top: 4px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  z-index: 10000;
}
.dropdown:hover .dropdownContent {
  display: block;
}

/* Burger */
.burger {
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
}

.burger span.open {
  transform: rotate(90deg);
}

/* ----------- Mobile Styles ----------- */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .links-wrapper {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #005689;
    margin-top: 10px;
    border-radius: 8px;
    padding: 10px;
  }

  .links-wrapper.open {
    display: flex;
  }

  .dropdownContent {
    position: static;
    box-shadow: none;
    padding-left: 10px;
  }

  .dropdown-trigger {
    padding: 6px 0;
  }
}
</style>