import { computed } from "vue";
import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { uid } from "uid";

export default function useImage() {
  const storage = useFirebaseStorage();

  const propertyImageRef = storageRef(storage, `/properties/${uid()}.jpg`);
  const poolImageRef = storageRef(storage, `/properties/pool_${uid()}.jpg`);
  const interiorImageRef = storageRef(
    storage,
    `/properties/interior_${uid()}.jpg`
  );

  const { url: propertyImageUrl, upload: uploadPropertyImage } =
    useStorageFile(propertyImageRef);
  const { url: poolImageUrl, upload: uploadPoolImage } =
    useStorageFile(poolImageRef);
  const { url: interiorImageUrl, upload: uploadInteriorImage } =
    useStorageFile(interiorImageRef);

  function handleUpload(e, uploadFn) {
    const data = e.target.files[0];
    if (data) {
      uploadFn(data);
    }
  }

  const propertyImageURL = computed(() => {
    return propertyImageUrl.value ? propertyImageUrl.value : null;
  });

  const poolImageURL = computed(() => {
    return poolImageUrl.value ? poolImageUrl.value : null;
  });

  const interiorImageURL = computed(() => {
    return interiorImageUrl.value ? interiorImageUrl.value : null;
  });

  return {
    uploadPropertyImage: (e) => handleUpload(e, uploadPropertyImage),
    uploadPoolImage: (e) => handleUpload(e, uploadPoolImage),
    uploadInteriorImage: (e) => handleUpload(e, uploadInteriorImage),
    propertyImageURL,
    poolImageURL,
    interiorImageURL,
  };
}
