<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="task"
      :rules="[(v) => !!v || 'O campo tarefa é obrigatório']"
      label="Tarefa"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'O campo item é obrigatório']"
      label="Projeto"
      required
    ></v-select>

    <v-text-field
      type="date"
      label="Data"
      required
      :rules="[(v) => !!v || 'O campo data é obrigatório']"
    >
    </v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Salvar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset" :to="{ name: 'taskList' }">
      Cancelar
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,

    select: null,
    items: ["Estudos", "Trabalho", "Financeiro", "Outros"],
    // checkbox: false,
  }),

  methods: {},
};
</script>
