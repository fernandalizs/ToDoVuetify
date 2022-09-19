<template>
  <v-main class="overflow-hidden mt-4">
    <v-container>
      <v-row>
        <v-col class="pa-1" cols="12" v-for="task in tasks" :key="task.id">
          <v-card>
            <v-card-text>
              <div>#{{ task.id }}</div>
              <p class="ma-0 pa-0 text-h5 text--primary">{{ task.title }}</p>
              <p>{{ task.project }}</p>
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-btn
                    x-small
                    icon
                    color="blue"
                    :to="{ name: 'taskForm', params: { id: task.id } }"
                    ><v-icon>fas fa-pen fa-xs</v-icon></v-btn
                  >
                  <v-btn x-small icon color="red" @click="deleteTask(task.id)"
                    ><v-icon>far fa-trash-alt fa-xs</v-icon></v-btn
                  >
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <div class="my-2">
          <v-btn color="#5C6BC0" fab dark :to="{ name: 'taskForm' }">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TaskApi from "@/api/tasks.api";
export default {
  data: () => {
    return {
      tasks: [],
    };
  },
  methods: {
    getTasks() {
      TaskApi.getTasks().then((data) => {
        this.tasks = data;
      });
    },
    deleteTask(taskId) {
      TaskApi.removeTask(taskId).then(() => {
        this.getTasks();
      });
    },
  },
  created() {
    this.getTasks();
  },
};
</script>
