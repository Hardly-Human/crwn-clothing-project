import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD1HuVHTWWlhfULM5aTNRc7YgJdWL3RZ8Y",
	authDomain: "crwn-db-35b29.firebaseapp.com",
	projectId: "crwn-db-35b29",
	storageBucket: "crwn-db-35b29.appspot.com",
	messagingSenderId: "526959705713",
	appId: "1:526959705713:web:ada73de6bd1a453ddfe5d0",
	measurementId: "G-0XEZ3DF44P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
