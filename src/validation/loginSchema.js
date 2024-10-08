export const loginSchema = {
  email(value) {
    if (!value) {
      return "El campo correo es obligatorio";
    }
    // si es un email válido
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return "Email no válido";
    }
    return true;
  },
  password(value) {
    if (value) return true;
    return "La contraseña es obligatoria";
  },
};
