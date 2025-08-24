<template>
  <nav :class="['nav-2', { sticky: isSticky }]">
    <div class="router-container">
      <!-- Burger visible on mobile -->
      <button
        ref="burgerBtn"
        class="burger"
        @click="toggleMenu"
        :aria-expanded="showMenu"
        aria-label="Открыть меню"
      >
        <span :class="{ open: showMenu }">&#9776;</span>
      </button>

      <!-- Desktop links -->
      <div class="links-wrapper">
        <router-link @click="onNavigate" to="/">Главная</router-link>
        <router-link @click="onNavigate" to="/kcm">О нас</router-link>
        <router-link @click="onNavigate" to="/stroitelstvo-domov-i-kottedzhey">Строительство</router-link>
        <router-link @click="onNavigate" to="/remont-kvartir-i-komnat">Ремонт</router-link>

        <!-- Desktop dropdown -->
        <div class="dropdown desktop-only">
          <div class="dropdown-trigger" tabindex="0">
            <span class="menu-label">Услуги</span>
            <span class="arrow material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div class="dropdownContent">
            <ul class="dropdownList">
              <li v-for="service in services" :key="service.id" class="dropdownItem">
                <router-link
                  @click="onNavigate"
                  class="dropdownRouter"
                  :to="{
                    name: `usluga-${service.slug}`,
                    params: { opisanieUslug: service.slug },
                  }"
                >
                  {{ service.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <router-link @click="onNavigate" to="/proekty">Каталог</router-link>
        <router-link @click="onNavigate" to="/rekvizity">Реквизиты</router-link>
        <router-link @click="onNavigate" to="/galereya">Галерея</router-link>
        <router-link @click="onNavigate" to="/kontakty">Контакты</router-link>
      </div>
    </div>
  </nav>

  <!-- Mobile overlay -->
  <teleport to="body">
    <transition enter-active-class="fadeRight" leave-active-class="fadeLeft">
      <div
        v-if="showMenu"
        ref="mobileMenu"
        class="mobile-overlay"
        role="dialog"
        aria-modal="true"
      >
        <div class="mobile-header">
          <button class="mobile-close" @click="toggleMenu" aria-label="Закрыть меню">✕</button>
        </div>

        <nav class="mobile-links">
          <router-link @click="onNavigate" to="/">Главная</router-link>
          <router-link @click="onNavigate" to="/kcm">О нас</router-link>
          <router-link @click="onNavigate" to="/stroitelstvo-domov-i-kottedzhey">Строительство</router-link>
          <router-link @click="onNavigate" to="/remont-kvartir-i-komnat">Ремонт</router-link>

          <div class="mobile-dropdown">
            <button class="mobile-dropdown-trigger" @click="toggleMobileDropdown">
              Услуги
              <span class="arrow material-symbols-outlined">arrow_drop_down</span>
            </button>
            <ul v-if="showMobileDropdown" class="mobile-dropdown-list">
              <li v-for="service in services" :key="service.id">
                <router-link
                  @click="onNavigate"
                  :to="{
                    name: `usluga-${service.slug}`,
                    params: { opisanieUslug: service.slug },
                  }"
                >
                  {{ service.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <router-link @click="onNavigate" to="/proekty">Каталог</router-link>
          <router-link @click="onNavigate" to="/rekvizity">Реквизиты</router-link>
          <router-link @click="onNavigate" to="/galereya">Галерея</router-link>
          <router-link @click="onNavigate" to="/kontakty">Контакты</router-link>
        </nav>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { servicesList } from "@/data/servicesList";
import { scrollToTop } from "@/composables/scrollToTop";

const services = reactive(servicesList);

const isSticky = ref(false);
const showMenu = ref(false);
const showMobileDropdown = ref(false);

const burgerBtn = ref(null);
const mobileMenu = ref(null);

const handleScroll = () => {
  isSticky.value = window.scrollY > 200;
};

const lockBody = (lock) => {
  document.body.style.overflow = lock ? "hidden" : "";
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  lockBody(showMenu.value);
  showMobileDropdown.value = false;
};

const toggleMobileDropdown = () => {
  showMobileDropdown.value = !showMobileDropdown.value;
};

const onNavigate = () => {
  scrollToTop();
  showMenu.value = false;
  showMobileDropdown.value = false;
  lockBody(false);
};

const onKeydown = (e) => {
  if (e.key === "Escape") {
    showMenu.value = false;
    showMobileDropdown.value = false;
    lockBody(false);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("keydown", onKeydown);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
.nav-2 {
  width: 100%;
  background-color: transparent;
  padding: 20px;
  z-index: 1000000000;
  transition: all 0.3s ease-in-out;
  position: static;
}
.nav-2.sticky {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 86, 137, 0.95);
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
  gap: 18px; /* расстояние между пунктами меню */
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
  background-color: rgba(255, 255, 255, 0.06);
}

/* Desktop dropdown */
.dropdown {
  position: relative;
}
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
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
  z-index: 100000;
  display: none;
}
.dropdownList {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdownList li {
  margin: 0;
  padding: 10px 0px;
}

/* Главное: открытие дропдауна */
.dropdown:hover .dropdownContent,
.dropdown:focus-within .dropdownContent {
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
  transition: transform 0.2s;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .links-wrapper {
    display: none;
  }
  .desktop-only {
    display: none;
  }
}

/* Overlay with animations */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 86, 137, 0.98), rgba(0, 86, 137, 0.98));
  z-index: 200000;
  display: flex;
  flex-direction: column;
  padding: 18px;
  padding-top: calc(env(safe-area-inset-top) + 18px);
  overflow-y: auto;
}

.fadeRight {
  animation: fadeRight 0.3s ease-in-out forwards;
}
.fadeLeft {
  animation: fadeLeft 0.3s ease-in-out forwards;
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

.mobile-header {
  display: flex;
  justify-content: flex-end;
}
.mobile-close {
  background: transparent;
  border: none;
  color: white;
  font-size: 28px;
  padding: 6px 10px;
  cursor: pointer;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding-bottom: 40px;
}
.mobile-links a {
  color: white;
  text-decoration: none;
  padding: 12px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  font-size: 18px;
  font-family: "Bebas Neue", sans-serif;
}

/* Dropdown */
.mobile-dropdown {
  display: flex;
  flex-direction: column;
}
.mobile-dropdown-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  color: white;
  font-size: 18px;
  cursor: pointer;
}
.mobile-dropdown-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}
.mobile-dropdown-list a {
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.03);
  color: white;
  text-decoration: none;
}
</style>