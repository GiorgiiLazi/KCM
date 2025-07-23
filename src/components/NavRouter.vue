<template>
   <nav class="nav-2">
    <div class="router-container">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">КСМ</router-link> 
      <router-link to="/services">Услуги</router-link> 
      <router-link to="/examples">Объекты</router-link> 
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
.nav-2{
  width: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
}
.router-container{
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0px;
  width: 100%;

}
.router-container a{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;     
  padding: 5px 10px;
  color: black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: none;
  border-top: none;
  width: 100%;
  text-decoration: none;
  font-size: 1.3em;
  color: white;
  background: #005689; 
  
}
.router-container a:hover{
  background: rgba(15, 82, 252, 0.5);
}

nav a.router-link-exact-active {
  background: rgb(15, 82, 252);
 
}
</style>