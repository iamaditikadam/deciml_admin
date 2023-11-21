
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtlVXiRNAMHW6p8sP4erymEFNYPU9BUw8",
  authDomain: "decimladmin-7b8bd.firebaseapp.com",
  projectId: "decimladmin-7b8bd",
  storageBucket: "decimladmin-7b8bd.appspot.com",
  messagingSenderId: "973677850539",
  appId: "1:973677850539:web:3d52453c876888d4712cee",
  measurementId: "G-JDSNM6X1ZV"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

/*const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    } )
}*/

