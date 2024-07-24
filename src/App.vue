<template>
  <v-app class="bg-green-lighten-5 position-relative">
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
          <RouterView />
        </v-main>
      </div>
    </div>
    <!-- Footer -->
    <!-- <Footer :isLoginRoute="isLoginRoute" /> -->
    <spinner v-if="showSpinner" />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import BackgroundVideo from "./components/BackgroundVideo.vue";
import Spinner from "./components/Spinner.vue";
import { usePropertiesStore } from "@/stores/properties";

const propertiesStore = usePropertiesStore();
const route = useRoute();
const isLoginRoute = computed(() => route.path === "/login");
const showSpinner = computed(() => propertiesStore.spinner);
</script>
