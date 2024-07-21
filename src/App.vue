<template>
  <v-app class="bg-grey-lighten-4 position-relative">
    <!-- Contenedor del video de fondo -->
    <div
      class="video-container position-fixed fill-height w-100 overflow-hidden top-0 left-0"
    >
      <video autoplay loop muted class="background-video w-100 h-100">
        <source src="/video/login.mp4" type="video/mp4" />
      </video>
      <div
        class="video-shadow top-0 left-0 w-100 h-100 position-absolute"
      ></div>
    </div>

    <!-- Barra de navegación -->
    <NavBar />

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

    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.background-video {
  object-fit: cover;
}

.video-shadow {
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
</style>
