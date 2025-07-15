
<template>
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__content">
      <div class="hero__text">
        <h1>Что ваша энергия говорит сегодня?</h1>
        <p class="subtitle">
          Узнай об отношениях и состоянии ума - на основе даты рождения.
        </p>
        <div class="hero__form">
          <flat-pickr
            v-model="birthdate"
            :config="datePickerConfig"
            placeholder="Дата рождения"
            class="custom-date-input"
          />
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
        <ResultPanel v-if="result" :result="result" @close="closeResult" />
        <img v-else src="/illustration.png" alt="Медитирующий человек и ключ" />
      </div>
    </div>
  </section>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import ResultPanel from './ResultPanel.vue';
export default {
  name: 'HeroSection',
  components: { flatPickr, ResultPanel },
  props: {
    result: Object
  },
  data() {
    return {
      datePickerConfig: {
        dateFormat: 'd.m.Y',
        allowInput: true, 
        maxDate: '01.01.2018',
        // defaultDate: '01.01.2000',
      },
      // birthdate: ''
    }
  },
  methods: {
    closeResult() {
      this.$emit('close-result');
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
  gap: 0;
  margin-bottom: 2rem;
  position: relative;
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
  z-index: 1;
}

.hero__form input[type="date"]::placeholder {
  color: @textColor;
  opacity: 0.9;
}
.hero__form input[type="date"]::-webkit-input-placeholder { color: @textColor; opacity: 0.9; }
.hero__form input[type="date"]::-moz-placeholder { color: @textColor; opacity: 0.9; }
.hero__form input[type="date"]:-ms-input-placeholder { color: @textColor; opacity: 0.9; }
.hero__form input[type="date"]::-ms-input-placeholder { color: @textColor; opacity: 0.9; }

.hero__form input[type="date"]:focus {
  background: rgba(255,255,255,0.06);
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
  position: relative;
  left: -24px;
  z-index: 2;
  box-shadow: 0 2px 8px 0 rgba(60, 0, 80, 0.10);
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
  max-width: @iconSize1;
  max-height: @iconSize1;
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
.benefit:nth-child(1) .icon img {
  max-width: @iconSize2;
  max-height: @iconSize2;
}
.custom-date-input::placeholder {
  color: #fff;
  opacity: 1;
}
.custom-date-input::-webkit-input-placeholder { color: #fff; opacity: 1; }
.custom-date-input::-moz-placeholder { color: #fff; opacity: 1; }
.custom-date-input:-ms-input-placeholder { color: #fff; opacity: 1; }
.custom-date-input::-ms-input-placeholder { color: #fff; opacity: 1; }

@media (max-width: 900px) {
  .hero__content {
    flex-direction: column;
    align-items: stretch;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
  .hero__illustration {
    margin-top: 2rem;
    justify-content: center;
  }
}
@media (max-width: 600px) {
  .hero {
    min-height: unset;
    padding: 0;
  }
  .hero__content {
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
    padding: 1.5rem 0.5rem;
  }
  .hero__text {
    order: 1;
  }
  .hero__illustration {
    order: 2;
    margin: 2.5rem auto 0 auto;
    display: block;
    max-width: 180px;
    justify-content: center;
    align-items: center;
  }
  .hero__illustration img {
    display: block;
    margin: 0 auto;
  }
  .hero__text, .hero__form, .hero__benefits {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .hero__text h1, .subtitle, .hero__form, .hero__benefits {
    text-align: center;
  }
  .hero__form {
    flex-direction: column;
    gap: 0.9rem;
    align-items: stretch;
  }
  .hero__benefits {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
  .benefit {
    max-width: 100%;
    gap: 1.2rem;
    align-items: center;
  }
  .icon {
    width: 48px;
    height: 48px;
    font-size: 2rem;
  }
  .icon img {
    max-width: 40px;
    max-height: 40px;
  }
  .hero__illustration {
    margin: 2rem auto 0 auto;
    display: block;
    max-width: 180px;
    justify-content: center;
    align-items: center;
  }
  .hero__illustration img {
    display: block;
    margin: 0 auto;
  }
  .hide-on-result {
    display: none !important;
  }
}
@media (max-width: 1000px) {
  .hero__content {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 2.5rem 1.2rem;
  }
  .hero__text, .hero__form, .hero__benefits {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .hero__text h1 {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.3rem;
    margin-bottom: 1.7rem;
  }
  .hero__form input,
  .hero__form .custom-date-input,
  .hero__form button {
    font-size: 1.2rem;
    padding: 1.1rem 1.2rem;
    border-radius: 16px;
  }
  .icon {
    width: 52px;
    height: 52px;
    font-size: 2.2rem;
  }
  .icon img {
    max-width: 44px;
    max-height: 44px;
  }
  .hero__illustration {
    margin: 2.5rem auto 0 auto;
    max-width: 220px;
  }
}
@media (max-width: 800px) {
  .hero__content {
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
    padding: 2rem 0.7rem;
  }
  .hero__text, .hero__form, .hero__benefits {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
  .hero__text h1 {
    font-size: 2.1rem;
  }
  .subtitle {
    font-size: 1.15rem;
    margin-bottom: 1.3rem;
  }
  .hero__form input,
  .hero__form .custom-date-input,
  .hero__form button {
    font-size: 1.13rem;
    padding: 1rem 1.1rem;
    border-radius: 14px;
  }
  .icon {
    width: 46px;
    height: 46px;
    font-size: 1.9rem;
  }
  .icon img {
    max-width: 36px;
    max-height: 36px;
  }
  .hero__illustration {
    margin: 2rem auto 0 auto;
    max-width: 170px;
  }
}
</style>
