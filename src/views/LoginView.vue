<template>
  <v-main>
    <v-snackbar
      v-model="snackbar.show"
      :value="true"
      color="red"
      timeout="2000"
      absolute
      left
      top
    >
      <h3 style="font-size: 20 px">
        {{ snackbar.message }}
      </h3>
    </v-snackbar>
    <v-row class="indigo accent-1 d-flex justify-center">
      <v-icon size="100px" color="white "> mdi-format-list-checks</v-icon>
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
                  :rules="nameRules"
                  label="Nome"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="username"
                  label="Usuário"
                  :counter="15"
                  required
                  :rules="usernameRules"
                  v-on:keyup.enter="login"
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
                  :rules="[required, min6, matchingPasswords]"
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
                  :loading="loading"
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="signup"
                >
                  Cadastrar
                </v-btn>
              </v-form>
            </v-tab-item>
            <v-tab-item key="register">
              <v-form class="text-center white">
                <v-text-field
                  v-model="username"
                  label="Usuário"
                  required
                  :rules="usernameRules"
                  v-on:keyup.enter="login"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                  :rules="passwordRules"
                  required
                  v-on:keyup.enter="login"
                ></v-text-field>

                <v-btn
                  :loading="loading"
                  :disabled="!validLogin"
                  color="success"
                  class="justify-space-between"
                  @click="login"
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
  data: () => ({
    tabsForm: null,
    valid: true,
    validLogin: true,
    loading: false,
    snackbar: {
      show: false,
      message: "",
    },
    name: "",
    nameRules: [(v) => !!v || "Nome é obrigatório"],
    username: "",
    usernameRules: [
      (v) => !!v || "Usuário é obrigatório",
      (v) =>
        (v && v.length <= 15) || "Usuário deve conter no máximo 15 caracteres",
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
    confirmPassword: "",
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    login() {
      this.loading = true;
      AuthApi.login(this.username, this.password)
        .then((user) => {
          console.log("usuário logado:", user);
          this.saveLoggedUser(user);
          this.$router.push({ name: "info" });
        })
        .catch((error) => {
          console.log("falha no login:", error);
          this.snackbar.message = "Usuário ou senha inválidos!";
          this.snackbar.show = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    signup() {
      this.loading = true;
      AuthApi.signup(this.name, this.username, this.email, this.password)
        .then((user) => {
          console.log("usuário cadastrado:", user);
          this.saveLoggedUser(user);
          this.$router.push({ name: "info" });
        })
        .catch((error) => {
          console.log("falha no cadastro:", error);
          this.snackbar.message =
            "Falha ao cadastrar novo usuário. Tente novamente!";
          this.snackbar.show = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //salvar usuário logado no localstorage
    saveLoggedUser(user) {
      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("loggedUser", user.id);
      window.localStorage.setItem("loggedUserToken", user.token);
    },
    matchingPasswords() {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        return "As senhas não coincidem";
      }
    },
    required() {
      if (this.confirmPassword) {
        return true;
      } else {
        return "A confirmação de senha é obrigatória.";
      }
    },
    min6() {
      if (this.confirmPassword.length >= 6) {
        return true;
      } else {
        return "A senha deve conter no mínimo 6 caracteres";
      }
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
