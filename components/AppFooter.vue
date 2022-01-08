<template>
  <v-footer padless>
    <v-card flat tile class="text-center">
      <v-card-text>
        <socials></socials>
      </v-card-text>

      <v-card-text class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} -
        <NuxtLink to="/privacy-policy">Privacy police</NuxtLink>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
.v-footer .v-card {
  background-color: #e8eff1;
  color: #6e6e6d;
}
</style>
