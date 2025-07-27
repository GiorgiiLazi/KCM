<template>
  <header class="title-wrapper">
      <Title v-if="titles[$route.path]">
        <div class="title-app">
          <h1>{{ titles[$route.path].title }}</h1>
          <h2>{{ titles[$route.path].subtitle }}</h2>
        </div>
      </Title>
    </header>
</template>

<script setup>
import Title from "./UI/Title.vue";
import { reactive } from "vue";

const titles = reactive({
  "/": {
    title: "Строительная компания КСМ",
    subtitle: "Получить Консультацию",
  },
  "/uslugi/landshaftnyy-dizayn": {
    title: "Ландшафтный дизайн участка",
    subtitle: "Озеленим и преобразим территорию под ключ",
  },
  "/uslugi/otdelochnye-raboty": {
    title: "Отделочные работы под ключ",
    subtitle: "Качественно, эстетично и в срок",
  },
  "/uslugi/fasadnye-raboty": {
    title: "Фасадные работы",
    subtitle: "Современные технологии утепления и отделки фасадов",
  },
  "/uslugi/blagoustroystvo-territorii": {
    title: "Благоустройство территории",
    subtitle: "Создаём комфорт и порядок вокруг вашего дома",
  },
  "/uslugi/krovelnye-raboty": {
    title: "Кровельные работы",
    subtitle: "Надёжная защита от непогоды и долговечность",
  },
  "/uslugi/kladochnye-raboty": {
    title: "Кладочные работы",
    subtitle: "Профессиональная кладка стен и перегородок",
  },
  "/uslugi/gidroizolyatsiya": {
    title: "Гидроизоляционные работы",
    subtitle: "Защита от влаги — надолго и без лишних затрат",
  },
  "/remont-kvartir-i-komnat": {
    title: "Ремонт квартир под ключ",
    subtitle: "Доступно, быстро, надёжно",
  },
  "/stroitelstvo-domov-i-kottedzhey": {
    title: "От фундамента до кровли, под ключ",
    subtitle: "Индивидуальный проект, строгие сроки и контроль качества",
  },
  "/kontakty": {
    title: "Обратная связь",
    subtitle: "Свяжитесь с нами по любому вопросу",
  },
  "/kcm": {
    title: "О нас",
    subtitle: "Узнайте больше о нашей компании",
  },
  "/uslugi": {
    title: "Наши услуги",
    subtitle: "Мы выполняем ремонт, строительство и отделку под ключ",
  },
  "/primery": {
    title: "Наши объекты",
    subtitle: "Посмотрите выполненные нами проекты и объекты",
  },
  "/galereya": {
    title: "Галерея",
    subtitle: "Вдохновляйтесь фотографиями наших работ",
  },
});
</script>

<style scoped>
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
}
.title-app {
  text-align: center;
  color: #d5eeff;
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
  pointer-events: none;
}

.title-app h1 {
  margin: 0;
  font-size: 2rem;
}

.title-app h2 {
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
}
</style>