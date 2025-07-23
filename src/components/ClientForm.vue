<template>
   <section class="form-section">
    <div class="form-header">
      <h2>Обратная связь</h2>
      <p>Свяжитесь с нами по любому вопросу</p>
    </div>
    <form ref="formRef" @submit.prevent="sendEmail">
      <div>
        <label for="subject">Тема сообщения</label>
        <input type="text" id="title" name="title" required>
      </div>
      <div>
        <label for="name">Имя </label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="phone">Телефон</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div>
        <label for="message">Сообщение</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </section>
</template>

<script setup>

import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const formRef = ref(null)
const sendEmail = () => {
      emailjs
        .sendForm('service_9qca6da', 'template_0pgn3ai', formRef.value,  {
          publicKey: 'vmHbJr8v9mlNGgKHM', 
        })
        .then(
          () => {
            alert('Ваше сообщение успешно отправлено');
          },
          (error) => {
            alert('Ваше сообщение не было отправлено', error.text);
          },
        );
    }

 
</script>



<style scoped>
    
 
    .form-section {
      max-width: 600px;
      margin: 40px auto;
      background: #007cb9; 
      border-radius: 8px;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
      padding: 30px 20px;
      font-family: Oswald, serif;

        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
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
      gap: 15px;
      padding: 20px;
    }

    label {
      font-weight: 500;
      margin-bottom: 5px;
    }

    input, textarea {
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