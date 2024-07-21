import { ref } from "vue";
import { defineStore } from "pinia";

export const usePropertiesStore = defineStore("PropertiesStore", () => {
  const spinner = ref(false);

  return {
    spinner,
  };
});
