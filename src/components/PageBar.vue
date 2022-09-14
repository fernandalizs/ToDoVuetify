<template>
  <div padless fixed class="overflow-hidden">
    <v-app-bar
      absolute
      color="#8C9EFF"
      dark
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>ToDoList</v-app-bar-title>

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
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="200"
    >
    </v-sheet>
  </div>
</template>
