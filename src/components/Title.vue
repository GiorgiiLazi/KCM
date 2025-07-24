<template>
   <div class="title-app">
    <h1>Построй будущее с КСМ</h1>
     <router-link to="/contact">
      <h2>Получить Консультацию</h2>
    </router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.title-app{
  position: relative;
  bottom: 100px;
  color:#d5eeff; 
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: absolute;
  font-size: 1.2em;
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
}
.title-app a{
  text-decoration: none;
  color:#d5eeff; 
}
.title-app h1, .title-app a h2{
  text-align: center;
}
</style>