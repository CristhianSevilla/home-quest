import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";

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
      meta: {
        requiresAuth: true,
      },
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

//Guard de navegación
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
  if (requiresAuth) {
    //Comprobar que el usuario este autenticado
    try {
      await authenticateUser();
      next();
    } catch (error) {
      console.log(error);
      next({ name: "login" });
    }
  } else {
    //La vista no esta protegida por lo tanto mostrar la vista
    next();
  }
});

function authenticateUser() {
  const auth = useFirebaseAuth();
  return new Promise((resolve, reject) => {
    //unsuscribe sirve para escuchar una sola vez y despues ya no manda a llamar la función
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      unsuscribe();
      if (user) {
        resolve();
      } else {
        reject();
      }
    });
  });
}
export default router;
