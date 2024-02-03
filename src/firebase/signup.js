import { auth, createUserWithEmailAndPassword } from "./firebase.config.js";
import { AddUser } from "./addData.js";

const sign_up = (email, password, username, contactNum, DOB) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed up
      const user = userCredential.user;
      if (user) {
        AddUser(username, contactNum, DOB, email, password, user.uid)
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};


export default sign_up;
