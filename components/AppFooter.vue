<template>
  <v-footer id="app-footer" padless>
    <v-container>
      <v-col>
        <div class="text-center">
          {{ new Date().getFullYear() }} -
          <NuxtLink to="/privacy-policy">Privacy police</NuxtLink>
        </div>
      </v-col>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
#app-footer {
  color: rgb(255 255 255/75%) !important;
  background-color: #2e2928;
}
</style>
