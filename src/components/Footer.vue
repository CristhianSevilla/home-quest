<template>
  <v-footer
    class="d-flex justify-center align-center bg-transparent absolute bottom-0 left-0 w-100"
  >
    <span class="text-white text-center">
      © {{ currentYear }} HomeQuest. Todos los derechos reservados.
    </span>
  </v-footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
