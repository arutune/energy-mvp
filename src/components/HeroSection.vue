
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
            <span class="icon"><img src="/icon1.png" alt="Текущее состояние" /></span>
            <div>
              <strong>Текущее состояние</strong>
              <p>Что говорит ваша энергия сегодня</p>
            </div>
          </div>
          <div class="benefit">
            <span class="icon"><img src="/icon2.png" alt="Синхронизация отношений" /></span>
            <div>
              <strong>Синхронизация отношений</strong>
              <p>С кем вы на одной волне?</p>
            </div>
          </div>
          <div class="benefit">
            <span class="icon"><img src="/icon3.png" alt="Зеркало ума" /></span>
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

<style scoped lang="less">
@import '../styles/theme.less';

.hero {
  position: relative;
  min-height: 100vh;
  color: @textColor;
  font-family: @fontFamily;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: @backgroundGradient;
  z-index: 0;
}

// Glowing circles
.hero__bg::before,
.hero__bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 1;
}
.hero__bg::before {
  width: 300px;
  height: 300px;
  left: 10%;
  top: 60%;
  background: @glowPink;
}
.hero__bg::after {
  width: 220px;
  height: 220px;
  right: 15%;
  top: 20%;
  background: @glowBlue;
}

.hero__content {
  z-index: 2;
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
  font-weight: 800;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: @textSecondary;
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
  background: @inputBg;
  color: @inputText;
  font-size: 1rem;
  font-family: @fontFamily;
}

.hero__form button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: @buttonBg;
  border-radius: 12px;
  color: @buttonText;
  font-size: 1rem;
  font-family: @fontFamily;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.hero__form button:hover {
  filter: brightness(1.1);
}

.hero__benefits {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.benefit {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  max-width: 220px;
}

.icon {
  width: @iconCircle;
  height: @iconCircle;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: @iconSize;
  color: #fff;
  background: none !important;
  box-shadow: none !important;
}
.icon img {
  max-width: 48px;
  max-height: 48px;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  background: none !important;
  box-shadow: none !important;
}
.benefit:nth-child(1) .icon,
.benefit:nth-child(2) .icon,
.benefit:nth-child(3) .icon {
  background: none;
}

.benefit strong {
  font-size: 1.1rem;
  font-weight: 700;
  color: @textColor;
}
.benefit p {
  color: @textSecondary;
  font-size: 0.98rem;
  margin: 0.2rem 0 0 0;
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
  filter: drop-shadow(0 8px 32px @glowPurple);
}

.icon, .icon img {
  background: none !important;
  box-shadow: none !important;
}
</style>
