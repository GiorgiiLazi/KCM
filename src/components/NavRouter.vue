<template>
  <nav :class="['nav-2', { sticky: isSticky }]">
    <div class="router-container">
      <!-- Burger Menu -->
      <button class="burger" @click="toggleMenu">
        <span :class="{ open: showMenu }">&#9776;</span>
      </button>

      <!-- Navigation -->
      <div class="links-wrapper" :class="{ open: showMenu }">
        <router-link @click="scrollToTop" to="/">Главная</router-link>
        <router-link @click="scrollToTop" to="/kcm">О нас</router-link>
        <router-link @click="scrollToTop" to="/stroitelstvo-domov-i-kottedzhey">Строительство</router-link>
        <router-link @click="scrollToTop" to="/remont-kvartir-i-komnat">Ремонт</router-link>

        <!-- Dropdown -->
        <div class="dropdown desktop-only">
          <div class="dropdown-trigger" @click="toggleDropdown">
            <span class="menu-label">Услуги</span>
            <span class="arrow material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div v-if="showDropdown" class="dropdownContent">
            <ul class="dropdownList">
              <li v-for="service in services" :key="service.id" class="dropdownItem">
                <router-link
                  @click="closeAll"
                  class="dropdownRouter"
                  :to="{ name: `usluga-${service.slug}`, params: { opisanieUslug: service.slug } }"
                >  
                  {{ service.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <router-link @click="scrollToTop" to="/proekty">Проекты коттеджей</router-link>
        <router-link @click="scrollToTop" to="/rekvizity">Реквизиты</router-link>
        <router-link @click="scrollToTop" to="/galereya">Галерея</router-link>
        <router-link @click="scrollToTop" to="/kontakty">Контакты</router-link>
      </div>
    </div>
  </nav>

  <!-- Mobile dropdown through teleport -->
  <teleport to="body">
    <div v-if="showDropdownMobile" class="mobile-dropdown">
      <ul>
        <li v-for="service in services" :key="service.id">
          <router-link
            @click="closeAll"
            :to="{ name: `usluga-${service.slug}`, params: { opisanieUslug: service.slug } }"
          >
            {{ service.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </teleport>
</template>

<script setup>
import { scrollToTop } from '@/composables/scrollToTop';
import { servicesList } from '../routes/servicesList';
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const services = reactive(servicesList);

const isSticky = ref(false);
const showMenu = ref(false);
const showDropdown = ref(false); // desctop
const showDropdownMobile = ref(false); // mobile

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const toggleDropdown = () => {
  if (window.innerWidth <= 768) {
    showDropdownMobile.value = !showDropdownMobile.value;
  } else {
    showDropdown.value = !showDropdown.value;
  }
};

const closeAll = () => {
  showMenu.value = false;
  showDropdown.value = false;
  showDropdownMobile.value = false;
};

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
  background-color: #005689;
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
.dropdownRouter,
.menu-label {
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

/* Dropdown desktop */
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
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #005689;
  padding: 6px 0;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  z-index: 10000;
}

.dropdownList {
  list-style: none;
  padding: 0;
  margin: 0;
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

/* Mobile dropdown via teleport */
.mobile-dropdown {
  position: fixed;
  top: 60px; /* под шапкой */
  left: 0;
  right: 0;
  background-color: #005689;
  z-index: 999999;
  padding: 10px;
}

.mobile-dropdown a {
  display: block;
  padding: 8px;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .links-wrapper {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #005689;
    border-radius: 8px;
    padding: 10px;
  }

  .links-wrapper.open {
    display: flex;
  }

  .desktop-only {
    display: none;
  }
}
</style>