<template>
  <v-container fluid fill-height class="home-hero" style="height: 100vh">
    <v-container justify-center align-center column pa-5>
      <div class="display-2 font-weight-black white--text text-xs-center">
        Lorem ipsum
      </div>
      <div class="display-3 font-weight-black white--text text-xs-center mb-3">
        dolor sit amet
      </div>
      <div class="font-weight-bold white--text text-xs-center">
        consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et
        dolore magna aliqua.
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero',
}
</script>

<style scoped>
.home-hero {
  background: url('https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
