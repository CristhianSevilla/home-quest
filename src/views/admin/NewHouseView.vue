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
            class="mb-2"
            v-model="title.value.value"
            :error-messages="title.errorMessage.value"
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
            class="mb-2"
            v-model="image.value.value"
            :error-messages="image.errorMessage.value"
          />
          <v-text-field
            label="Precio"
            placeholder="Ingresa el precio de la propiedad"
            variant="outlined"
            class="mb-5"
            color="light-blue-darken-2"
            density="compact"
            clearable
            v-model="price.value.value"
            :error-messages="price.errorMessage.value"
          />
          <v-row>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                label="Habitaciones"
                variant="outlined"
                density="compact"
                color="light-blue-darken-2"
                clearable
                class="mb-2"
                :items="items"
                v-model="bedrooms.value.value"
                :error-messages="bedrooms.errorMessage.value"
              />
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                label="Baños"
                variant="outlined"
                density="compact"
                color="light-blue-darken-2"
                clearable
                class="mb-2"
                :items="items"
                v-model="bathrooms.value.value"
                :error-messages="bathrooms.errorMessage.value"
              />
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                label="Lugares estacionamiento"
                variant="outlined"
                density="compact"
                color="light-blue-darken-2"
                class="mb-5"
                clearable
                :items="items"
                v-model="parkingSpaces.value.value"
                :error-messages="parkingSpaces.errorMessage.value"
              />
            </v-col>
          </v-row>
          <v-textarea
            variant="outlined"
            density="compact"
            color="light-blue-darken-2"
            label="Descripción"
            clearable
            v-model="description.value.value"
            :error-messages="description.errorMessage.value"
          />
          <v-row>
            <v-col class="py-0">
              <v-checkbox
                density="compact"
                label="Alberca"
                color="light-blue-darken-2"
                v-model="pool.value.value"
              />
            </v-col>
            <v-col class="py-0">
              <v-checkbox
                density="compact"
                label="Jardin/Patio"
                color="light-blue-darken-2"
                v-model="garden.value.value"
              />
            </v-col>
          </v-row>
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
import { useForm, useField } from "vee-validate";
import { validationSchema, imageSchema } from "@/validation/propertySchema";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useRouter } from "vue-router";
import { usePropertiesStore } from "@/stores/properties";

const items = [1, 2, 3, 4, 5];

const propertiesStore = usePropertiesStore();
const router = useRouter();
const db = useFirestore();

const { handleSubmit } = useForm({
  validationSchema: {
    ...validationSchema,
    ...imageSchema,
  },
});

const title = useField("title");
const image = useField("image");
const price = useField("price");
const bedrooms = useField("bedrooms");
const bathrooms = useField("bathrooms");
const parkingSpaces = useField("parkingSpaces");
const description = useField("description");
const pool = useField("pool", null, {
  initialValue: false,
});
const garden = useField("garden", null, {
  initialValue: false,
});

const submit = handleSubmit(async (values) => {
  propertiesStore.spinner = true;
  const { image, ...property } = values;

  const docRef = await addDoc(collection(db, "properties"), {
    ...property,
  });
  propertiesStore.spinner = false;

  if (docRef.id) {
    router.push({ name: "manage-houses" });
  }
});
</script>

<style scoped>
.background-image {
  background-image: url("/img/new-house.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
