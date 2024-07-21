export const validationSchema = {
  title(value) {
    if (!value) {
      return 'El campo "Título propiedad" es obligatorio';
    } else if (value?.length < 8) {
      return 'El campo "Título propiedad" es muy corto';
    }
    return true;
  },
  price(value) {
    /*
          ^ - Representa el inicio de la cadena.
          [0-9]+ - Representa cualquier número del 0 al 9. El + indica que debe haber al menos un dígito, pero puede haber más.
          $ - Representa el final de la cadena.
      */
    if (/^[0-9]+$/.test(value)) return true;
    return 'El campo "Precio" solo acepta números';
  },
  bedrooms(value) {
    if (value) return true;
    return "Selecciona una Cantidad";
  },
  bathrooms(value) {
    if (value) return true;
    return "Selecciona una Cantidad";
  },
  parkingSpaces(value) {
    if (value) return true;
    return "Selecciona una Cantidad";
  },
  description(value) {
    if (value) return true;
    return 'El campo "Descripción" es obligatorio';
  },
};

export const imageSchema = {
  image(value) {
    if (value) return true;
    return "La imagen es obligatoria";
  },
};
