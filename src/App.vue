<template>
  <v-app class="bg-grey-lighten-4 position-relative">
    <!-- Video de fondo (solo en la ruta /login) -->
    <BackgroundVideo v-if="isLoginRoute" />
    <!-- Barra de navegación -->
    <NavBar />
    <!-- Contenido -->
    <div
      class="d-flex justify-center align-center fill-height w-100 position-relative"
    >
      <div class="position-relative fill-height w-100 overflow-hidden">
        <v-main>
          <v-container>
            <RouterView />
          </v-container>
        </v-main>
      </div>
    </div>
    <!-- Footer -->
    <Footer :isLoginRoute="isLoginRoute" />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import BackgroundVideo from "./components/BackgroundVideo.vue";

const route = useRoute();
const isLoginRoute = computed(() => route.path === "/login");
</script>
