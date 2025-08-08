<template>
  <div>
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
          src="@/assets/construction1.png"
          alt="construction picture"
        />
      </div>
    </section>

    <section name="fade" class="section section2 reverse">
      <div class="container">
        <div class="text-block text-block2">
          <h1>
            <strong>Качество, прозрачность и индивидуальный подход</strong> —
            вот что ценят наши клиенты
          </h1>
        </div>
      </div>
      <div class="img-holder">
        <img
          loading="lazy"
          src="@/assets/construction2.png"
          alt="construction picture"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { gsap} from "gsap";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

onMounted(()=>{
    gsap.fromTo('.section1', {
    y:500,
    opacity: 0
  },
  {
    duration: 0.6,
    y:0,
    opacity: 1
  })
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
})
</script>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  width: 100%;
  margin-bottom: 200px;
  margin-top: 50px;
}
.section2 {
  background: #005689;
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
  justify-content: flex-end;
  align-items: center;
}
.img-holder {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
    padding: 0 10px;
    margin-bottom: 20px;
  }

  .text-block {
    max-width: 100%;
    padding: 16px;
    font-size: 0.95em;
    box-shadow: none;
    text-align: center;
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
    height: auto;
    max-height: 300px;
    object-fit: cover;
  }

  .reverse {
    flex-direction: column;
  }
}
</style>
