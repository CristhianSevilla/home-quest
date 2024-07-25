<template>
  <v-app-bar app elevation="0" class="bg-light-green-darken-1">
    <!-- Menú para dispositivos móviles -->
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="d-flex d-md-none">HomeQuest</v-toolbar-title>
    <v-app-bar-title class="d-none d-md-flex">
      <v-btn
        class="text-h5 text-withe"
        prepend-icon="mdi-home"
        :to="{ name: 'home' }"
      >
        <template v-slot:prepend>
          <v-icon color="withe"></v-icon>
        </template>
        HomeQuest
      </v-btn>
    </v-app-bar-title>
    <template #append>
      <div class="d-flex" v-if="isAuth">
        <v-btn
          class="d-none d-md-flex text-withe"
          append-icon="mdi-wrench"
          :to="{ name: 'manage-houses' }"
        >
          Administración
        </v-btn>
        <v-btn
          append-icon="mdi-logout"
          class="d-none d-md-flex text-withe"
          @click="logout"
        >
          Cerrar sesión
        </v-btn>
      </div>
      <div class="d-flex" v-else>
        <v-btn
          class="d-none d-md-flex text-withe text-h6"
          :to="{ name: 'home' }"
        >
          Inicio
        </v-btn>
        <v-btn
          class="d-none d-md-flex text-withe text-h6"
          :to="{ name: 'login' }"
        >
          Iniciar sesión
        </v-btn>
      </div>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    app
    v-model="drawer"
    class="d-md-none bg-green-lighten-5"
  >
    <v-list class="d-md-none">
      <v-list-item
        prepend-icon="mdi-home"
        title="Inicio"
        @click="navigateTo('home')"
      ></v-list-item>
      <v-divider></v-divider>

      <v-list-item
        prepend-icon="mdi-wrench"
        title="Administración"
        @click="isAuth ? navigateTo('manage-houses') : navigateTo('login')"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-4">
        <v-btn
          class="mt-3"
          size="large"
          color="light-green-darken-2"
          variant="elevated"
          block
          :prepend-icon="isAuth ? 'mdi-logout' : 'mdi-login'"
          @click="isAuth ? logout() : navigateTo('login')"
        >
          {{ isAuth ? "Cerrar sesión" : "Iniciar sesión" }}
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const auth = useAuthStore();
const { isAuth } = storeToRefs(auth);
const router = useRouter();
const drawer = ref(false);

// Función para cerrar el menú y navegar
const navigateTo = (routeName) => {
  router.push({ name: routeName });
  drawer.value = false; // Cierra el menú después de la navegación
};
const logout = () => {
  auth.logout();
  drawer.value = false;
};
</script>

<style scoped></style>
