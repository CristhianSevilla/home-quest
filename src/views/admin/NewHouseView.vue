<template>
  <div class="background-image position-fixed top-0 left-0 w-100 h-100"></div>
  <div class="position-relative w-100 d-flex justify-center align-center">
    <v-container class="pa-4 pb-md-0">
      <v-card flat class="mx-auto pa-2 pa-md-10">
        <v-card-title
          class="text-h5 text-light-green-darken-2 font-weight-bold"
          tag="h3"
        >
          Nueva Propiedad
        </v-card-title>

        <p class="text-h6 px-4 text-body-1 text-grey-darken-1">
          Crea una nueva propiedad llenando el siguiente formulario
        </p>

        <v-form class="mt-5">
          <fieldset class="pa-4 rounded border-light-green-darken-2 mt-4">
            <legend class="text-h7 font-weight-bold text-light-green-darken-2">
              Información Básica
            </legend>

            <v-text-field
              label="Título propiedad*"
              placeholder="Ingresa el título de la propiedad"
              variant="outlined"
              color="light-green-darken-2"
              density="compact"
              clearable
              class="mb-3"
              v-model="title.value.value"
              :error-messages="title.errorMessage.value"
            />
            <v-row class="mt-2">
              <v-col cols="12" md="6" class="py-0">
                <v-file-input
                  show-size
                  accept="image/jpeg"
                  label="Imagen Propiedad*"
                  variant="outlined"
                  color="light-green-darken-2"
                  density="compact"
                  prepend-icon="mdi-camera"
                  :clearable="false"
                  v-model="image.value.value"
                  :error-messages="image.errorMessage.value"
                  @change="uploadPropertyImage"
                />
                <div class="px-md-5 px-lg-10 px-xl-16 mt-2 mb-4 mb-lg-0">
                  <v-card class="w-100">
                    <v-img
                      :src="
                        propertyImageURL
                          ? propertyImageURL
                          : '/img/default-property-image.jpg'
                      "
                      alt="Imagen de la propiedad"
                      cover
                    />
                  </v-card>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-file-input
                  show-size
                  accept="image/jpeg"
                  label="Imagen adicional*"
                  variant="outlined"
                  color="light-green-darken-2"
                  density="compact"
                  prepend-icon="mdi-camera"
                  :clearable="false"
                  v-model="interiorImage.value.value"
                  :error-messages="interiorImage.errorMessage.value"
                  @change="uploadInteriorImage"
                />
                <div class="px-md-5 px-lg-10 px-xl-16 mt-2 mb-4">
                  <v-card class="w-100">
                    <v-img
                      :src="
                        interiorImageURL
                          ? interiorImageURL
                          : '/img/default-interior-image.jpg'
                      "
                      alt="Imagen adicional"
                      cover
                    />
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </fieldset>

          <fieldset class="pa-4 pb-0 rounded border-light-green-darken-2 mt-4">
            <legend class="text-h7 font-weight-bold text-light-green-darken-2">
              Detalles de la Propiedad
            </legend>

            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  label="Precio*"
                  placeholder="Ingresa el precio de la propiedad"
                  variant="outlined"
                  class="mb-3 mt-2"
                  color="light-green-darken-2"
                  density="compact"
                  clearable
                  v-model="price.value.value"
                  :error-messages="price.errorMessage.value"
                />
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  label="Tamaño terreno*"
                  placeholder="Ingresa el tamaño del terreno en m2"
                  variant="outlined"
                  class="mb-3 mt-2"
                  color="light-green-darken-2"
                  density="compact"
                  clearable
                  v-model="lotSize.value.value"
                  :error-messages="lotSize.errorMessage.value"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="py-0">
                <v-select
                  label="Habitaciones*"
                  variant="outlined"
                  density="compact"
                  color="light-green-darken-2"
                  clearable
                  class="mb-3"
                  :items="items"
                  v-model="bedrooms.value.value"
                  :error-messages="bedrooms.errorMessage.value"
                />
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-select
                  label="Baños*"
                  variant="outlined"
                  density="compact"
                  color="light-green-darken-2"
                  clearable
                  class="mb-3"
                  :items="items"
                  v-model="bathrooms.value.value"
                  :error-messages="bathrooms.errorMessage.value"
                />
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-select
                  label="Lugares estacionamiento*"
                  variant="outlined"
                  density="compact"
                  color="light-green-darken-2"
                  class="mb-3"
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
              color="light-green-darken-2"
              label="Descripción*"
              clearable
              class="mt-2"
              v-model="description.value.value"
              :error-messages="description.errorMessage.value"
            />
          </fieldset>

          <fieldset class="pa-4 rounded border-light-green-darken-2 mt-4">
            <legend class="text-h7 font-weight-bold text-light-green-darken-2">
              Amenidades
            </legend>

            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-checkbox
                  density="compact"
                  label="Alberca"
                  color="light-green-darken-2"
                  v-model="pool.value.value"
                />
                <div v-if="pool.value.value" class="mb-3">
                  <v-file-input
                    show-size
                    accept="image/jpeg"
                    label="Imagen Alberca"
                    variant="outlined"
                    color="light-green-darken-2"
                    density="compact"
                    prepend-icon="mdi-camera"
                    :clearable="false"
                    v-model="poolImage.value.value"
                    @change="uploadPoolImage"
                  />
                  <div class="px-md-5 px-lg-10 px-xl-16 mt-2 mb-4">
                    <v-card class="w-100">
                      <v-img
                        :src="
                          poolImageURL
                            ? poolImageURL
                            : '/img/default-pool-image.jpg'
                        "
                        alt="Imagen de la alberca"
                        cover
                      />
                    </v-card>
                  </div>
                </div>
              </v-col>
              <v-col class="py-0">
                <v-checkbox
                  density="compact"
                  label="Jardin/Patio"
                  color="light-green-darken-2"
                  v-model="garden.value.value"
                />
              </v-col>
            </v-row>
          </fieldset>

          <fieldset class="pa-4 rounded border-light-green-darken-2 my-4">
            <legend class="text-h7 font-weight-bold text-light-green-darken-2">
              Ubicación
            </legend>

            <p class="mb-4 text-body-2 text-grey-darken-1">
              Selecciona la ubicación en el mapa arrastrando el marcador.
              Asegúrate de que el marcador esté en la posición exacta que
              deseas. El zoom del mapa puede ajustarse para una visualización
              más detallada.
            </p>

            <div>
              <div style="height: 400px">
                <l-map
                  v-model:zoom="zoom"
                  :center="center"
                  :use-global-leaflet="false"
                >
                  <l-marker :lat-lng="center" draggable @moveend="pin" />
                  <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  ></l-tile-layer>
                </l-map>
              </div>
            </div>
          </fieldset>

          <v-btn
            size="large"
            color="light-green-darken-2"
            type="submit"
            variant="elevated"
            block
            text="Agregar propiedad"
            @click="submit"
          />
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
import useImage from "@/composables/useImage";
import useLocationMap from "@/composables/useLocationMap";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const propertiesStore = usePropertiesStore();
const router = useRouter();
const db = useFirestore();
const { zoom, center, pin } = useLocationMap();
const {
  uploadPropertyImage,
  uploadPoolImage,
  uploadInteriorImage,
  propertyImageURL,
  poolImageURL,
  interiorImageURL,
} = useImage();
const { handleSubmit } = useForm({
  validationSchema: {
    ...validationSchema,
    ...imageSchema,
  },
});

const title = useField("title");
const image = useField("image");
const interiorImage = useField("interiorImage");
const price = useField("price");
const lotSize = useField("lotSize");
const bedrooms = useField("bedrooms");
const bathrooms = useField("bathrooms");
const parkingSpaces = useField("parkingSpaces");
const description = useField("description");
const pool = useField("pool", null, {
  initialValue: false,
});
const poolImage = useField("poolImage");
const garden = useField("garden", null, {
  initialValue: false,
});

const submit = handleSubmit(async (values) => {
  propertiesStore.spinner = true;
  const { image, interiorImage, poolImage, ...property } = values;

  const docRef = await addDoc(collection(db, "properties"), {
    ...property,
    image: propertyImageURL.value,
    interiorImage: interiorImageURL.value,
    poolImage: poolImageURL.value,
    location: center.value,
  });
  propertiesStore.spinner = false;

  if (docRef.id) {
    router.push({ name: "manage-houses" });
  }
});
</script>

<style scoped>
.background-image {
  background-image: url("/img/admin5.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.border-light-green-darken-2 {
  border: 1px solid #9ccc65;
}
</style>
