<template>
  <v-app>
    <app-header></app-header>

    <v-content transition="slide-x-transition">
      <v-main class="main-container">
        <Nuxt />
      </v-main>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 150px;
}

@media only screen and (max-width: 576px) {
  .main-container {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 768px) {
  .main-container {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 992px) {
  .main-container {
    margin-top: 100px;
  }
}
</style>
