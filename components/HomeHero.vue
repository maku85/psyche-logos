<template>
  <v-container fluid fill-height class="home-hero">
    <v-container justify-center align-center column pa-5>
      <div class="font-weight-bold white--text">
        <div class="hero-heading display-2 font-weight-bold">Tranform your</div>
        <div class="hero-heading display-2 font-italic font-weight-bold">
          mindset & achieve
        </div>
        <div class="hero-heading display-2 font-weight-bold">your Goals.</div>
        <p class="hero-subheading mt-5" style="max-width: 500px">
          Amazing therapies and advice to help you achieve your goals and taking
          important decisions of your life.
        </p>
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
  max-height: 600px;
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

.hero-heading {
  transition: 1s ease-in-out;
  animation: fade 1s;
}

.hero-subheading {
  transition: 1s ease-in-out;
  animation: translate 2s;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translate(0, 187px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes translate {
  from {
    opacity: 0;
    transform: translate(187px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
