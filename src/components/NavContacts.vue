<template>
  <nav class="nav-1">
    <!-- Десктопная иконка -->
    <div class="icon-container">
      <img src="@/assets/main-icon2.png" alt="КСМ">
    </div>

    <!-- Десктопные контакты -->
    <div class="contacts-container desktop-contacts">
      <div class="contact-item">
        <a href="https://wa.me/+79516550237">
          <i class="fa-brands fa-whatsapp" style="font-size:48px;color:lightgreen"></i>
        </a>
        <label>WhatsApp</label>
        <p><a href="https://wa.me/+79516550237">+7 (951) 655-02-37</a></p>
      </div>
      <div class="contact-item">
        <a href="mailto:173797m@gmail.com">
          <i class="fa-solid fa-envelope" style="font-size:48px;color:red"></i>
        </a>
        <label>Email</label>
        <p><a href="mailto:173797m@gmail.com">info.ck.ksm@gmail.com</a></p>
      </div>
      <div class="contact-item">
        <a href="tel:+79516550237">
          <i class="fa-solid fa-phone" style="font-size:48px;color: blue"></i>
        </a>
        <label>Телефон</label>
        <p><a href="tel:+79516550237">Михаил +7 (951) 655-02-37</a></p>
      </div>
    </div>

    <!-- Мобильная иконка компании -->
    <div class="mobile-logo">
      <img src="@/assets/main-icon2.png" alt="КСМ">
    </div>
  </nav>

  <!-- Мобильные контакты внизу -->
  <div class="mobile-contacts">
    <a href="https://wa.me/+79516550237" class="mobile-icon">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="mailto:173797m@gmail.com" class="mobile-icon">
      <i class="fa-solid fa-envelope"></i>
    </a>
    <a href="tel:+79516550237" class="mobile-icon">
      <i class="fa-solid fa-phone"></i>
    </a>
  </div>
</template>

<script setup>

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
  font-size: 12px;
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
    gap: 24px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #005689;
    padding: 10px 0;
    z-index: 9999;
    overflow-x: auto;
  }

  .mobile-icon {
    font-size: 24px;
    color: white;
    text-decoration: none;
    padding: 0 10px;
  }

  .mobile-icon i {
    font-size: 28px;
  }
  .mobile-logo {
    position:fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    justify-content: flex-end;
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