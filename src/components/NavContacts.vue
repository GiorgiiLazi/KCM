<template>
  <nav class="nav-1">
    <!-- Десктопная иконка -->
    <div class="icon-container">
      <img src="/images/main-icon-2.webp" alt="КСМ логотип">
    </div>

    <!-- Десктопные контакты -->
   <div :class="['contacts-container', 'desktop-contacts']">
  <div class="contact-item">
    <a href="https://wa.me/+79219239997">
      <img src="/icons/whatsapp.svg" alt="WhatsApp" 
           style="width:72px; height:72px; filter: invert(37%) sepia(97%) saturate(543%) hue-rotate(90deg) brightness(95%) contrast(92%);">
    </a>
    <label>WhatsApp</label>
    <p><a href="https://wa.me/+79219239997">+7 (921) 923-99-97</a></p>
    <p><a href="https://wa.me/+79219969997">+7 (921) 996-99-97</a></p>
  </div>

  <div class="contact-item">
    <a href="https://t.me/spb_ksm" target="_blank">
      <img src="/icons/telegram.svg" alt="Telegram" 
           style="width:72px; height:72px; filter: invert(36%) sepia(60%) saturate(2200%) hue-rotate(185deg) brightness(95%) contrast(98%);">
    </a>
    <label>Telegram</label>
    <p><a href="https://t.me/spb_ksm" target="_blank">@spb_ksm</a></p>
  </div>

  <div class="contact-item">
    <a href="mailto:info.ck.kcm@gmail.com">
      <img src="/icons/email.svg" alt="Email" 
           style="width:72px; height:72px; filter: invert(14%) sepia(95%) saturate(6000%) hue-rotate(360deg) brightness(90%) contrast(110%);">
    </a>
    <label>Email</label>
    <p><a href="mailto:info.ck.kcm@gmail.com">info.ck.ksm@gmail.com</a></p>
    <p><a href="mailto:173797m@gmail.com">173797m@gmail.com</a></p>
  </div>

  <div class="contact-item">
    <a href="tel:+79219239997">
      <img src="/icons/phone.svg" alt="Телефон" 
           style="width:72px; height:72px; filter: invert(36%) sepia(60%) saturate(2200%) hue-rotate(185deg) brightness(95%) contrast(98%);">
    </a>
    <label>Телефон</label>
    <p><a href="tel:+79219239997">+7 (921) 923-99-97</a></p>
    <p><a href="tel:+79219969997">+7 (921) 996-99-97</a></p>
  </div>
</div>
    <!-- Мобильная иконка компании -->
    <div class="mobile-logo">
      <img src="/images/main-icon-2.webp" alt="КСМ логотип">
    </div>
  </nav>

  <!-- Мобильные контакты внизу -->
  <div :class="['mobile-contacts', {isTransparent: isTransparent}]">
  <a href="https://wa.me/+79219239997" class="mobile-icon">
    <span class="sr-only">WhatsApp: +79219239997 </span>
    <img src="/icons/whatsapp.svg" alt="WhatsApp" 
         style="width:28px; height:28px; filter: invert(46%) sepia(82%) saturate(522%) hue-rotate(79deg) brightness(98%) contrast(101%);">
  </a>

  <a href="mailto:info.ck.kcm@gmail.com" class="mobile-icon">
    <span class="sr-only">info.ck.kcm@gmail.com</span>
    <img src="/icons/email.svg" alt="Email" 
         style="width:28px; height:28px; filter: invert(14%) sepia(95%) saturate(6000%) hue-rotate(360deg) brightness(90%) contrast(110%);">
  </a>

  <a href="tel:+79219239997" class="mobile-icon">
    <span class="sr-only">Telephone: +79219239997 </span>
    <img src="/icons/phone.svg" alt="Телефон" 
         style="width:28px; height:28px; filter: invert(36%) sepia(60%) saturate(2200%) hue-rotate(185deg) brightness(95%) contrast(98%);">
  </a>
</div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const isTransparent = ref(false)

const handleScroll = () =>{
  const scrollPosition = window.scrollY + window.innerHeight
  const pageHeight = document.documentElement.scrollHeight
  isTransparent.value = scrollPosition >= pageHeight - 10
}

onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
.nav-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1000;
  position: relative;
}

.icon-container {
  max-width: 10%;
  min-width: 50px;
}

.icon-container img {
  filter: drop-shadow(0 0 10px white);
  max-width: 100%;
}


/* --- Десктопная версия --- */
.contacts-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-left: auto; /* ← Прижимает вправо */
  padding-right: 40px; /* ← Отступ от края экрана */
  text-align: center;
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
  font-size: 1.2em;
}

.contact-item label {
  font-size: 14px;
  font-weight: bold;
  color: white;
}

/* --- Мобильные иконки --- */
.mobile-contacts {
  display: none;
}
/* Скрыта по умолчанию */
.mobile-logo {
  display: none;
}


/* === АНИМАЦИЯ ПОЯВЛЕНИЯ === */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-1,
.contact-item,
.mobile-contacts,
.mobile-logo {
  animation: fade-in 0.8s ease forwards;
}

/* === ЭФФЕКТЫ ПРИ НАВЕДЕНИИ === */
.contact-item a:hover,
.mobile-icon:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease, color 0.2s ease;
  color: #ffe600;
}



@media (max-width: 768px) {
  .icon-container{
    display: none;
  }
  .desktop-contacts {
    display: none;
  }

  .mobile-contacts {
    display: flex;
    justify-content: center;
    gap: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 86, 137, 0.5);
    padding: 10px 0;
    z-index: 1000;
    overflow-x: auto;
  }
  .isTransparent{
    background-color: transparent !important
  }
  .mobile-icon {
    font-size: 24px;
    color: white;
    text-decoration: none;
    padding: 0 10px;
    opacity: 1;
  }
  .mobile-icon img{
    opacity: 1;
  }
  .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
  .mobile-icon i {
    font-size: 28px;
  }
  .mobile-icon img{
    opacity: 1;
  }
  .mobile-logo {
    position:fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #005689;
  }

  .mobile-logo img {
    height: 40px;
    width: auto;
    filter: drop-shadow(0 0 5px white);
  }
  .mobile-logo {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0;
    background: transparent;
  }

  .mobile-logo img {
    height: 36px;
    width: auto;
    filter: drop-shadow(0 0 5px white);
  }
}

</style>