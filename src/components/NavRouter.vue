<template>
  <nav :class="['nav-2', { sticky: isSticky }]">
    <div class="router-container">
      <router-link to="/">Главная</router-link>
      <router-link to="/kcm">КСМ</router-link>

      <div class="dropdown">
        <div class="dropdown-trigger">
          <span class="menu-label">Услуги</span>
          <span class="arrow material-symbols-outlined">arrow_drop_down</span>
        </div>

        <div class="dropdownContent">
          <ul class="dropdownList">
            <li v-for="service in servicesList" :key="service.id" class="dropdownItem">
             <router-link 
  :to="{ name: 'servicedesk', params: { servicedesc: toSlug(service.name )} }">
  {{ service.name }}
</router-link>

            </li>
          </ul>
        </div>
      </div>

      <router-link to="/examples">Объекты</router-link>
      <router-link to="/gallery">Галерея</router-link>
      <router-link to="/contact">Контакты</router-link>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted, reactive} from 'vue';
import { useRoute } from 'vue-router';

const servicesList = reactive([
  {name: "🏡 Строительство домов и коттеджей", id: 1 },
  {name: "🏢 Строительство многоэтажных домов", id: 2 },
  {name: "🛠️ Ремонт квартир и комнат", id: 3 },
  {name: "🧱 Кладочные работы ", id: 4 },
  {name: "🛢️ Кровельные работы  ", id: 5 },
  {name: "🏗️ Гидроизоляция  ", id: 6 },
  {name: "🎨 Отделочные работы ", id: 7 },
  {name: "🏘️ Фасадные работы  ", id: 8 },
  {name: "🚧 Благоустройство территории  ", id: 9 },
  {name: "🌳 Ландшафтный дизайн ", id: 10 }
])

function toSlug(text) {
  const translitMap = {
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z','и':'i','й':'y',
    'к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f',
    'х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'
  };

  return text
    .toLowerCase()
    .replace(/[а-яё]/g, char => translitMap[char] || '') // Транслитерация
    .replace(/[^a-z0-9]+/g, '-')                         // Заменить не латинские символы на тире
    .replace(/^-+|-+$/g, '')                             // Убрать начальные/конечные тире
    .replace(/-{2,}/g, '-');                             // Убрать повторяющиеся тире
}
const route = useRoute()
const slug = route.params.slug


const isSticky = ref(false);
const handleScroll = () => {
  isSticky.value = window.scrollY > 200; // 100px — можно менять по желанию
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

.router-container a {
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 1.2em;
  width: 100%;
  transition: background 0.2s;
}

.router-container a:hover  {
  background: rgba(255, 255, 255, 0.1);
}

nav a.router-link-exact-active {
  background: rgba(15, 82, 252, 0.5);
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  width: 100%;
  font-size: 1.2em;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.dropdownContent {
  font-size: 0.8em;
  position: absolute;
  top: 100%;
  left: 0;
  background: #005689;
  display: none;
  flex-direction: column;
  padding: 10px;
  border-radius: 0 0 6px 6px;
  min-width: 250px;
  z-index: 1000;
}

.dropdown:hover .dropdownContent {
  display: flex;
}

.dropdownItem {
  width: 100%;
  list-style: none;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
}

</style>