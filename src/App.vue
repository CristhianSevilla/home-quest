<template>
  <v-app class="bg-grey-lighten-4 position-relative">
    <!-- Barra de navegación -->
    <NavBar />
    <div
      class="d-flex justify-center align-center fill-height w-100 position-relative"
    >
      <div class="position-relative fill-height w-100 overflow-hidden">
        <video
          autoplay
          loop
          muted
          class="background-video top-0 left-0 w-100 h-100 position-absolute"
        >
          <source src="/video/login.mp4" type="video/mp4" />
        </video>
        <div
          class="video-shadow top-0 left-0 w-100 h-100 position-absolute"
        ></div>
        <v-main>
          <v-container>
            <RouterView />
          </v-container>
        </v-main>
      </div>
    </div>
    <v-footer
      class="d-flex justify-center align-center bg-transparent abosolute bottom-0 left-0 w-100 position-absolute"
    >
      <span class="text-white text-center">
        © {{ currentYear }} HomeQuest. Todos los derechos reservados.
      </span>
    </v-footer>
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";

// Obtener el año actual
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.background-video {
  object-fit: cover;
}
.video-shadow {
  background: rgba(255, 255, 255, 0.1);
}
</style>
