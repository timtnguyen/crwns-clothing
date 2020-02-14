import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDS2OSa5otD4sgYHS_ZjlNp2kFI3MC8VVA",
  authDomain: "crwns-db-4f690.firebaseapp.com",
  databaseURL: "https://crwns-db-4f690.firebaseio.com",
  projectId: "crwns-db-4f690",
  storageBucket: "crwns-db-4f690.appspot.com",
  messagingSenderId: "958782388430",
  appId: "1:958782388430:web:fb28293ebfcaebaf15b89f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
