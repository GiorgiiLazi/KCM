<template>
  <footer class="contacts-info">
    <div class="footer-container">
      <ul class="about-contacts">
        <!-- Адрес -->
        <li>
          <div class="contact-wrapper">
            <span class="icons material-symbols-outlined">location_on</span>
            <strong>Адрес:&nbsp;</strong>
          </div>
          <div class="contact-values">
            <span itemprop="address">
              192289, Санкт-Петербург, Гаражный проезд, д.1, лит. А, офис 309/208
            </span>
          </div>
        </li>

        <!-- Часы работы -->
        <li>
          <div class="contact-wrapper">
            <span class="icons material-symbols-outlined">clock_loader_20</span>
            <strong>Часы Работы:&nbsp;</strong>
          </div>
          <div class="contact-values">
            <p>Пн-Пт: 09:00 - 18:00</p>
            <p>Cб-Вск: 10:00 - 17:00</p>
          </div>
        </li>

        <!-- Телефоны -->
        <li>
          <div class="contact-wrapper">
            <span class="icons material-symbols-outlined">call</span>
            <strong>Телефон (Михаил):&nbsp;</strong>
          </div>
          <div class="contact-values">
            <a href="tel:+79516550237" itemprop="telephone">+7 (951) 655-02-37</a><br />
            <a href="tel:+79219239997" itemprop="telephone">+7 (921) 923-99-97</a><br />
            <a href="tel:+79219969997" itemprop="telephone">+7 (921) 996-99-97</a>
          </div>
        </li>

        <!-- Email -->
        <li>
          <div class="contact-wrapper">
            <span class="icons material-symbols-outlined">mail</span>
            <strong>Email:&nbsp;</strong>
          </div>
          <div class="contact-values">
            <a href="mailto:info.ck.ksm@gmail.com" itemprop="email">info.ck.ksm@gmail.com</a><br />
            <a href="mailto:173797m@gmail.com" itemprop="email">173797m@gmail.com</a>
          </div>
        </li>

        <!-- WhatsApp -->
        <li>
          <div class="contact-wrapper">
            <span class="icons"><i class="fa-brands fa-whatsapp"></i></span>
            <strong>WhatsApp:&nbsp;</strong>
          </div>
          <div class="contact-values">
            <a href="https://wa.me/79219239997" target="_blank" rel="noopener noreferrer">
              +7 (921) 923-99-97
            </a><br />
            <a href="https://wa.me/79219969997" target="_blank" rel="noopener noreferrer">
              +7 (921) 996-99-97
            </a>
          </div>
        </li>

        <!-- Telegram -->
        <li>
          <div class="contact-wrapper">
            <span class="icons"><i class="fa-brands fa-telegram"></i></span>
            <strong>Telegram:&nbsp;</strong>
          </div>
          <div class="contact-values">
            <a href="https://t.me/spb_ksm" target="_blank" rel="noopener noreferrer">
              @spb_ksm
            </a>
          </div>
        </li>
      </ul>

      <!-- Logo -->
      <div class="img-container">
        <img
          src="/images/main-icon-2.webp"
          alt="OOO «СК КАПИТАЛСТРОЙМОНТАЖ»"
          loading="lazy"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  align-items: flex-end;
}

.contacts-info {
  background: #005689;
  padding: 40px 20px;
  color: white;
}

.about-contacts {
  padding: 0;
  margin: 0;
  flex: 1;
  min-width: 250px;
}

.about-contacts li {
  list-style: none;
  margin-bottom: 16px;
}

.contact-wrapper {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 4px;
}

.contact-values a,
.contact-values span {
  color: white;
  font-size: 0.95em;
  line-height: 1.6;
  text-decoration: none;
}

.contact-values a:hover {
  text-decoration: underline;
}

.icons {
  font-size: 20px;
  margin-right: 8px;
  color: white;
}

.img-container {
  flex-shrink: 0;
  max-width: 300px;
  height: 100%;
  filter: drop-shadow(0 0 10px white);
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
</style>