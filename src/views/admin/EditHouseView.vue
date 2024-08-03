<template>
  <div
    class="bg-light-green-lighten-4 position-fixed top-0 left-0 w-100 h-100"
  ></div>
  <div class="position-relative w-100 d-flex justify-center align-center">
    <v-container class="pa-4 pa-xl-10">
      <v-card flat class="mx-auto pa-3 pa-xl-10">
        <v-card-title
          class="text-h5 text-light-green-darken-2 font-weight-bold"
          tag="h3"
        >
          Editar Propiedad
        </v-card-title>

        <p class="text-h6 px-4 text-body-1 text-grey-darken-1">
          Edite una propiedad llenando el siguiente formulario
        </p>
      </v-card>
    </v-container>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useFirestore, useDocument } from "vuefire";
import { updateDoc, doc } from "firebase/firestore";

//Obtener la propiedad a editar
const route = useRoute();
const db = useFirestore();
const docRef = doc(db, "properties", route.params.id);
const property = useDocument(docRef);
</script>
