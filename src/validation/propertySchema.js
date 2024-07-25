export const validationSchemaStep1 = {
  title(value) {
    if (!value) {
      return "El título de la propiedad es requerido";
    } else if (value.length < 8) {
      return "El título debe tener al menos 8 caracteres";
    } else if (/[^a-zA-Z0-9\sñÑ]/.test(value)) {
      return "El título solo puede contener letras, números y espacios";
    }
    return true;
  },
};
export const validationSchemaStep2 = {
  price(value) {
    const priceRegex = /^\d+(\.\d{1,2})?$/; // Números enteros o decimales con hasta dos dígitos después del punto
    if (!value) {
      return "El precio es requerido";
    } else if (!priceRegex.test(value)) {
      return "El precio debe ser un número válido con hasta dos decimales";
    } else if (parseFloat(value) <= 0) {
      return "El precio debe ser positivo";
    }
    return true;
  },
  lotSize(value) {
    const lotSizeRegex = /^[0-9]+$/; // Solo números enteros positivos
    if (!value) {
      return "El tamaño del terreno es requerido";
    } else if (!lotSizeRegex.test(value)) {
      return "El tamaño del terreno solo acepta números positivos";
    } else if (parseInt(value, 10) <= 0) {
      return "El tamaño del terreno debe ser positivo";
    }
    return true;
  },
  bedrooms(value) {
    if (!value) {
      return "Cantidad de habitaciones requerida";
    }
    return true;
  },
  bathrooms(value) {
    if (!value) {
      return "Cantidad de baños requerida";
    }
    return true;
  },
  parkingSpaces(value) {
    if (!value) {
      return "Cantidad de espacios requerida";
    }
    return true;
  },
  description(value) {
    if (!value) {
      return "La descripción es requerida";
    } else if (value.length < 20) {
      return "La descripción debe tener al menos 20 caracteres";
    }
    return true;
  },
};

export const imageSchemaStep1 = {
  image(value) {
    return validateImage(value, "La imagen de la propiedad es requerida");
  },
  interiorImage(value) {
    return validateImage(value, "La imagen del interior es requerida");
  },
  // poolImage(value) {
  //   return validateImage(value, "La imagen de la alberca es requerida");
  // },
};
export const imageSchemaStep2 = {
  poolImage(value) {
    return validateImage(value, "La imagen de la alberca es requerida");
  },
};

function validateImage(file, emptyMessage) {
  if (!file) {
    return emptyMessage;
  }

  const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
  const allowedTypes = ["image/jpeg", "image/jpg"];

  if (!allowedTypes.includes(file.type)) {
    return "La imagen debe ser JPG";
  }

  if (file.size > maxSizeInBytes) {
    return "La imagen no debe pesar más de 1MB";
  }

  return true;
}
