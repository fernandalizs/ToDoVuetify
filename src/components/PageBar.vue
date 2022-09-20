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
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
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
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", to: { name: "home" } },
        { title: "Resumo", icon: "mdi-view-dashboard", to: { name: "info" } },
        {
          title: "Adicionar Projeto",
          icon: "mdi-folder-plus",
          to: { name: "projectForm" },
        },
      ],
    };
  },
};
</script>
