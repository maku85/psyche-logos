<script setup lang="ts">
const drawer = ref()
const items = ref([
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
])
const contactTitle1 = ref(process.env.CONTACT_TITLE_1 || 'Let’s Talk')
const contactTitle2 = ref(process.env.CONTACT_TITLE_2 || 'Visiting here?')
const phoneLabel = ref(process.env.PHONE_LABEL || 'Phone')
const phone = ref(process.env.PHONE_LABEL_VALUE || '123-456-7890')
const phoneValue = ref(process.env.PHONE_VALUE || '123-456-7890')
const email = ref(process.env.EMAIL_VALUE || 'hi@restedminds.com')
const address = ref(
  process.env.ADDRESS_VALUE || '1870 Alpaca Way Irvine, New York, 92614. US',
)
</script>

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

    <v-app-bar
      id="navigation"
      :elevation="0"
      scroll-behavior="hide"
      height="100px"
    >
      <v-toolbar height="40" extension-height="80">
        <v-container class="pa-2 secondary-header hidden-sm-and-down" fluid>
          <v-row class="px-4 d-flex align-center">
            <div>
              <a :href="`tel:${phoneValue}`">{{ phone }}</a> |
              <a :href="`mailto:${email}`">{{ email }}</a>
            </div>
            <v-spacer></v-spacer>
            <socials></socials>
          </v-row>
        </v-container>

        <template v-slot:extension>
          <v-container class="primary-header">
            <v-row class="d-flex align-center justify-center">
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
            </v-row>
          </v-container>
        </template>
      </v-toolbar>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
.drawer-content {
  height: 100%;

  .header-logo {
    max-width: 200px;
  }

  .contact-box i {
    color: var(--accent);
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

  .primary-header {
    .header-logo-wrap,
    .header-logo {
      height: 100%;
      max-width: 90%;
      min-width: 200px;
    }

    .menu-item {
      font-size: 15px;
      text-decoration: none;
      padding: 25px 0;
      color: #5f5f5f;

      &.nuxt-link-exact-active {
        font-weight: bold;
        position: relative;
        color: var(--accent);

        &:after {
          content: '';
          position: absolute;
          display: block;
          bottom: 0;
          left: 0;
          width: 100%;
          border-top: 4px solid;
          transition:
            transform 0.3s ease,
            opacity 0.5s ease;
        }
      }
    }
  }
}
</style>
