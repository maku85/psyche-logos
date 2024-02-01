<template>
  <section class="home-hero d-flex align-center justify-center">
    <div class="hero-content">
      <h2 class="content-heading">{{ title }}</h2>
      <p class="content-subheading">{{ description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SeparatorComponent',
  data: () => ({
    title:
      process.env.SEPARATOR_TITLE || 'Susan is a life changer, having magical',
    description:
      process.env.SEPARATOR_DESCRIPTION ||
      'Amazing therapies and advice to help you achieve your goals and taking important decisions of your life.',
  }),
}
</script>

<style lang="scss" scoped>
.home-hero {
  background: url('http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/10/quote-bg.jpg?id=202');
  padding-top: 50px !important;
  padding-bottom: 75px !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  transition: opacity 0.5s ease;
  overflow: hidden;
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
    opacity: 0.9;
  }

  .hero-content {
    color: #fff;
    z-index: 999;

    .content-heading {
      font-size: 33px;
      color: #fff;
      line-height: 42px;
      text-align: center;
      font-style: italic;
      font-weight: 400 !important;
    }

    .content-subheading {
      color: rgba(255, 255, 255, 0.75);
      text-align: center;
      margin-top: 25px !important;
      font-weight: 600 !important;
    }
  }
}
</style>
