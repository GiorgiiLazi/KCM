<template>
  <div>
  <section class="section firstSection">
    <div class="container">
        <div class="text-block">
            <h1>Доверьте ремонт <strong>КСМ</strong>, и вы получите результат, который превзойдёт ожидания</h1>
            <h1>Ваши цели - <strong>наш приоритет</strong></h1>
            
        </div>
    </div>
    <div class="img-holder">
        <img loading="lazy" src="@/assets/construction1.png" alt="construction picture">
    </div>
  </section>

  <section class="section reverse">
    <div class="container">
        <div class="text-block">
            <h1><strong>Качество, прозрачность и индивидуальный подход</strong> — вот что ценят наши клиенты</h1>
        </div>
    </div>
    <div class="img-holder">
        <img loading="lazy" src="@/assets/construction2.png" alt="construction picture">
    </div>
  </section>
  </div>

</template>

<script setup>


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
  min-height: 40vh;
  max-width: 70%;
  flex-wrap: nowrap;
  border-radius: 12px;
  text-align: left;
  z-index: 3;
  
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.img-holder{
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

.img-holder1 img, .img-holder2 img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.text-block h1{
    margin: 10px 0px;
    font-size: 40px;
    font-family: "Oswald", sans-serif;
}
.text-block strong{
    text-transform: uppercase ;
    font-weight: bold;
}
.reverse{
    flex-direction: row-reverse;
}
</style>