<template>
  <v-container fluid fill-height class="home-hero">
    <div class="overlay"></div>

    <v-container
      d-flex
      flex-column
      justify-center
      column
      pa-5
      class="
        centered-content
        hero-heading
        display-2
        font-weight-bold
        white--text
      "
    >
      <p class="sub-heading">{{ subHeading2 }}</p>
      <div v-html="heading1"></div>
      <div v-html="heading2"></div>
      <!-- <div class="hero-heading display-2 font-weight-bold">
          {{ heading3 }}
        </div> -->
      <!-- <p class="hero-subheading mt-5" style="max-width: 500px">
          {{ subHeading }}
        </p> -->
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero',
  data: () => ({
    subHeading2: process.env.HERO_SUB_HEADING || 'MY PRACTICE',
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
.home-hero {
  background: url('https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-size: cover;
  width: 100%;
  max-height: 500px;
  height: 100vh;
  position: relative;

  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 0;
    display: inline-block;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      rgb(21, 17, 16, 0.6) 0%,
      rgba(21, 17, 16, 0.4) 100%
    );
  }

  .centered-content {
    position: relative;
  }
}

.sub-heading {
  font-size: 14px;
  color: #fff;
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
    background: #fff;
    left: 0;
    top: 6px;
  }
  &:after {
    content: '';
    position: absolute;
    background: #fff;
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
