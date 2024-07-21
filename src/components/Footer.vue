<template>
  <v-footer
    :class="[
      'd-flex justify-center align-center absolute bottom-0 left-0 w-100 text-h6',
      isLoginRoute ? 'bg-transparent' : 'bg-white',
    ]"
  >
    <span
      :class="[
        'text-center',
        isLoginRoute ? 'text-white' : 'text-grey-darken-2',
      ]"
    >
      © {{ currentYear }} HomeQuest. Todos los derechos reservados.
    </span>
  </v-footer>
</template>

<script setup>
const props = defineProps({
  isLoginRoute: {
    type: Boolean,
    default: false,
  },
});

const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Agrega estilos personalizados si es necesario */
</style>
