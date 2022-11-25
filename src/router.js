import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import MultiplicationTable from "./components/MultiplicationTable.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/multiply", component: MultiplicationTable },
  ],
});
export default router;
