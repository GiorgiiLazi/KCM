<template>
  <nav class="nav-1">
    <div class="icon-container">
      <img src="@/assets/main-icon2.png" alt="КСМ">
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
      <span>
        <i class="fa-solid fa-envelope" style="font-size:48px;color:red"></i>
      </span>
    </a>
    <label>Email</label>
    <p><a href="mailto:173797m@gmail.com">info.ck.ksm@gmail.com</a></p>
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
</template>

<script setup>

</script>

<style scoped>
.nav-1{
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
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
</style>