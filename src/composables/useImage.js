import { computed } from "vue";
import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { uid } from "uid";
import { usePropertiesStore } from "@/stores/properties";

export default function useImage() {
  const propertiesStore = usePropertiesStore();
  const storage = useFirebaseStorage();
  const storageRefPath = storageRef(storage, `/properties/${uid()}.jpg`);
  const { url, upload } = useStorageFile(storageRefPath);
  function uploadImage(e) {
    const data = e.target.files[0];
    if (data) {
      upload(data);
    }
  }
  const imageURL = computed(() => {
    return url.value ? url.value : null;
  });

  return {
    uploadImage,
    imageURL,
    url,
  };
}
