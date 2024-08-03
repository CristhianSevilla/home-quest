<template>
  <div
    class="bg-light-green-lighten-4 position-fixed top-0 left-0 w-100 h-100"
  ></div>
  <div class="position-relative w-100 d-flex justify-center align-center">
    <v-container class="pa-4 pa-xl-10">
      <v-card flat class="mx-auto pa-4 pa-md-8 pa-xl-10">
        <v-card-title
          class="text-h5 text-light-green-darken-2 font-weight-bold"
          tag="h3"
        >
          Administración de Propiedades
        </v-card-title>
        <p class="text-h6 px-4 text-body-1 text-grey-darken-1">
          Gestione y administre todas sus propiedades. Visualice, edite y
          elimine cada una de manera eficiente.
        </p>

        <v-row :cols="12" class="mt-5" align="start" justify="center">
          <v-col
            v-for="property in propertiesCollection"
            :key="property.id"
            cols="12"
            md="4"
            xl="3"
            class="d-flex align-start"
          >
            <v-card
              class="mx-auto my-3 card-equal-height"
              max-width="344"
              border
            >
              <v-img
                :src="property.image"
                alt="Imagen de la propiedad"
                height="200px"
                class="object-fit-cover"
                cover
              />
              <v-card-title>{{ property.title }}</v-card-title>
              <v-card-subtitle
                class="text-light-green-darken-4 font-weight-bold"
              >
                {{ formatPrice(property.price) }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="success"
                  elevation="2"
                  flat
                  class="mr-2"
                  :to="{ name: 'edit-house', params: { id: property.id } }"
                  >Editar</v-btn
                >
                <v-btn color="error" elevation="2">Eliminar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import useProperties from "@/composables/useProperties";

const { propertiesCollection, formatPrice } = useProperties();
</script>

<style scoped>
.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-equal-height .v-card-title,
.card-equal-height .v-card-subtitle,
.card-equal-height .v-card-actions {
  flex: 1;
}
</style>
