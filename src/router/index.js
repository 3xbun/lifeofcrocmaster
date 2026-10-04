import { createRouter, createWebHistory } from "vue-router";

import AdventuresView from "../views/AdventuresView.vue";
import AdventurePickerView from "../views/AdventurePickerView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "adventures",
      component: AdventuresView,
    },
    {
      path: "/adventures",
      redirect: "/",
    },
    {
      path: "/adventures/random",
      name: "adventure-picker",
      component: AdventurePickerView,
    },
    // Fallback: unknown routes go back to the catalogue
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
