
<template>
  <section class="result" v-if="result">
    <h2>Ваш энергетический отчёт</h2>
    <div class="result__card">
      <p><strong>Энергия:</strong> {{ result.energy }}</p>
      <p><strong>Фокус:</strong> {{ result.focus }}</p>
      <p><strong>Резонанс:</strong> {{ result.sync }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResultPanel',
  props: {
    result: Object
  }
}
</script>

<style scoped>
.result {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}

.result__card p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
</style>
