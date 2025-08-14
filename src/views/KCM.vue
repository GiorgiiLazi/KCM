<template>
  <section class="hero first-color">
      <div class="container">
        <h1 class="fade-in" itemprop="name">ООО «СК КАПИТАЛСТРОЙМОНТАЖ» </h1>
        <p class="fade-in delay-1">
          Наша компания специализируется на широком спектре строительных и отделочных работ.
        </p>
      </div>
    </section>
  <section class="about-company third-color" itemscope itemtype="http://schema.org/Organization">
  <div class="about-inner">
    
    
    <!-- Левая часть — описание -->
    <div class="about-content third-color">
  

      <article class="about-description fade-in" itemprop="description">
        <h1 class="subtitle delay-3">Строительная компания «КСМ»</h1>
        <h2 class="subtitle delay-4">Мы выполняем:</h2>

        <ul class="about-services">
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Монолитные и каркасные дома;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Дома из газобетона;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Ремонт квартир и помещений;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Отделочные работы любой сложности;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Фасадные и кровельные работы;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Окраска, шпаклевка и штукатурка ручная и машинным способом;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Кладочные и гидроизоляционные работы;</p>
          </li>
          <li>
            <span class="material-symbols-outlined">check</span>
            <p>Благоустройство территории и ландшафтный дизайн;</p>
          </li>
        </ul>

        Мы работаем в Санкт-Петербурге и Ленинградской области, соблюдаем сроки и гарантируем качество на всех этапах — от проектирования до сдачи объекта.
      </article>
    </div>

    <!-- Правая часть — фото -->
   <div class="img-wrapper fourth-color">
  <div class="img-circle">
    <img src="/images/architector-01.webp" alt="Генеральный директор «КСМ» Михаил" loading="lazy" />
  </div>
  <label class="img-caption">Генеральный директор «КСМ» – Михаил</label>
</div>

  </div>
</section>
<section class="team-section second-color ">
    <div class="container">
      <h2 class="team-title">Наша команда</h2>
      <ul class="team-list ">
        <li
          v-for="(employee, index) in employees"
          :key="index"
          class="team-member third-color"
          itemscope
          itemtype="http://schema.org/Person"
        >
          <h3 class="employee-name" itemprop="name">{{ employee.name }}</h3>
          <p class="employee-position" itemprop="jobTitle">{{ employee.position }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>

const services= [
  {
    name: "Монолитные и каркасные дома;",
    id: 1
  },
  {
    name: "Дома из газобетона;",
    id: 2
  },
  {
    name: "Ремонт квартир и помещений;",
    id: 3
  },
  {
    name: "Отделочные работы любой сложности;",
    id: 4
  },
  {
    name: "Фасадные и кровельные работы;",
    id: 5
  },
  {
    name: "Окраска, шпаклевка и штукатурка ручная и машинным способом;",
    id: 6
  },
  {
    name: "Кладочные и гидроизоляционные работы;",
    id: 7
  },
  {
    name: "Благоустройство территории и ландшафтный дизайн;",
    id: 8
  }
]


const employees = [
  {
    name: "Лазишвили Мамука Нодарович",
    position: "Генеральный директор",
  },
   {
    name: "Стрижинец Виталий Евгеньевич",
    position: "Инженер, руководитель проекта",
  },
  {
    name: "Баширов Алияддин Яхья оглы",
    position: "Директор по строительству",
  },
  {
    name: "Хандий Алексей Игоревич",
    position: "Финансовый директор",
  },
  {
    name: "Перепелкин Владислав Олегович",
    position: "Инженер ПТО",
  },
  {
    name: "Черняева Екатерина Марковна",
    position: "Бухгалтер",
  },
    {
    name: "Лазишвили Георгий Мамукавич",
    position: "Программист",
  },
];

</script>

<style scoped>
/* === Базовая структура === */
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
    font-size: 32px;
    text-align: center;
  }
.subtitle{
  text-align: start;
}
.about-company {
  padding: 40px 20px;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Bebas Neue", sans-serif;
}

.about-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 1s ease forwards;
}

/* === Контент компании === */
.about-content {
  flex: 1;
  min-width: 0;
  animation: fadeInUp 0.8s ease forwards;
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
  margin: 0;
}
.fourth-color {
  background: #ff895d;
  color: white;
  padding: 40px 20px;
  text-align: center;
}
.about-title {
  font-size: 2.2em;
  margin-bottom: 10px;
  color: #ff895d;
}

.about-subtitle {
  font-size: 1.4em;
  margin-bottom: 20px;
  color: #ff895d;
}

.about-description {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-services {
  margin: 15px 0;
  padding-left: 20px;
}

.about-services li {
  display: flex;
  align-items: center;
  justify-items: flex-start;
  list-style: none;
  margin-bottom: 5px;
  font-weight: bold;
}

.about-services li span {
  font-size: 1.5em;
  font-weight: bold;
  color: green;
  margin-right: 8px;
}

/* === Фото гендиректора === */
.img-wrapper {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 300px;
  animation: fadeIn 1.2s ease-in-out;
}

.img-circle {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ccc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.img-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.img-caption {
  margin-top: 12px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  font-family: "Fira Sans", sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* === Команда === */
.team-section {
  padding: 20px;
  animation: fadeInUp 1s ease forwards;
}

.team-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.team-member {
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.employee-name {
  font-size: 1.2em;
  margin: 0 0 10px 0;
}

.employee-position {
  font-size: 1em;
}

/* === Мобильная версия === */
@media (max-width: 768px) {
  .about-inner {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .about-title {
    font-size: 1.6em;
  }

  .about-subtitle {
    font-size: 1.2em;
  }

  .about-description {
    font-size: 0.95em;
  }

  .about-services li {
    font-size: 0.95em;
    justify-content: flex-start;
  }

  .img-container {
    width: 200px;
    height: auto;
  }

  .img-container img {
    height: 200px;
    width: 200px;
  }

  .team-section {
    padding: 20px 10px;
  }

  .team-title {
    font-size: 1.6em;
  }

  .team-list {
    grid-template-columns: 1fr;
  }

  .team-member {
    padding: 16px;
  }

  .employee-name {
    font-size: 1.1em;
  }

  .employee-position {
    font-size: 0.95em;
  }
  p {
    font-size: 16px;
  }

  h1, h2 {
    font-size: 22px;
  }

  .container {
    padding: 20px;
  }
}

/* === Анимации === */
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

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>