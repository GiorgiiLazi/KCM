<template>
  <footer class="contacts-info">
    <div class="footer-container">
      <ul class="about-contacts">
        <li v-for="contact in contacts" :key="contact.name">
          <div class="contact-wrapper">
            <span class="icons material-symbols-outlined">{{ contact.icon }}</span>
            <strong>{{ contact.name }}:&nbsp;</strong>
          </div>

          <div class="contact-values">
            <template v-if="contact.icon === 'call'">
              <a
                v-if="contact.href1"
                :href="contact.href1"
                :itemprop="contact.itemprop"
                >{{ contact.value1 }}</a
              ><br />
              <a
                v-if="contact.href2"
                :href="contact.href2"
                :itemprop="contact.itemprop"
                >{{ contact.value2 }}</a
              ><br />
              <a
                v-if="contact.href3"
                :href="contact.href3"
                :itemprop="contact.itemprop"
                >{{ contact.value3 }}</a
              >
            </template>

            <template v-else-if="contact.itemprop === 'openingHours'">
              <p>{{ contact.value1 }}</p>
              <p>{{ contact.value2 }}</p>
            </template>

            <template v-else-if="contact.emails">
              <template v-for="(email, index) in contact.emails" :key="index">
                <a :href="`mailto:${email}`" :itemprop="contact.itemprop">{{ email }}</a><br />
              </template>
            </template>

            <template v-else-if="contact.whatsapps">
              <template v-for="(wa, index) in contact.whatsapps" :key="index">
                <a :href="`https://wa.me/${wa.href}`" target="_blank" rel="noopener noreferrer">
                  {{ wa.value }}
                </a><br />
              </template>
            </template>

            <template v-else>
              <span :itemprop="contact.itemprop">{{ contact.value }}</span>
            </template>
          </div>
        </li>
      </ul>

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

<script setup>
const contacts = [
  {
    name: "Адрес",
    value: "192289, Санкт-Петербург, Гаражный проезд, д.1, лит. А, офис 309/208",
    href: "",
    icon: "location_on",
    itemprop: "address",
  },
  {
    name: "Часы Работы",
    value1: "Пн-Пт: 09:00 - 18:00",
    value2: "Cб-Вск: 10:00 - 17:00",
    href: "",
    icon: "clock_loader_20",
    itemprop: "openingHours",
  },
  {
    name: "Телефон (Михаил)",
    value1: "+7 (951) 655-02-37",
    href1: "tel:+79516550237",
    value2: "+7 (921) 923-99-97",
    href2: "tel:+79219239997",
    value3: "+7 (921) 996-99-97",
    href3: "tel:+79219969997",
    icon: "call",
    itemprop: "telephone",
  },
  {
    name: "Email",
    icon: "mail",
    itemprop: "email",
    emails: ["info.ck.ksm@gmail.com", "173797m@gmail.com"],
  },
  {
    name: "WhatsApp",
    icon: "lift_to_talk",
    whatsapps: [
      { value: "+7 (921) 923-99-97", href: "79219239997" },
      { value: "+7 (921) 996-99-97", href: "79219969997" },
    ],
  },
];
</script>

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