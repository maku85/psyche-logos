<template>
  <div>
    <v-navigation-drawer v-model="drawer" :width="325" app temporary>
      <div class="drawer-content d-flex flex-column">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <div class="pt-6 pb-4 text-center">
                <logo class="header-logo"></logo>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list class="flex-grow-1">
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

        <v-divider />

        <v-list>
          <v-list-item three-line class="contact-box">
            <v-list-item-icon class="my-auto">
              <v-icon> mdi-at</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ contactTitle1 }}</v-list-item-title>
              <v-list-item-subtitle>
                <strong>{{ phoneLabel }}:</strong> {{ phone }}<br />
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <strong>Email:</strong> {{ email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line class="contact-box">
            <v-list-item-icon class="my-auto">
              <v-icon> mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ contactTitle2 }}</v-list-item-title>
              <v-list-item-subtitle v-html="address"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list-item>
            <v-list-item-content class="text-center">
              <socials></socials>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <nav id="navigation">
      <div class="secondary-header hidden-sm-and-down">
        <v-container>
          <v-row class="d-flex align-center">
            <div>
              <a :href="`tel:${phoneValue}`">{{ phone }}</a> |
              <a :href="`mailto:${email}`">{{ email }}</a>
            </div>
            <v-spacer></v-spacer>
            <socials></socials>
          </v-row>
        </v-container>
      </div>

      <v-toolbar flat height="100px">
        <v-container class="d-flex align-center">
          <div class="header-logo-wrap">
            <NuxtLink to="/">
              <logo class="header-logo"></logo>
            </NuxtLink>
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
      {
        icon: 'mdi-home-outline',
        text: process.env.NAV_HOME_LABEL || 'Home',
        link: '/',
      },
      {
        icon: 'mdi-information-outline',
        text: process.env.NAV_ABOUT_LABEL || 'About',
        link: '/about',
      },
      {
        icon: 'mdi-ballot-outline',
        text: process.env.NAV_SERVICES_LABEL || 'Services',
        link: '/services',
      },
      {
        icon: 'mdi-email-outline',
        text: process.env.NAV_CONTACTS_LABEL || 'Contacts',
        link: '#contact',
      },
    ],
    contactTitle1: process.env.CONTACT_TITLE_1 || 'Let’s Talk',
    contactTitle2: process.env.CONTACT_TITLE_2 || 'Visiting here?',
    phoneLabel: process.env.PHONE_LABEL || 'Phone',
    phone: process.env.PHONE_LABEL_VALUE || '123-456-7890',
    phoneValue: process.env.PHONE_VALUE || '123-456-7890',
    email: process.env.EMAIL_VALUE || 'hi@restedminds.com',
    address:
      process.env.ADDRESS_VALUE ||
      '1870 Alpaca Way Irvine, New York, 92614. US',
  }),
  mounted() {
    // this.onResize()
    // window.addEventListener('resize', this.onResize, { passive: true })

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
  background: #fff;
}

// #cb997e // box 1
// #b7b7a4 // box 2

// #4c3935 // box text color

.drawer-content {
  height: 100%;

  .header-logo {
    max-width: 200px;
  }

  .contact-box i {
    color: #a47355;
    font-size: 32px;
  }
}

#navigation {
  position: fixed;
  width: 100%;
  color: #5f5f5f;
  z-index: 6;

  .secondary-header {
    background: rgba(243, 235, 230, 1);
    padding: 6px 0;
    font-size: 14px;

    a {
      color: #5f5f5f;
      text-decoration: none;
    }
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
