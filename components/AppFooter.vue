<template>
  <v-footer id="app-footer" padless>
    <v-container>
      <v-col>
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }} - Rested Minds -
          <NuxtLink to="/privacy-policy">Privacy police</NuxtLink>
        </div>
      </v-col>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
#app-footer {
  color: rgb(255 255 255/75%) !important;
  background-color: #151110;

  .copyright {
    background-color: #2e2928;
    padding: 10px 15px;
    margin-top: -40px;
    border-radius: 8px;

    a {
      color: rgb(255 255 255/75%) !important;
      text-decoration: none;
    }
  }
}
</style>
