<template>
  <div class="container">
    <h1 class="title">Этой страницы не существует</h1>
  <div class="image-holder">
    <img src="@/assets/confused.png" alt="страница не существует">
  </div>
  </div>
  
</template>

<script setup>

</script>

<style scoped>
.container{
  height: 100vh;
  margin: 40px 0;
}
.title{
  color: black;
  font-weight: bold;
  font-size: 1.3em;
  margin: 100px 0px;
  text-align: center;
  text-transform: uppercase;
}
.image-holder{
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>