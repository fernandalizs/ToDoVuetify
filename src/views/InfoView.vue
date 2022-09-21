<template>
  <v-main class="overflow-hidden mt-4">
    <v-container>
      <h2 class="mb-4">Resumo das tarefas</h2>
      <v-row no-gutters>
        <template v-for="item in data">
          <v-col :key="item.group" class="d-flex">
            <v-card class="pa-2 mb-4" min-width="300" outlined>
              <v-card-text>
                <h3>
                  {{ item.group }}
                  <v-chip class="ma-2"> {{ item.tasks }} </v-chip>
                </h3>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="item.percent"
                  color="pink"
                >
                  {{ item.percent.toFixed(1) }}
                </v-progress-circular>
              </v-card-text>
            </v-card>
          </v-col>
          <v-responsive
            v-if="item === 2"
            :key="`width-${item}`"
            width="100%"
          ></v-responsive>
        </template>
      </v-row>
      <div class="my-4 d-flex justify-end">
        <v-btn
          class="mr-3"
          rounded
          color="#5C6BC0"
          dark
          :to="{ name: 'taskList' }"
        >
          Ver todas tarefas
        </v-btn>
        <v-btn rounded color="#5C6BC0" dark :to="{ name: 'projectForm' }">
          Adicionar projeto
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>
<script>
import TasksApi from "@/api/tasks.api.js";
export default {
  data: () => {
    return {
      summary: {},
      data: [],
      value: "",
    };
  },
  methods: {
    getSummary() {
      TasksApi.summary().then((data) => {
        console.log("carregando 2", data);
        this.summary = data;
        for (const [key, value] of Object.entries(data)) {
          const totalTasks = value.pending + value.working + value.done;
          let obj = {
            group: key,
            tasks: totalTasks,
            percent: 100 - (value.pending / totalTasks) * 100,
          };
          this.data.push(obj);
        }
      });
    },
  },
  created() {
    console.log("carregando 1");
    this.getSummary();
  },
};
</script>
