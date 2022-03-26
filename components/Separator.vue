<template>
  <v-container fluid fill-height justify-center pa-5 class="home-hero">
    <div class="hero-content font-weight-bold white--text text-center">
      <div class="display-1 font-italic">
        Susan is a life changer, having magical
      </div>
      <div class="display-1 font-italic">skills for helping people with</div>
      <div class="display-1 font-italic">psychotherapy.</div>
      <p class="subheading font-weight-light mt-5">
        Amazing therapies and advice to help you achieve your goals and taking
        important decisions of your life.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SeparatorComponent',
}
</script>

<style lang="scss" scoped>
.home-hero {
  background: url('http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/10/quote-bg.jpg?id=202');
  background-size: cover;
  width: 100%;
  height: 400px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background-color: #151110;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.8;
  }

  .hero-content {
    z-index: 1;
  }
}
</style>
