<template>
  <section class="container">
    <h1 class="title">Страница не найдена</h1>
      <p>Проверьте правильность ссылки или вернитесь на <router-link to="/">главную страницу</router-link>.</p>
    <div class="image-holder">
      <img src="@/assets/confused.png" alt="страница не существует" />
    </div>
    </section>
  <div class="container">
    
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  height: auto;
  margin: 40px 0;
}
.title {
  color: black;
  font-weight: bold;
  font-size: 1.3em;
  margin: 20px 0px;
  text-align: center;
  text-transform: uppercase;
}
p{
  color: black;
   text-align: center;
}
.image-holder {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
