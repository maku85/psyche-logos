<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <div class="py-8">
              <logo class="header-logo"></logo>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list>
        <v-list-item
          v-for="({ icon, text, link }, i) in items"
          :key="i"
          link
          :to="link"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <nav id="navigation">
      <div class="secondary-header hidden-sm-and-down">
        <v-container>
          <v-row class="d-flex align-center">
            <div>921-124-9220 | info@mysite.com</div>
            <v-spacer></v-spacer>
            <socials></socials>
          </v-row>
        </v-container>
      </div>

      <v-toolbar flat height="100px">
        <v-container class="d-flex align-center">
          <div class="header-logo-wrap">
            <logo class="header-logo"></logo>
          </div>
          <v-spacer />

          <div class="hidden-sm-and-down">
            <NuxtLink
              v-for="({ text, link }, i) in items"
              :key="i"
              :to="link"
              class="menu-item mr-4"
            >
              {{ text }}
            </NuxtLink>
          </div>
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
            @click.stop="drawer = !drawer"
          />
        </v-container>
      </v-toolbar>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-home-outline', text: 'Home', link: '/' },
      { icon: 'mdi-information-outline', text: 'About', link: '/about' },
      { icon: 'mdi-ballot-outline', text: 'Services', link: '/services' },
      { icon: 'mdi-email-outline', text: 'Contacts', link: '/contact' },
    ],
  }),
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })

    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navigation').style.top = '0'
      } else {
        document.getElementById('navigation').style.top = '-120px'
      }
      prevScrollpos = currentScrollPos
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  background: #a37b73 !important;
  color: #f8f7ee !important;
}

// #cb997e // box 1
// #b7b7a4 // box 2

// #4c3935 // box text color

#navigation {
  position: fixed;
  width: 100%;
  color: #5f5f5f;
  z-index: 6;

  .secondary-header {
    background: rgba(243, 235, 230, 1);
    padding: 6px 0;
    font-size: 14px;
  }

  .container {
    height: 100%;

    .header-logo-wrap,
    .header-logo {
      height: 100%;
      max-width: 90%;
    }

    .menu-item {
      font-size: 15px;
      text-decoration: none;
      padding: 25px 0;
      color: #5f5f5f;

      &.nuxt-link-exact-active {
        font-weight: bold;
        position: relative;
        color: #a67355;

        &:after {
          content: '';
          position: absolute;
          display: block;
          bottom: 0;
          left: 0;
          width: 100%;
          border-top: 4px solid;
          transition: transform 0.3s ease, opacity 0.5s ease;
        }
      }
    }
  }
}
</style>
