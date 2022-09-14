<template>
  <v-footer dark padless fixed color="indigo accent-1">
    <v-card flat tile class="indigo accent-1 white--text text-center mx-auto">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        Fernanda Liz — {{ new Date().getFullYear() }} — Vuetify
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-github", link: "https://github.com/fernandalizs" },
      {
        icon: "mdi-slack",
        link: "https://buserbrasil.slack.com/app_redirect?channel=U03A72XU4RG",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/fernanda-liz-silva/",
      },
      { icon: "mdi-instagram", link: "https://www.instagram.com/fe.lizs/" },
    ],
  }),
};
</script>
<style scoped></style>
