
<template>
  <div id="app">
    <HeroSection @calculate="calculateEnergy" />
    <ResultPanel v-if="result" :result="result" />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import ResultPanel from './components/ResultPanel.vue';
export default {
  name: 'App',
  components: {
    HeroSection,
    ResultPanel
  },
  data() {
    return {
      result: null
    }
  },
  methods: {
    calculateEnergy(birthdate) {
      if (!birthdate) return;
      this.result = {
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
