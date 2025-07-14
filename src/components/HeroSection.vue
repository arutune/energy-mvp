
<template>
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__content">
      <div class="hero__text">
        <h1>Что ваша энергия говорит сегодня?</h1>
        <p class="subtitle">
          Откройте закономерности в отношениях и состоянии ума — на основе даты рождения.
        </p>
        <div class="hero__form">
          <input type="date" v-model="birthdate" placeholder="Дата рождения" />
          <button @click="$emit('calculate', birthdate)">Открыть карту →</button>
        </div>
        <div class="hero__benefits">
          <div class="benefit">
            <span class="icon">🌡</span>
            <div>
              <strong>Текущее состояние</strong>
              <p>Что говорит ваша энергия сегодня</p>
            </div>
          </div>
          <div class="benefit">
            <span class="icon">🔄</span>
            <div>
              <strong>Синхронизация отношений</strong>
              <p>С кем вы на одной волне?</p>
            </div>
          </div>
          <div class="benefit">
            <span class="icon">🧠</span>
            <div>
              <strong>Зеркало ума</strong>
              <p>Что движет вашими эмоциями?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__illustration">
        <img src="/illustration.png" alt="Медитирующий человек и ключ" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      birthdate: ''
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, #6418c3, #2d0b5a);
  z-index: 0;
}

.hero__content {
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 3rem;
  gap: 2rem;
}

.hero__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #e0cfff;
}

.hero__form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero__form input {
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: none;
  min-width: 220px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
}

.hero__form button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: linear-gradient(90deg, #f72585, #7209b7);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.hero__form button:hover {
  filter: brightness(1.1);
}

.hero__benefits {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.benefit {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  max-width: 200px;
}

.icon {
  font-size: 2rem;
}

.hero__illustration {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__illustration img {
  max-width: 100%;
  height: auto;
}
</style>
