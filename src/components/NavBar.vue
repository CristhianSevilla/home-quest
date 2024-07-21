<template>
  <v-app-bar
    elevation="0"
    :class="isLoginRoute ? 'bg-transparent' : 'bg-white'"
  >
    <!-- Menú para dispositivos móviles -->
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          :class="[
            'text-h6 d-lg-none',
            isLoginRoute ? 'text-white' : 'text-blue-lighten-2',
          ]"
          prepend-icon="mdi-home"
        >
          <template v-slot:prepend>
            <v-icon :color="isLoginRoute ? 'white' : 'blue-lighten-2'"></v-icon>
          </template>
          HomeQuest
        </v-btn>
      </template>

      <v-card
        min-width="350"
        :class="
          isLoginRoute
            ? 'bg-transparent text-white'
            : 'bg-white text-blue-lighten-2'
        "
      >
        <v-list
          v-if="isAuth"
          :class="isLoginRoute ? 'bg-transparent' : 'bg-white'"
        >
          <v-list-item
            :class="isLoginRoute ? 'hover-effect' : 'text-blue-lighten-1'"
            @click="navigateTo('manage-houses')"
          >
            Administración
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            :class="isLoginRoute ? 'hover-effect' : 'text-blue-lighten-1'"
            @click="logout"
          >
            Cerrar sesión
          </v-list-item>
        </v-list>
        <v-list v-else :class="isLoginRoute ? 'bg-transparent' : 'bg-white'">
          <v-list-item
            :class="isLoginRoute ? 'hover-effect' : 'text-blue-lighten-1'"
            @click="navigateTo('home')"
          >
            Inicio
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            :class="isLoginRoute ? 'hover-effect' : 'text-blue-lighten-1'"
            @click="navigateTo('login')"
          >
            Iniciar sesión
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-menu>
    <!-- Contenido de la barra de navegación para pantallas grandes -->
    <v-app-bar-title class="d-none d-lg-flex">
      <v-btn
        :class="[
          'text-h6',
          isLoginRoute ? 'text-white' : 'text-blue-lighten-2',
        ]"
        prepend-icon="mdi-home"
        :to="{ name: 'home' }"
      >
        <template v-slot:prepend>
          <v-icon :color="isLoginRoute ? 'white' : 'grey-darken-2'"></v-icon>
        </template>
        HomeQuest
      </v-btn>
    </v-app-bar-title>
    <template #append>
      <div class="d-flex" v-if="isAuth">
        <v-btn
          :class="[
            'text-body-1 d-none d-lg-flex',
            isLoginRoute ? 'text-white' : 'text-blue-lighten-2',
          ]"
          :to="{ name: 'manage-houses' }"
        >
          Administración
        </v-btn>
        <v-btn
          :class="[
            'text-body-1 d-none d-lg-flex',
            isLoginRoute ? 'text-white' : 'text-blue-lighten-2',
          ]"
          @click="logout"
        >
          Cerrar sesión
        </v-btn>
      </div>
      <div class="d-flex" v-else>
        <v-btn
          :class="[
            'text-body-1 d-none d-lg-flex',
            isLoginRoute ? 'text-white' : 'text-blue-lighten-2',
          ]"
          :to="{ name: 'home' }"
        >
          Inicio
        </v-btn>
        <v-btn
          :class="[
            'text-body-1 d-none d-lg-flex',
            isLoginRoute ? 'text-white' : 'text-blue-lighten-2',
          ]"
          :to="{ name: 'login' }"
        >
          Iniciar sesión
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const props = defineProps({
  isLoginRoute: {
    type: Boolean,
    default: false,
  },
});

const auth = useAuthStore();
const { isAuth } = storeToRefs(auth);
const router = useRouter();
const menu = ref(false);

// Función para cerrar el menú y navegar
const navigateTo = (routeName) => {
  router.push({ name: routeName });
  menu.value = false; // Cierra el menú después de la navegación
};
const logout = () => {
  auth.logout();
  menu.value = false;
};
</script>

<style scoped>
.hover-effect:hover {
  color: black;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
