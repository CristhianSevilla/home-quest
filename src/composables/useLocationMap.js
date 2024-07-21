import { ref } from "vue";
import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { uid } from "uid";
import { usePropertiesStore } from "@/stores/properties";

export default function useLocationMap() {
  const zoom = ref(12);
  const center = ref([20.6574684, -105.240449]);

  function pin(e) {
    const marker = e.target.getLatLng();
    center.value = [marker.lat, marker.lng];
  }

  return {
    zoom,
    center,
    pin,
  };
}
