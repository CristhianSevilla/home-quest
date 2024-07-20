<template>
  <v-container class="d-flex justify-center align-center">
    <v-card class="pa-5" elevation="5" width="344">
      <v-card-title class="mb-3 text-center text-grey-darken-2"
        >Iniciar sesión</v-card-title
      >
      <v-form>
        <v-text-field
          type="email"
          label="Correo"
          placeholder="Ingresa tu correo electrónico"
          variant="outlined"
          clearable
          class="mb-2"
          color="light-blue-darken-2"
          density="compact"
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
        />
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          color="light-blue-darken-2"
          density="compact"
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          @click:append-inner="visible = !visible"
        />
        <v-alert
          v-if="auth.hasError"
          type="error"
          variant="outlined"
          density="compact"
          text="Credenciales no válidas"
          class="mb-2"
        />
        <v-card
          v-if="auth.hasError"
          class="mb-2"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Advertencia: Se bloqueará tu cuenta tras 3 intentos fallidos.
          </v-card-text>
        </v-card>
        <v-btn
          class="mt-3"
          size="large"
          color="light-blue-darken-2"
          type="submit"
          variant="elevated"
          block
          @click="submit"
        >
          Iniciar sesión
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { loginSchema as validationSchema } from "../validation/loginSchema";
import { useAuthStore } from "@/stores/auth";

const { handleSubmit } = useForm({ validationSchema });
const auth = useAuthStore();
const visible = ref(false);
const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  auth.login(values);
});
</script>

<style scoped>
.v-container {
  height: 80vh;
}
</style>
