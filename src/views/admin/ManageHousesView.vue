<template>
  <v-container> </v-container>
</template>
<script setup>
import useProperties from "@/composables/useProperties";

const { propertiesCollection } = useProperties();

console.log(propertiesCollection);
</script>
