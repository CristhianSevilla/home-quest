<template>
  <v-app>
    <v-navigation-drawer
      class="bg-green-lighten-5 position-fixed pt-15"
      app
      :width="300"
      v-model="drawer"
      v-if="!isXsAndSmaller"
    >
      <template v-slot:prepend>
        <v-list-item
          class="font-weight-bold text-light-green-darken-4 text-uppercase"
          lines="two"
        >
          Panel de Administración
        </v-list-item>
      </template>
      <v-divider />
      <v-list>
        <v-list-item
          prepend-icon="mdi-home-group"
          title="Todas las propiedades"
          @click="navigateTo('manage-houses')"
        />
        <v-divider />
        <v-list-item
          prepend-icon="mdi-home-plus-outline"
          title="Nueva propiedad"
          @click="navigateTo('new-house')"
        />
        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const drawer = ref(true);
const router = useRouter();

// Acceso al breakpoint de Vuetify
const { xs, sm } = useDisplay();
const isXsAndSmaller = computed(() => xs.value || sm.value);

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<style scoped></style>
