<template>
  <span>
    <v-btn
      v-for="(icon, i) in icons"
      :key="i"
      :href="icon.link"
      target="_blank"
      class="social-item"
      icon
    >
      <v-icon>{{ icon.text }}</v-icon>
    </v-btn>
  </span>
</template>

<script>
export default {
  name: 'SocialsSecion',
  data: () => ({
    icons: [
      {
        text: 'mdi-facebook',
        link: '',
      },
      {
        text: 'mdi-linkedin',
        link: '',
      },
      {
        text: 'mdi-instagram',
        link: '',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.social-item {
  color: rgba(166, 115, 85, 0.7) !important;
}
</style>
