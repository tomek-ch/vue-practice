import { createRouter, createWebHistory } from "vue-router";
import Task from "../views/Task";
import New from "../views/New";
import List from "../views/List";

const routes = [
  {
    path: "/new",
    component: New,
  },
  {
    path: "/task/:id",
    component: Task,
  },
  {
    path: "/",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
