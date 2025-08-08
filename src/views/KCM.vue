<template>
  <section class="about-company" itemscope itemtype="http://schema.org/Organization">
    <div class="container">
      <h1 class="about-title" itemprop="name">Строительная компания КСМ</h1>
      <h2 class="about-subtitle">ООО «СК КАПИТАЛСТРОЙМОНТАЖ»</h2>
      <article class="about-description" itemprop="description">
        Наша компания специализируется на широком спектре строительных и отделочных работ. Мы выполняем:
        <ul class="about-services">
            
          <li v-for="service in services" :key="service.id">
            <span class="material-symbols-outlined">check</span>
            {{ service.name }}
        </li>
        </ul>
        Мы работаем в Санкт-Петербурге и Ленинградской области, соблюдаем сроки и гарантируем качество на всех этапах — от проектирования до сдачи объекта.
    </article>
       </div>

        <div class="img-container">
            <h1><label for="">Генеральный директор КСМ - Михаил</label></h1>
        <img src="@/assets/architector-01.webp" alt="Генеральный директор КСМ Михаил" loading="lazy"></img>
        
    </div>
      </section>

      <section class="contacts-info">
      <ul class="about-contacts">
        <li v-for="contact in contacts" :key="contact.name">
          <span class="icons material-symbols-outlined">{{ contact.icon }}</span>
          <strong>{{ contact.name }}:&nbsp;</strong>
          <template v-if="contact.href === ''">
            <span :itemprop="contact.itemprop">{{ contact.value }}</span>
          </template>
          <template v-else>
            <a :href="contact.href" :itemprop="contact.itemprop">{{ contact.value }}</a>
          </template>
        </li>
      </ul>
   
    </section>
  


  <section class="team-section">
    <div class="container">
      <h2 class="team-title">Наша команда</h2>
      <ul class="team-list">
        <li
          v-for="(employee, index) in employees"
          :key="index"
          class="team-member"
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

const contacts = [
  {
    name: "Адрес",
    value: "192289, Санкт-Петербург, пр. Гаражный, д.1, лит. А, офис 309",
    href: "",
    icon: "location_on",
    itemprop: "address"
  },
  {
    name: "ИНН",
    value: "7816755087",
    href: "",
    icon: "pin",
    itemprop: "taxID"
  },
  {
    name: "Телефон (Михаил)",
    value: "+7 (951) 655-02-37",
    href: "tel:+79516550237",
    icon: "call",
    itemprop: "telephone"
  },
  {
    name: "Email",
    value: "info.ck.ksm@gmail.com",
    href: "mailto:info.ck.ksm@gmail.com",
    icon: "mail",
    itemprop: "email"
  }
];

const employees = [
  {
    name: "Лазишвили Мамука Нодарович",
    position: "Генеральный директор",
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
.about-company {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  padding: 40px 20px;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Bebas Neue", sans-serif;
}
.contacts-info{
  padding: 40px 20px;
  background: #005689;
  color: white;
  font-family: Oswald, serif;
  font-size: 1.2em;
}
.img-container {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1; /* Квадрат */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin: 0 auto;
  font-family: "Fira Sans", sans-serif;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: center 100%;
}

.img-container label {
  display: block;
  padding: 10px 5px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #333;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.about-title {
  font-size: 2.2em;
  margin-bottom: 10px;
  color: #1a1a1a;
}
.about-subtitle {
  font-size: 1.4em;
  margin-bottom: 20px;
  color: #555;
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
  list-style: none;
  margin-bottom: 5px;
}
.about-services li span{
    font-size: 1.5em;
    font-weight: bold;
    color: green
}
.about-contacts li {
    list-style: none;
  margin: 8px 0;
  font-size: 0.95em;
}
.about-contacts a {
  color: white;
  text-decoration: none;
}
.about-contacts a:hover {
  text-decoration: underline;
}

.icons {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 8px;
  color: white
}
.about-contacts li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.95em;
}

.team-section {
  padding: 40px 20px;
  background-color: #ffffff;
  color: #333;
  font-family: "Arial", sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.team-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #1a1a1a;
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
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.employee-name {
  font-size: 1.2em;
  margin: 0 0 10px 0;
  color: #1a1a1a;
}
.employee-position {
  font-size: 1em;
  color: #666;
}
</style>