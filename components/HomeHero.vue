<template>
  <v-container fluid fill-height class="home-hero">
    <v-container justify-center align-center column pa-5>
      <p class="sub-heading">Best psychologist</p>
      <div class="display-2 font-weight-black white--text text-xs-center">
        Tranform your
      </div>
      <div class="display-2 font-weight-black white--text text-xs-center mb-3">
        mindset & achieve your goals.
      </div>
      <div class="font-weight-bold white--text text-xs-center">
        Amazing therapies and advice to help you achieve your goals and taking
        important decisions of your life.
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero',
}
</script>

<style lang="scss" scoped>
.home-hero {
  background: url('https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-size: cover;
  width: 100%;
  max-height: 800px;
  height: 100vh;
}

.sub-heading {
  font-size: 14px;
  color: #a47355;
  line-height: 1.2;
  text-align: left;
  font-weight: 800;
  padding-left: 88px;
  letter-spacing: 1.2px;
  position: relative;
  text-transform: uppercase;
  margin-top: 0;
  &:before {
    content: '';
    position: absolute;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: #a47355;
    left: 0;
    top: 6px;
  }
  &:after {
    content: '';
    position: absolute;
    background: #a47355;
    top: 8px;
    left: 14px;
    height: 2px;
    opacity: 1;
    width: 50px;
    opacity: 0.5;
  }
}
</style>
