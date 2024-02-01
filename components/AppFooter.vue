<template>
  <v-footer id="app-footer" padless height="66px">
    <div class="container">
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }} - Rested Minds -
        <NuxtLink to="/privacy-policy">Privacy police</NuxtLink>
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
#app-footer {
  background-color: #151110 !important;
  padding: 5px 0;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .copyright {
    background: #2e2928;
    padding: 20px 15px;
    border-radius: 8px;
    top: -35px;
    position: relative;
    text-align: center;
    color: rgb(255 255 255/75%) !important;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;

    a {
      color: rgb(255 255 255/75%) !important;
      text-decoration: none;
    }
  }
}
</style>
