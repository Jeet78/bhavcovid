import { createRouter, createWebHistory } from "vue-router";

import home from "../views/home.vue";
import homecare from "../views/homecare.vue";
import labs from "../views/labs.vue";
import food from "../views/food.vue";
import oxygen from "../views/oxygen.vue";
import equipments from "../views/equipments.vue";
import disclaimer from "../views/disclaimer.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/labs",
    name: "labs",
    component: labs,
  },
  {
    path: "/homecare",
    name: "homecare",
    component: homecare,
  },
  {
    path: "/food",
    name: "food",
    component: food,
  },
  {
    path: "/oxygen",
    name: "oxygen",
    component: oxygen,
  },
  {
    path: "/equipments",
    name: "equipments",
    component: equipments,
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    component: disclaimer,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});
export default router;
