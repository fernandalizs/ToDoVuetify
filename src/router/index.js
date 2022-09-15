import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import TaskListView from "@/views/TaskListView.vue";
import InfoView from "@/views/InfoView.vue";
import TaskFormView from "@/views/TaskFormView.vue";
import ProjectFormView from "@/views/ProjectFormView.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import PrivateLayout from "@/layouts/PrivateLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/tasks",
    component: PrivateLayout,
    children: [
      {
        path: "",
        name: "taskList",
        component: TaskListView,
      },
      {
        path: "/info",
        name: "info",
        component: InfoView,
      },
      {
        path: ":id",
        name: "taskForm",
        component: TaskFormView,
      },
      {
        path: "project-form",
        name: "projectForm",
        component: ProjectFormView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
