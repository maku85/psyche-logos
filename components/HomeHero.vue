<template>
  <v-parallax
    class="home-hero"
    height="70vh"
    src="https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  >
    <div class="overlay"></div>

    <v-container
      class="d-flex flex-column fill-height align-start justify-center pa-5 hero-heading"
    >
      <p class="white-sub-heading">{{ subHeading2 }}</p>
      <h1 v-html="heading1"></h1>
      <h1 v-html="heading2"></h1>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'HomeHero',
  data: () => ({
    subHeading2: process.env.HERO_SUB_HEADING || 'Lorem ipsum dolor',
    heading1: process.env.HERO_HEADING_1 || 'Lorem ipsum dolor sit amet,',
    heading2: process.env.HERO_HEADING_2 || 'consectetur adipiscing elit,',
    heading3:
      process.env.HERO_HEADING_3 ||
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
    subHeading:
      process.env.HERO_SUB_HEADING ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
  }),
}
</script>

<style lang="scss" scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgb(21, 17, 16, 0.8) 0%,
    rgba(21, 17, 16, 0.6) 100%
  );
}

.hero-heading {
  color: #fff;
  transition: 1s ease-in-out;
  animation: fade 1s;
  max-width: 1200px !important;

  h1 {
    z-index: 999;
  }
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
