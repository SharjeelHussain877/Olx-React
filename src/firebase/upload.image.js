import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "./firebase.config.js";

const uploadImage = (file, name) => {
  return new Promise((resolve, reject) => {
    const StorageRef = ref(storage, `ProductsImages/${name}`);
    const uploadTask = uploadBytesResumable(StorageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`upload is ${progress}% done`);
        switch (snapshot.state) {
          case "paused":
            console.log("uploading is paused");
            break;
          case "running":
            console.log("uploading is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(`file available at ${downloadURL}`);
          resolve(downloadURL);
        });
      }
    );
  });
};

export default uploadImage;
