<template>
  <div class="background">
    <nav class="nav-1">
    <div class="icon-container">
      <img src="@/assets/main-icon.png" alt="КСМ">
    </div>

    <div class="contacts-container">
  <div class="contact-item">
    <a href="https://wa.me/+79516550237">
      <i class="fa-brands fa-whatsapp" style="font-size:48px;color:lightgreen"></i>
    </a>
    <label>WhatsApp</label>
    <p><a href="https://wa.me/+79516550237">+7 951 655 02 37</a></p>
  </div>
  
  <div class="contact-item">
    <a href="mailto:173797m@gmail.com">
      <a href="mailto:173797m@gmail.com">
        <i class="fa-solid fa-envelope" style="font-size:48px;color:red"></i>
      </a>
    </a>
    <label>Email</label>
    <p><a href="mailto:173797m@gmail.com">173797m@gmail.com</a></p>
  </div>
  
  <div class="contact-item">
    <a href="tel:+79516550237">
      <i class="fa-solid fa-phone" style="font-size:48px;color: blue"></i>
    </a>
    <label>Телефон</label>
    <p>
      <a href="tel:+79516550237">
        Михаил +7 951 655 02 37
      </a></p>
  </div>
</div>
  </nav>
  <div class="title-app">
    <h1>Построй будущее с КСМ</h1>
     <router-link to="/contact">
      <h2>Получить Консультацию</h2>
    </router-link>
  </div>
  <nav class="nav-2">
    <div class="router-container">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">КСМ</router-link> 
      <router-link to="/services">Услуги</router-link> 
      <router-link to="/examples">Объекты</router-link> 
  

    </div>
     
  </nav>
 
  
  </div>
  
  <router-view/>


</template>

<script setup>



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
#app, body, html {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  color: white;
  background: #d5eeff; 
}
.background{
  position:relative;
  height: 60vh;;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/photo1.jpg'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.nav-1{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-2{
  width: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
}
.icon-container{
  max-width: 10%;
  min-width: 50px;
}
.icon-container img{
  filter: drop-shadow(0 0 10px white);
  max-width: 100%;
}
.contacts-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-around; 
  align-items: center;
  text-align: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-item p {
  margin: 5px 0 0 0;
}
.contact-item p a {
  text-decoration: none;
  color: white;
  font-size: 12px;
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
.title-app{
  color:#d5eeff; 
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: absolute;
  font-size: 1.2em;
}
.title-app a{
  text-decoration: none;
  color:#d5eeff; 
}
.title-app h1, .title-app a h2{
  text-align: center;
}
</style>