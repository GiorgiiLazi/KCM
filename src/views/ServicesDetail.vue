<template>
  <section>
    <h1>{{ service?.name }}</h1>
    <p>Описание услуги "{{ service?.name }}" от строительной компании КСМ в Санкт-Петербурге.</p>
  </section>
</template>

<script>
import { servicesList } from '../routes/servicesList.js'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const service = servicesList.find(s => s.slug === route.params.opisanieUslug)
    return { service }
  }
}
</script>
