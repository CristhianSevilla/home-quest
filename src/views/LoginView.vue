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
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
        />
        <v-text-field
          label="Contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          clearable
          color="light-blue-darken-2"
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
        />
        <v-btn
          class="mt-2"
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
import { useField, useForm } from "vee-validate";
import { loginSchema as validationSchema } from "../validation/loginSchema";
import { useAuthStore } from "@/stores/auth";

const { handleSubmit } = useForm({ validationSchema });
const auth = useAuthStore();

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
