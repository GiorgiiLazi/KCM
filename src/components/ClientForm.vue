<template>
  <div class="container">
    <section class="contact-links">
        <div class="location">
          <span class="icons material-symbols-outlined">location_on</span>
          <div class="location-text">
            <h1 class="text text-title">Наш офис</h1>
            <h3>г.Санкт-Петербург</h3>
            <h3>Гаражный проезд д. 1 офис 309/208</h3>
          </div>
        </div>
        <div class="location">
          <span class="icons material-symbols-outlined">apartment</span>
          <div class="location-text">
            <h1 class="text text-title">Часы Работы</h1>
            <h3>Пн-Пт: 08:00 - 20:00</h3>
            <h3>Cб-Вск: 09:00 - 17:00</h3>
          </div>
        </div>
        <div class="location">
          <span class="icons material-symbols-outlined">phone_in_talk</span>
          <div class="location-text">
            <h1 class="text text-title">Номера</h1>
            <a href="tel:+79516550237">
              <h3>+79516550237</h3>
            </a>
            <a href="tel:+79219239997">
              <h3>+79219239997</h3>
            </a>
            <a href="tel:+79219969997">
              <h3>+79219969997</h3>
            </a>
          </div>
        </div>
    </section>
    <section class="form-section">
      <form ref="formRef" @submit.prevent="sendEmail">
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
  </div>
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
.container{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.form-section {
  max-width: 600px;
  margin: 40px auto;
  background: #007cb9;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  padding: 30px 20px;
  font-family: Oswald, serif;

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
.icons{
  font-size: 6rem;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
}
.text-title{
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
}
.location{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.location-text h3{
  color: black;
  font-family: "Fira Sans", sans-serif;
  font-weight: 200;
  font-style: italic;
}
.contact-links{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 100px;
}
@media (max-width: 600px) {
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
</style>
