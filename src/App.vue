<template>
  <v-app class="bg-grey-lighten-4 position-relative">
    <!-- Video de fondo -->
    <BackgroundVideo />
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
    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import BackgroundVideo from "./components/BackgroundVideo.vue";
</script>
