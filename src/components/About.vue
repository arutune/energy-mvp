<template>
  <section class="about">
    <div class="about__container">
      <h2>Почему наш подход уникален?</h2>
      <p>
        <!--В отличие от других систем мы рассматриваем человека комплексно с позиций психологии и гороскопов. Как известно, в различных ситуациях мы "включаем" разную сторону личности — родителя, ребенка и взрослого (согласно структурного анализа Эрика Берна).<br><br>
        Вкратце — родитель это наше воспитание, ребенок — инстинкты и желания, взрослый — разум. В своих расчетах мы комбинируем уникальный подход, позволяющий лучше понять себя, свои желания и правильное с точки зрения энергетики поведение на текущий момент.-->
        <strong>Вы — больше, чем просто знак зодиака или набор черт характера.</strong><br><br>
        Мы объединили психологию и эзотерику, чтобы раскрыть вашу личность с разных сторон. В жизни мы не статичны: иногда в нас говорит <span class="about__role">Родитель</span> — голос воспитания и опыта, иногда — <span class="about__role">Ребёнок</span> с его мечтами и желаниями, а порой — рассудительный <span class="about__role">Взрослый</span>.<br><br>
        <em>Как понять, какая часть вас сейчас на первом плане?</em> <br>
        <span class="about__highlight">Наш сервис помогает увидеть себя целостно</span> — понять свои истинные желания, внутренние конфликты и найти гармонию между разумом, чувствами и интуицией.<br><br>
        Мы не даём скучных прогнозов. Вместо этого — <strong>живой, динамичный анализ</strong>, который подскажет, как использовать свою энергию сегодня максимально эффективно.<br><br>
        <span class="about__cta">Попробуйте — и вы удивитесь, насколько точным может быть ваш энергетический прогноз!</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="less">
@import '../styles/theme.less';
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 2rem 0;
}
.about__container {
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  max-width: 800px;
  width: 100%;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 32px 0 rgba(60, 0, 80, 0.10);
  color: @textColor;
}
.about__container h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: @textColor;
}
.about__container p {
  font-size: 1.25rem;
  line-height: 1.7;
  color: @textSecondary;
}
.about__role {
  color: @accentPurple;
  font-weight: 700;
}
.about__highlight {
  color: @accentOrange;
  font-weight: 700;
}
.about__cta {
  display: block;
  margin-top: 1.5rem;
  font-size: 1.15em;
  color: @primaryColor;
  font-weight: 800;
}
@media (max-width: 900px) {
  .about__container {
    max-width: 95vw;
    padding: 2rem 1rem;
  }
}
@media (max-width: 600px) {
  .about {
    padding: 1.5rem 0 1rem 0;
  }
  .about__container {
    padding: 1.5rem 0.7rem;
    border-radius: 14px;
  }
  .about__container h2 {
    font-size: 1.5rem;
    margin-bottom: 1.1rem;
  }
  .about__container p {
    font-size: 1.1rem;
    line-height: 1.7;
  }
}
</style> 