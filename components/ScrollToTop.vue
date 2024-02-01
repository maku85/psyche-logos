<template>
  <v-fab-transition>
    <v-btn
      v-show="scY > 300"
      id="page-top"
      color="accent"
      rounded
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    scTimer: 0,
    scY: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
#page-top {
  position: fixed;
  height: 40px;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
