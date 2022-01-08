<template>
  <div>
    <v-btn
      v-for="(icon, i) in icons"
      :key="i"
      :href="icon.link"
      target="_blank"
      icon
    >
      <v-icon>{{ icon.text }}</v-icon>
    </v-btn>
  </div>
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
        text: 'mdi-twitter',
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