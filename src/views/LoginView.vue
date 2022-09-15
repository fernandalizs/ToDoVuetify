<template>
  <v-main>
    <v-row class="indigo accent-1 d-flex justify-center">
      <v-icon size="180px" color="white "> mdi-format-list-checks</v-icon>
    </v-row>
    <v-container class="white mt-3" id="login-page ">
      <v-row class="d-flex justify-center mx-n16">
        <v-col cols="6" class="mx-0">
          <v-tabs
            fixed-tabs
            background-color="indigo accent-1"
            color="white"
            v-model="tabsForm"
          >
            <v-tab key="register"> Cadastrar </v-tab>
            <v-tab key="login"> Fazer Login </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-tabs-items v-model="tabsForm" cols="3">
            <v-tab-item>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Nome"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Senha"
                  type="password"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  :rules="[confirmPasswords]"
                  label="Confirmar Senha"
                  type="password"
                  required
                ></v-text-field>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'Você deve concordar para continuar!']"
                  label="Concorda com os termos de uso?"
                  required
                ></v-checkbox>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  :to="{ name: 'info' }"
                >
                  Cadastrar
                </v-btn>
              </v-form>
            </v-tab-item>
            <v-tab-item key="register">
              <v-form class="text-center white">
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>

                <v-btn
                  color="success"
                  class="justify-space-between"
                  :to="{ name: 'info' }"
                >
                  Entrar
                </v-btn>
              </v-form>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AuthApi from "@/api/auth.api.js";

export default {
  components: {},
  name: "AdminForm",
  data: () => ({
    tabsForm: null,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) =>
        (v && v.length <= 10) || "Nome deve conter no máximo 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O e-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    ],
    password: null,
    passwordRules: [
      (v) => !!v || "A senha é obrigatória",
      (v) =>
        (v && v.length >= 6) || "A senha deve conter no mínimo 6 caracteres",
    ],
    checkbox: false,
    confirmPassword: null,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    login() {
      this.loading = true;
      AuthApi.login(this.username, this.password);
    },
    confirmPasswords() {
      if (this.password != this.confirmPassword) {
        return "As senhas não coincidem";
      }
      return true;
    },
  },
};
</script>

<style scoped>
.entrar {
  color: white;
}
.col {
  padding: 0;
}
.altura {
  height: 100vh;
}
</style>
