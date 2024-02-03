import { auth, signInWithEmailAndPassword, signOut } from "./firebase.config";

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

function signMeOut() {
  console.log("Sign out success");
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      User();
    })
    .catch((error) => {
      // An error happened.
    });
}

export { signMeOut, login };
