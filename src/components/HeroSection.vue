<template>
  <section name="fade" class="section section2 reverse">
    <div class="container">
      <div class="text-block text-block2">
        <h1>
          <strong>Качество, прозрачность и индивидуальный подход</strong> — вот
          что ценят наши клиенты
        </h1>
      </div>
    </div>
    <div class="img-holder">
      <img
        loading="lazy"
        src="/images/house-2.webp"
        alt="construction picture"
      />
    </div>
  </section>
  <section class="section section1 firstSection">
    <div class="container">
      <div class="text-block">
        <h1 style="text-transform: uppercase">537 объектов</h1>
        <h1 style="text-transform: uppercase">25 лет опыта</h1>
        <h1 style="text-transform: uppercase">Сотни клиентов</h1>
      </div>
    </div>
    <div class="img-holder">
      <img
        loading="lazy"
        src="/images/house-1.webp"
        alt="construction picture"
      />
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(
    ".section1",
    {
      y: 500,
      opacity: 0,
    },
    {
      duration: 0.6,
      y: 0,
      opacity: 1,
    }
  );
  //   gsap.fromTo('.section2', {
  //    x:3000,
  //    opacity: 0,
  //   },
  // {
  //   x:0,
  //   opacity: 1,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: '.section2',
  //     start: 'top 70%',
  //     bottom: 'top +=200px',
  //     toggleActions: 'restart pause none none',
  //      once: 'true'
  //   }
  // })
});
</script>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
.section2 {
  background: #005689;
}
.container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16/9;
  flex-grow: 1;
}

.text-block {
  background: #005689;
  padding: 20px;
  max-width: 70%;
  flex-wrap: nowrap;
  border-radius: 12px;
  text-align: left;
  z-index: 3;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-block2 {
  background: #ff895d;
}
.img-holder {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center; /* center the image inside */
  align-items: center;
  overflow: hidden; /* prevent overflow if image scales */
}

.img-holder img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* keep image fully visible, maintain aspect ratio */
  display: block;
}

.img-holder1 img,
.img-holder2 img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.text-block h1 {
  margin: 10px 0px;
  font-size: 40px;
  font-family: "Bebas Neue", sans-serif;
}
.text-block strong {
  text-transform: uppercase;
  font-weight: bold;
}
.reverse {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .section {
    flex-direction: column;
    height: auto;
    margin: 40px 0;
  }

  .container {
    width: 100%;
    aspect-ratio: unset;
    padding: 0px;
    margin: 0px;
  }

  .text-block {
    width: 100%; /* Take full width */
    padding: 0; /* Remove extra space if necessary */
    margin: 0; /* Remove side gaps */
    box-sizing: border-box; /* Keep padding inside width */
    background-color: transparent; /* Remove visible background */
    box-shadow: none;
  }

  .text-block h1 {
    font-size: 26px;
    text-align: center;
  }
  .img-holder {
    width: 100%;
    justify-content: center;
    padding: 0 10px;
  }

  .img-holder img {
    width: 100%;
    height: auto; /* scale proportionally */
    max-height: 300px;
    object-fit: contain; /* maintain containment on mobile */
  }

  .reverse {
    flex-direction: column;
  }
}
</style>
