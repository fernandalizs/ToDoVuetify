<template>
  <v-main class="text-center">
    <v-row class="indigo accent-1 d-flex justify-center">
      <v-icon size="180px" color="white "> mdi-format-list-checks</v-icon>
    </v-row>
    <v-container>
      <h1>ToDo Vuetify</h1>
      <p>Aplicativo de organização de tarefas e produtividade com Vuetify!</p>
      <v-btn
        class="rounded-pill indigo accent-1 white--text"
        :to="{ name: 'login' }"
      >
        Começar</v-btn
      >
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>
<style scoped></style>
