<template>
  <v-container>
    <v-card class="mx-auto mt-10">
      <v-list>
        <v-list-item
          v-for="property in propertiesCollection"
          :key="property.id"
          border
        >
          <template #prepend>
            <v-list-item-media :start="true">
              <img
                :src="property.image"
                alt="Imagen de la propiedad"
                width="200"
              />
            </v-list-item-media>
          </template>
          <v-list-item-title>{{ property.title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            formatPrice(property.price)
          }}</v-list-item-subtitle>
          <template #append>
            <v-btn color="info" flat class="mr-2"> Editar </v-btn>
            <v-btn color="error" flat> Eliminar </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<script setup>
import useProperties from "@/composables/useProperties";

const { propertiesCollection, formatPrice } = useProperties();
</script>
