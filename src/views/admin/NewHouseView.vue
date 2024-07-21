<template>
  <div class="background-image position-fixed top-0 left-0 w-100 h-100"></div>
  <div
    class="position-relative elevation-1 w-100 d-flex justify-center align-center pa-8"
  >
    <v-container>
      <v-card max-width="800" flat class="mx-auto py-5 px-10">
        <v-card-title
          class="text-h5 text-light-blue-darken-2 font-weight-bold"
          tag="h3"
        >
          Nueva Propiedad
        </v-card-title>
        <v-card-subtitle class="text-h7">
          Crea una nueva propiedad llenando el siguiente formulario
        </v-card-subtitle>
        <v-form class="mt-5">
          <v-text-field
            label="Título propiedad"
            placeholder="Ingresa el título de la propiedad"
            variant="outlined"
            color="light-blue-darken-2"
            density="compact"
            clearable
          />
          <v-file-input
            accept="image/jpeg"
            label="Imagen"
            placeholder="Ingresa el título propiedad"
            variant="outlined"
            color="light-blue-darken-2"
            density="compact"
            prepend-icon="mdi-camera"
            clearable
          />
          <v-text-field
            label="Precio"
            placeholder="Ingresa el precio de la propiedad"
            variant="outlined"
            class="mb-3"
            color="light-blue-darken-2"
            density="compact"
            clearable
          />
          <v-row>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                label="Habitaciones"
                variant="outlined"
                density="compact"
                color="light-blue-darken-2"
                clearable
                :items="items"
              />
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                label="Baños"
                variant="outlined"
                density="compact"
                color="light-blue-darken-2"
                clearable
                :items="items"
              />
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                label="Lugares estacionamiento"
                variant="outlined"
                density="compact"
                color="light-blue-darken-2"
                class="mb-3"
                clearable
                :items="items"
              />
            </v-col>
          </v-row>
          <v-textarea
            variant="outlined"
            density="compact"
            color="light-blue-darken-2"
            label="Descripción"
            clearable
          />
          <v-checkbox
            density="compact"
            label="Alberca"
            color="light-blue-darken-2"
          />
          <v-btn
            size="large"
            color="light-blue-darken-2"
            type="submit"
            variant="elevated"
            block
            @click="submit"
          >
            Agregar propiedad
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
const items = [1, 2, 3, 4, 5];
</script>

<style scoped>
.background-image {
  background-image: url("/img/new-house.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
