<template>
  <h1 style="color:black">{{ $route.params.servicedesc }}</h1>
</template>

<script setup>
import { reactive } from 'vue' 
import { useRoute } from 'vue-router'

const route = useRoute()
const servicedesc = route.params.servicedesc

const servicesList = reactive([
  {
    id: 1,
    slug: 'stroitelstvo-domov-i-kottedzhey',
    name: '🏡 Строительство домов и коттеджей',
    description: 'Мы строим частные дома и коттеджи с учётом современных технологий, архитектуры и индивидуальных пожеланий заказчика.',
    gallery: ['dom1.jpg', 'dom2.jpg', 'dom3.jpg']
  },
  {
    id: 2,
    slug: 'stroitelstvo-mnogoetazhnykh-domov',
    name: '🏢 Строительство многоэтажных домов',
    description: 'Профессиональное возведение жилых и коммерческих многоэтажных зданий — от фундамента до сдачи в эксплуатацию.',
    gallery: ['multi1.jpg', 'multi2.jpg']
  },
  {
    id: 3,
    slug: 'remont-kvartir-i-komnat',
    name: '🛠️ Ремонт квартир и комнат',
    description: 'Капитальный и косметический ремонт под ключ, включая отделку, замену коммуникаций и дизайн-проекты.',
    gallery: ['remont1.jpg', 'remont2.jpg']
  },
  {
    id: 4,
    slug: 'kladochnye-raboty',
    name: '🧱 Кладочные работы',
    description: 'Профессиональная кладка кирпича, блоков, камня и других материалов с соблюдением всех строительных норм.',
    gallery: ['brick1.jpg', 'brick2.jpg']
  },
  {
    id: 5,
    slug: 'krovelnye-raboty',
    name: '🛢️ Кровельные работы',
    description: 'Устройство и ремонт крыш любой сложности, включая монтаж кровельных материалов и утепление.',
    gallery: ['roof1.jpg', 'roof2.jpg']
  },
  {
    id: 6,
    slug: 'gidroizolyaciya',
    name: '🏗️ Гидроизоляция',
    description: 'Защита конструкций от влаги: фундаменты, крыши, подвалы, балконы и другие элементы зданий.',
    gallery: ['hydro1.jpg', 'hydro2.jpg']
  },
  {
    id: 7,
    slug: 'otdelochnye-raboty',
    name: '🎨 Отделочные работы',
    description: 'Внутренняя и внешняя отделка помещений, включая штукатурку, шпаклёвку, покраску и укладку плитки.',
    gallery: ['finish1.jpg', 'finish2.jpg']
  },
  {
    id: 8,
    slug: 'fasadnye-raboty',
    name: '🏘️ Фасадные работы',
    description: 'Обновление и утепление фасадов, декоративная отделка, установка вентилируемых фасадов.',
    gallery: ['fasad1.jpg', 'fasad2.jpg']
  },
  {
    id: 9,
    slug: 'blagoustroystvo-territorii',
    name: '🚧 Благоустройство территории',
    description: 'Создание дорожек, установка бордюров, освещение, ландшафтный дизайн и озеленение.',
    gallery: ['land1.jpg', 'land2.jpg']
  },
  {
    id: 10,
    slug: 'landshaftnyj-dizajn',
    name: '🌳 Ландшафтный дизайн',
    description: 'Проектирование и реализация эстетичных и функциональных зеленых зон на вашем участке.',
    gallery: ['design1.jpg', 'design2.jpg']
  }
])


</script>

<style scoped>

</style>