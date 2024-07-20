import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/administration",
      name: "admin",
      component: () => import("../views/admin/AdminLayout.vue"),
      children: [
        {
          path: "houses",
          name: "manage-houses",
          component: () => import("../views/admin/ManageHousesView.vue"),
        },
        {
          path: "new-house",
          name: "new-house",
          component: () => import("../views/admin/NewHouseView.vue"),
        },
        {
          path: "edit-house/:id",
          name: "edit-house",
          component: () => import("../views/admin/EditHouseView.vue"),
          props: true,
        },
      ],
    },
  ],
});

export default router;
