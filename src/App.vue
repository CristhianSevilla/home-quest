<template>
  <v-app max-width="1200" class="mx-auto bg-grey-lighten-4">
    <!-- Barra de navegación -->
    <v-app-bar class="bg-white" elevation="0">
      <!-- Botón de menú para dispositivos móviles -->
      <v-app-bar-nav-icon @click="toggleDrawer" class="d-lg-none" />
      <v-navigation-drawer v-model="drawer" app temporary class="d-lg-none">
        <v-list>
          <v-list-item :to="{ name: 'home' }" @click="closeDrawer">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>HomeQuest</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'home' }" @click="closeDrawer">
            <v-list-item-content>
              <v-list-item-title>Catálogo</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'login' }" @click="closeDrawer">
            <v-list-item-content>
              <v-list-item-title>Iniciar sesión</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

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

      <v-spacer />

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
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer class="d-flex justify-center align-center bg-white" padless>
      <span class="text-grey-darken-1 text-center"
        >© {{ currentYear }} HomeQuest. Todos los derechos reservados.</span
      >
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

// Obtener el año actual
const currentYear = new Date().getFullYear();
const drawer = ref(false); // Estado del menú de navegación

// Función para alternar el estado del drawer
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Función para cerrar el drawer
const closeDrawer = () => {
  drawer.value = false;
};
</script>
