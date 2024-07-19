<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar class="bg-white" elevation="0">
      <!-- Menú para dispositivos móviles -->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            class="text-blue-darken-2 text-none text-h6 d-lg-none"
            prepend-icon="mdi-home"
          >
            <template v-slot:prepend>
              <v-icon color="grey-darken-2"></v-icon>
            </template>
            HomeQuest
          </v-btn>
        </template>

        <v-card min-width="350">
          <v-list>
            <v-list-item @click="navigateTo('home')">Catálogo</v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="navigateTo('login')"
              >Iniciar sesión</v-list-item
            >
          </v-list>
          <v-divider></v-divider>
        </v-card>
      </v-menu>
      <!-- Contenido de la barra de navegación para pantallas grandes -->
      <v-app-bar-title class="d-none d-lg-flex">
        <v-btn
          class="text-blue-darken-2 text-none text-h6"
          prepend-icon="mdi-home"
          :to="{ name: 'home' }"
        >
          <template v-slot:prepend>
            <v-icon color="grey-darken-2"></v-icon>
          </template>
          HomeQuest
        </v-btn>
      </v-app-bar-title>
      <template #append>
        <v-btn
          class="text-blue-darken-2 text-none text-body-1 d-none d-lg-flex"
          :to="{ name: 'home' }"
        >
          Catálogo
        </v-btn>
        <v-btn
          class="text-blue-darken-2 text-none text-body-1 d-none d-lg-flex"
          :to="{ name: 'login' }"
        >
          Iniciar sesión
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>

    <v-footer class="d-flex justify-center align-center bg-white" padless>
      <span class="text-grey-darken-1 text-center">
        © {{ currentYear }} HomeQuest. Todos los derechos reservados.
      </span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menu = ref(false);

// Obtener el año actual
const currentYear = new Date().getFullYear();
// Función para cerrar el menú y navegar
const navigateTo = (routeName) => {
  router.push({ name: routeName });
  menu.value = false; // Cierra el menú después de la navegación
};
</script>
