<template>
  <v-app>
    <app-header></app-header>

    <v-content style="margin-top: 176px" transition="slide-x-transition">
      <v-main>
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
