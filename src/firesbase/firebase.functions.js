import firebaseUtils from "./firebase.utils";
import { db } from "./firebase.utils";
import { md5 } from "md5";

export const createUserUsingCredentials = (
  email,
  password,
  displayName,
  photoURL
) =>
  firebaseUtils
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(snap => {
      const usersRef = db.collection("users").doc(snap.user.uid);
      const userdoc = usersRef.get();
      const createdDate = new Date().toLocaleDateString();
      if (!userdoc.exist)
        usersRef
          .set({ email, displayName, createdDate })
          .catch(err => console.log(err));
    })
    .then(snap => {
      console.log(snap);
    })

    .catch(errors => console.log(errors));

// signIn function

export const signInUsingCredentials = (email, password) => {
  firebaseUtils
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(snap => {
      console.log(snap);
    })
    .catch(error => {
      console.log(error);
    });
};
