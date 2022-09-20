<template>
  <div>
    <v-app-bar fixed color="#8C9EFF" elevate-on-scroll>
      <v-app-bar-nav-icon
        color="white"
        class="indigo accent-1"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">ToDo List</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar color="#536DFE">
            <span class="white--text text-h5">{{
              getLoggedUser.name.at(0)
            }}</span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ getLoggedUser.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="{ name: item.routes }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import AuthApi from "@/api/auth.api.js";

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", routes: "home" },
        { title: "Resumo", icon: "mdi-view-dashboard", routes: "info" },
        {
          title: "Adicionar Projeto",
          icon: "mdi-folder-plus",
          routes: "projectForm",
        },
        {
          title: "Tarefas",
          icon: "mdi-format-list-checkbox",
          routes: "taskList",
        },
        {
          title: "Adicionar Tarefa",
          icon: "mdi-playlist-plus",
          routes: "taskForm",
        },
      ],
    };
  },
  computed: {
    getLoggedUser() {
      const userStr = localStorage.getItem("user");
      const user = JSON.parse(userStr);
      return user;
    },
  },
};
</script>
