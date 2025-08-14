<template>

    <section class="payment-options third-color" itemscope itemtype="https://schema.org/Organization">
      <div class="container">
        <h2 class="fade-in title" itemprop="name">Способы оплаты</h2>
        <div class="payment-grid">
          <!-- ООО -->
          <div class="payment-item fade-in delay-1 second-color" itemprop="department" itemscope itemtype="https://schema.org/Organization">
            <h3 itemprop="name">ООО "СК Капиталстроймонтаж"</h3>
            <p><strong>Расчётный счёт:</strong> <span itemprop="bankAccount">40702810620000188738</span></p>
            <p><strong>Банк:</strong> ООО "Банк Точка", БИК 044525104</p>
            <p><strong>Корр. счёт:</strong> 30101810745374525104</p>
            <p><strong>ИНН/КПП:</strong> 7816755087 / 781601001</p>
            <p class="advantages">
              <strong>Особенности оплаты через ООО</strong>
              <ul>
                <li>НДС 20% обязателен</li>
                <li>Налоги на прибыль, имущество, соц. и мед. страхование</li>
              </ul>
            </p>
          </div>

          <!-- ИП -->
          <div class="payment-item fade-in delay-2 second-color" itemprop="department" itemscope itemtype="https://schema.org/Person">
            <h3 itemprop="name">ИП Лазишвили Мамука Нодарович</h3>
            <p><strong>Расчётный счёт:</strong> <span itemprop="bankAccount">40802810720000515460</span></p>
            <p><strong>Банк:</strong> ООО "Банк Точка", БИК 044525104</p>
            <p><strong>Корр. счёт:</strong> 30101810745374525104</p>
            <p><strong>ИНН:</strong> 781601312197</p>
            <p class="advantages">
              <strong>Преимущества оплаты через ИП:</strong>
              <ul>
                <li>Налог 7% вместо НДС</li>
                <li>1% комиссия банку</li>
                <li>Простая бухгалтерия и меньше налогов</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>

</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray(".fade-in").forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });
});
</script>

<style scoped>
.first-color {
  background: #005689;
  color: white;
  padding: 40px 20px;
}
.second-color {
  background: #007cb9;
  color: white;
  padding: 30px 20px;
}
.third-color {
  background: #d5eeff;
  color: black;
  padding: 20px;
  margin: 0;
}
.fourth-color {
  background: #ff895d;
  color: white;
  padding: 40px 20px;
  text-align: center;
}
.title{
    text-align: center;
    font-size: 36px;
    color: #005689;
}
.payment-options {
  padding: 60px 20px;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 50px;
}

.payment-item {
  padding: 30px;
  border-radius: 12px;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.payment-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.payment-item h3 {
  margin-bottom: 20px;
  font-size: 28px;
}

.payment-item p {
  font-size: 16px;
  margin-bottom: 12px;
}

.payment-item ul {
  margin: 10px 0 0 20px;
}

.advantages strong {
  display: block;
  margin-bottom: 5px;
}
p{
    text-align: left;
}

/* Мобильная версия */
@media (max-width: 768px) {
  .payment-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .payment-item {
    padding: 20px;
  }

  .payment-item h3 {
    font-size: 24px;
  }

  .payment-item p {
    font-size: 14px;
  }
}
</style>
