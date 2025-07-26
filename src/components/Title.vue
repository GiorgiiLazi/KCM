<template>
   <div class="title-app">
    <div>
      <h1>Строительная компания КСМ</h1>
     <router-link to="/contact">
      <h2>Получить Консультацию</h2>
    </router-link>
  </div>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
.title-app{
  position: relative;
  color:#d5eeff; 
  font-size: 1rem;
  font-family: "Oswald", sans-serif;
  text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
}
.title-app div{
  position: absolute;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: absolute;
  display: flex;
  top: 0px;
}
.title-app div a{
  text-decoration: none;
  color:#d5eeff;
  z-index: 999;
  cursor: pointer;
}
.title-app h1, .title-app h2{
  text-align: center;
}
</style>