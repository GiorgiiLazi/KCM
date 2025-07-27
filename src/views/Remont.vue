<template>
  <section class="hero first-color">
    <div class="container">
      <h1>Профессиональный ремонт квартир</h1>
      <p>Мы воплощаем ваши мечты в реальность — от бюджетного ремонта до премиум-интерьеров под ключ.</p>
    </div>
  </section>

  <main class="main-content">
    <section class="service-block third-color">
      <div class="container">
        <h2 class="alt-color">Эконом-вариант</h2>
        <p>Доступные решения без потери качества. Мы подбираем материалы, которые соответствуют вашему бюджету, но служат долго. Подходит для сдачи жилья, ремонта студий и небольших квартир. Включает:</p>
        <ul>
          <li>Шпатлевка и покраска стен</li>
          <li>Замена напольного покрытия</li>
          <li>Обновление сантехники</li>
          <li>Гарантия — 1 год</li>
        </ul>
        <div class="gallery"> <!-- Добавьте сюда изображения --> </div>
      </div>
    </section>

    <section class="service-block second-color">
      <div class="container">
        <h2>Евроремонт</h2>
        <p>Современные материалы, строгая геометрия, визуальный комфорт и эргономика. Идеальное сочетание стиля и практичности. Мы предлагаем:</p>
        <ul>
          <li>Выравнивание стен и полов</li>
          <li>Прокладка скрытой электрики</li>
          <li>Монтаж натяжных потолков</li>
          <li>Установка современной фурнитуры</li>
          <li>Гарантия — 2 года</li>
        </ul>
        <div class="gallery"> <!-- Добавьте изображения --> </div>
      </div>
    </section>

    <section class="service-block fourth-color">
      <div class="container">
        <h2 class="alt-color">Элитный ремонт</h2>
        <p>Эксклюзивный интерьер по индивидуальному дизайн-проекту. Мы сотрудничаем с лучшими архитекторами и дизайнерами. Включает:</p>
        <ul>
          <li>Дизайн-проект под ключ</li>
          <li>Премиум-материалы</li>
          <li>Авторский надзор</li>
          <li>Полный контроль бюджета</li>
          <li>Гарантия — 3 года</li>
        </ul>
        <div class="gallery"> <!-- Добавьте изображения --> </div>
      </div>
    </section>

    <section class="extras second-color">
      <div class="container">
        <h2>Дополнительные услуги</h2>
        <ul>
          <li>Вывоз строительного мусора</li>
          <li>Разработка 3D-визуализаций</li>
          <li>Помощь в выборе материалов</li>
          <li>Переезд и расстановка мебели</li>
        </ul>
      </div>
    </section>

    <section class="guarantee fourth-color">
      <div class="container">
        <h2 class="alt-color">Гарантии и подход</h2>
        <p>Мы предоставляем официальную гарантию на все виды работ. Наши клиенты получают:</p>
        <ul>
          <li>Договор с прописанными сроками и этапами</li>
          <li>Постоянную фотофиксацию хода работ</li>
          <li>Честную смету без скрытых платежей</li>
          <li>Бесплатную консультацию и выезд специалиста</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  font-family: "Bebas Neue", sans-serif;
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
fourth-color {
  background: #ff895d;
}
.alt-color{
  color: #007cb9;
}

</style>
