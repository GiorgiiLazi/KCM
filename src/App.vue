<template>
  <div class="background">
    <NavContacts/>
    <Title></Title>
    <NavRouter/>
  </div>
  <router-view/>
</template>

<script setup>
import Title from './components/Title.vue';
import NavRouter from './components/NavRouter.vue';
import NavContacts from './components/NavContacts.vue';




</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
#app, body, html {
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  padding: 0;
  margin: 0;
  color: white;
  background: #d5eeff; 
}
.background{
  position:relative;
  height: 75vh;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('@/assets/photo1.jpg'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}




</style>