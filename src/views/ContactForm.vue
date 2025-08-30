<template>
  <main class="container">
    <section class="contact-links fade-in delay-1">
      <div class="location fade-in delay-2">
        <img
          src="/icons/location.svg"
          alt="Наш офис"
          style="
            width: 28px;
            height: 28px;
            filter: invert(51%) sepia(74%) saturate(620%) hue-rotate(5deg)
              brightness(97%) contrast(101%);
            margin-right: 8px;
          "
        />
        <div class="location-text">
          <h1 class="text text-title">Наш офис</h1>
          <p>г.Санкт-Петербург</p>
          <p>Гаражный проезд д. 1 офис 309/208</p>
        </div>
      </div>

      <div class="location fade-in delay-3">
        <img
          src="/icons/office.svg"
          alt="Часы работы"
          style="
            width: 28px;
            height: 28px;
            filter: invert(51%) sepia(74%) saturate(620%) hue-rotate(5deg)
              brightness(97%) contrast(101%);
            margin-right: 8px;
          "
        />
        <div class="location-text">
          <h1 class="text text-title">Часы Работы</h1>
          <p>Пн-Пт: 09:00 - 18:00</p>
          <p>Cб-Вск: 10:00 - 17:00</p>
        </div>
      </div>

      <div class="location fade-in delay-4">
        <img
          src="/icons/phone.svg"
          alt="Номера"
          style="
            width: 28px;
            height: 28px;
            filter: invert(51%) sepia(74%) saturate(620%) hue-rotate(5deg)
              brightness(97%) contrast(101%);
            margin-right: 8px;
          "
        />
        <div class="location-text">
          <h1 class="text text-title">Номера</h1>
          <a href="tel:+79516550237">
            <p>+7 (951) 655-02-37</p>
          </a>
          <a href="tel:+79219239997">
            <p>+7 (921) 923-99-97</p>
          </a>
          <a href="tel:+79219969997">
            <p>+7 (921) 996-99-97</p>
          </a>
        </div>
      </div>
    </section>
    <section class="form-section fade-in delay-1">
      <form ref="formRef" @submit.prevent="sendEmail">
        <h3>Свяжитесь с нами по любому вопросу 🙂</h3>
        <div>
          <label for="subject"
            >Тема сообщения <strong class="star">*</strong></label
          >
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label for="name">Имя <strong class="star">*</strong></label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="phone">Телефон <strong class="star">*</strong></label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="message">Сообщение <strong class="star">*</strong></label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </section>
  </main>
  <section class="map-container third-color">
    <h1 class="map-title">Наш Офис</h1>
    <div class="map-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.1813380317915!2d30.441339577122033!3d59.84612857486869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962f7c61b33b87%3A0x56ad9df1cf549f4b!2z0JPQsNGA0LDQttC90YvQuSDQv9GALdC0LCAxLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTIyODk!5e0!3m2!1sru!2sge!4v1755454018796!5m2!1sru!2sge"
        style="border: 0"
        title="Офис КСМ"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const formRef = ref(null);
const sendEmail = () => {
  emailjs
    .sendForm("service_9qca6da", "template_0pgn3ai", formRef.value, {
      publicKey: "vmHbJr8v9mlNGgKHM",
    })
    .then(() => {
      alert("Ваше сообщение успешно отправлено");
    })
    .catch((error) => {
      alert(error.text);
    });
};
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
}
.third-color {
  background: #ff895d;
  color: #fff;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #d5eeff;
}
.form-section {
  max-width: 600px;
  margin: 40px auto;
  background: #007cb9;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  padding: 30px 20px;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.form-header {
  background: var(--primary-color);
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.form-header h2 {
  margin: 0;
  font-size: 24px;
}

.form-header p {
  margin-top: 5px;
  font-size: 14px;
  color: #e0eaff;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 20px;
}

label {
  font-weight: 500;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  background: #ff895d;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3367d6;
}

.star,
.icons,
.text {
  color: #ff895d;
}
.icons {
  font-size: 6rem;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
}
/* .text-title {
  text-transform: none;
  font-family: "Bebas Neue", sans-serif;

} */
.text-title a h3 {
  text-decoration: none;
}
.location-text p {
  color: black;
}
.location {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.location-text a {
  text-decoration: none;
  color: inherit;
}
.contact-links {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 100px;
}
/* Map */
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0; /* no extra margin */
  padding: 20px;
  border-radius: 0; /* optional if you don’t want rounded corners */
}

.map-wrapper {
  width: 100%;
  max-width: none; /* remove any max width restriction */
  margin: 0; /* center for desktop if you want */
  aspect-ratio: 3 / 2;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 20px;
}

/* Desktop specific width */
@media (min-width: 1024px) {
  .map-wrapper {
    width: 60%;
    margin: 0 auto; /* centers map on desktop */
  }
}
/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}

.fade-in.delay-1 {
  animation-delay: 0.3s;
}

.fade-in.delay-2 {
  animation-delay: 0.6s;
}

.fade-in.delay-3 {
  animation-delay: 0.9s;
}

.fade-in.delay-4 {
  animation-delay: 1.2s;
}
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .map-wrapper {
    width: 75%;
    margin: 0 auto; /* centers map on desktop */
  }
  .form-section {
    margin: 20px;
    padding: 15px;
  }

  .form-header h2 {
    font-size: 20px;
  }

  button {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
    text-align: left;
  }
  .contact-links {
    padding-left: 0px;
  }
}
</style>
