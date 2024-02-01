<template>
  <v-app>
    <app-header></app-header>

    <v-main class="main-container">
      <NuxtPage />
    </v-main>

    <app-footer></app-footer>
    <scroll-to-top></scroll-to-top>
  </v-app>
</template>

<style lang="scss" scoped>
.main-container {
  margin-top: 120px;
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
