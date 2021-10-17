// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoCu9TXkzGmIxK0rZ7bHwO-h7v2lw1k7g",
  authDomain: "notes-app-a7e73.firebaseapp.com",
  projectId: "notes-app-a7e73",
  storageBucket: "notes-app-a7e73.appspot.com",
  messagingSenderId: "1008348876765",
  appId: "1:1008348876765:web:f233052078cf5e82207034",
};

// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
    auth.signOut();
  };

export const publishNote = async (text, userId) =>{
    try {
        const docRef = await addDoc(collection(db, "notes"), {
          text:text,
          userId:userId
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}
