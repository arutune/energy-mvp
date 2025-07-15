
<template>
  <div id="app">
    <HeroSection @calculate="calculateEnergy" :result="result" @close-result="result = null" />
    <About />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import ResultPanel from './components/ResultPanel.vue';
import About from './components/About.vue';
import { useToast } from 'vue-toastification';
export default {
  name: 'App',
  components: {
    HeroSection,
    ResultPanel,
    About
  },
  data() {
    return {
      result: null
    }
  },
  methods: {
    calculateEnergy(birthdate) {
      const toast = useToast();
      if (!birthdate) {
        toast.warning('Пожалуйста, введите дату рождения');
        return;
      }
      this.result = {
        birthdate: birthdate,
        energy: 'Гармоничная',
        focus: 'Интуиция',
        sync: 'Открыты для общения'
      }
    }
  }
}
</script>

<style scoped lang="less">
@import './styles/theme.less';
#app {
  font-family: @fontFamily;
  color: @textColor;
  background: @backgroundGradient;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
