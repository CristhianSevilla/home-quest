<template>
  <v-container>
    <h2
      class="text-center text-h5 my-2 font-weigth-bold text-light-green-darken-2 text-uppercase"
    >
      Panel de Administración
    </h2>
    <v-btn
      color="light-green-darken-2 font-weight-bold"
      variant="flat"
      :to="{ name: 'new-house' }"
    >
      nueva propiedad
    </v-btn>
  </v-container>
</template>
<script setup></script>
