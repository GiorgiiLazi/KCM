<template>
  <div class="background">
    <nav class="nav-1">
    <div class="icon-container">
      <img src="@/assets/main-icon.png" alt="КСМ">
    </div>

    <div class="contacts-container">
  <div class="contact-item">
    <i class="fa-brands fa-whatsapp" style="font-size:48px;color:lightgreen"></i>
    <label>WhatsApp</label>
    <p><a href="https://wa.me/+79516550237">+7 951 655 02 37</a></p>
  </div>
  
  <div class="contact-item">
    <i class="fa-solid fa-envelope" style="font-size:48px;color:red"></i>
    <label>Email</label>
    <p><a href="mailto:173797m@gmail.com">173797m@gmail.com</a></p>
  </div>
  
  <div class="contact-item">
    <i class="fa-solid fa-phone" style="font-size:48px;color: blue"></i>
    <label>Phone</label>
    <p><a href="tel:+79516550237">+7 951 655 02 37</a></p>
  </div>
</div>
  </nav>
  <div class="title">
    <h1>Построй будущее с КСМ</h1>
    <h2>Получить Консультацию</h2>
  </div>
  <nav class="nav-2">
    <div class="router-container">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О Нас</router-link> 
      <router-link to="/services">Услуги</router-link> 
      <router-link to="/examples">Портфолио</router-link> 
      <router-link to="/advantages">Преимущества</router-link> 
      <router-link to="/references">Отзывы</router-link> 
      <router-link to="/contacts">Контакты</router-link> 
      <router-link to="/objects">Наши Объекты</router-link> 
    </div>
     
  </nav>
 
  
  </div>
  
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
#app, body, html {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  color: white;
}
.background{
  position:relative;
  height: 100vh;;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* затемняющий слой */
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
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
}
.icon-container{
  max-width: 15%;
  min-width: 50px;
}
.icon-container img{
  filter: drop-shadow(0 0 10px white);
  max-width: 100%;
}
.contacts-container {
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
}

.router-container{
  display: flex;
  justify-content: space-around;
  margin: 20px 15px;
  gap: 15px;
}
.router-container a{
  color: black;
  text-decoration:none;
  font-family: "Roboto", sans-serif;
  font-size: 1.7em;
  color: white;
  flex-wrap: nowrap;


}

nav a.router-link-exact-active {
  text-decoration: underline;
}
.title{
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: absolute;
  font-size: 1.2em;
}
.title h1, .title h2{
  text-align: center;
}
</style>