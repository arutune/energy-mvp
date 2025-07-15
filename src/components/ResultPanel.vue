
<template>
  <section class="result" v-if="result">
    <button class="result__close" @click="$emit('close')">×</button>
    <h2>Ваш энергетический отчёт</h2>
    <div class="result__info">
      <h3>Дата рождения: {{ result.birthdate }}</h3>
    </div>
    <div class="result__card">
      <h3>Сегодня</h3>
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
  position: relative;
}
.result__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.18);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.85;
  box-shadow: 0 2px 8px 0 rgba(60, 0, 80, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, opacity 0.2s, box-shadow 0.2s;
  z-index: 2;
}
.result__close:hover {
  background: rgba(255,255,255,0.32);
  opacity: 1;
  box-shadow: 0 4px 16px 0 rgba(60, 0, 80, 0.18);
}

.result__card p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
</style>
