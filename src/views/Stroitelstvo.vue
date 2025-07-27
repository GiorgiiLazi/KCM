<template>
  <section class="hero first-color">
    <div class="container">
      <h1>Строительство домов и коттеджей</h1>
      <p>Строим дома, в которых хочется жить</p>
    </div>
  </section>

  <main class="main-content">
    <section class="service-block third-color">
      <div class="container">
        <h2 class="alt-color">Каркасное строительство</h2>
        <p>Быстрый, экологичный и энергоэффективный вариант. Подходит для сезонного и круглогодичного проживания. Предлагаем:</p>
        <ul>
          <li>Проектирование и расчёт нагрузки</li>
          <li>Сборка на месте по технологии SIP/каркас</li>
          <li>Утепление, отделка, коммуникации</li>
          <li>Гарантия — 2 года</li>
        </ul>
        <div class="gallery"> <!-- Добавьте фото домов --> </div>
      </div>
    </section>

    <section class="service-block second-color">
      <div class="container">
        <h2>Кирпичные дома</h2>
        <p>Классическая технология для максимальной долговечности и звукоизоляции. Мы выполняем:</p>
        <ul>
          <li>Полный цикл работ: от фундамента до отделки</li>
          <li>Прокладка инженерных сетей</li>
          <li>Отделка фасада (штукатурка, облицовка, плитка)</li>
          <li>Гарантия — 3 года</li>
        </ul>
        <div class="gallery"> <!-- Галерея кирпичных домов --> </div>
      </div>
    </section>

    <section class="service-block fourth-color">
      <div class="container">
        <h2 class="alt-color">Индивидуальное проектирование</h2>
        <p>Создаем уникальные дома по вашим идеям и стилю жизни. Включает:</p>
        <ul>
          <li>Разработка архитектурного проекта</li>
          <li>Инженерные решения и ландшафтный дизайн</li>
          <li>Авторский и технический надзор</li>
          <li>Полная прозрачность бюджета</li>
          <li>Гарантия — до 5 лет</li>
        </ul>
        <div class="gallery"> <!-- Галерея проектов и чертежей --> </div>
      </div>
    </section>

    <section class="extras second-color">
      <div class="container">
        <h2>Дополнительные услуги</h2>
        <ul>
          <li>Помощь в получении разрешений</li>
          <li>Согласование проекта в органах</li>
          <li>Поставка материалов и логистика</li>
          <li>Устройство террас, беседок, заборов</li>
        </ul>
      </div>
    </section>

    <section class="guarantee fourth-color">
      <div class="container">
        <h2 class="alt-color">Гарантии и подход</h2>
        <p>Мы не просто строим — мы берём на себя ответственность. Наши клиенты получают:</p>
        <ul>
          <li>Контроль сроков и бюджета</li>
          <li>Официальный договор и этапная оплата</li>
          <li>Фото- и видеофиксация этапов</li>
          <li>Гарантия на конструктивные элементы — до 5 лет</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
}

h1, h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
}

.hero {
  padding: 6rem 1rem;
  text-align: center;
  color: #fff;
}

.service-block {
  padding: 5rem 1rem;
  margin-bottom: 4rem;
  border-radius: 12px;
  color: #000;
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: disc;
  color: #333;
}

.gallery {
  margin-top: 2rem;
  height: 200px;
  background: #eee;
  border: 2px dashed #bbb;
}

.extras, .guarantee {
  padding: 5rem 1rem;
  margin-bottom: 4rem;
  border-radius: 12px;
  color: #000;
}

.first-color {
  background: #005689;
}
.second-color {
  background: #007cb9;
}
.third-color {
  background: #d5eeff;
}

.alt-color {
  color: #007cb9;
}
</style>