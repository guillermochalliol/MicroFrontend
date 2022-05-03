// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut,} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQqYuOt_s8C1AyRIPF5ZaPQXMqX_MwEPU",
  authDomain: "auth-api-9da58.firebaseapp.com",
  databaseURL: "https://auth-api-9da58-default-rtdb.firebaseio.com",
  projectId: "auth-api-9da58",
  storageBucket: "auth-api-9da58.appspot.com",
  messagingSenderId: "660490876617",
  appId: "1:660490876617:web:07c6bc84757f7fbb9c7f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Auth Functions

const signUp = async (firstName, lastName, email, password) => {
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
      );
      const user = userCredential.user;
      const newUser = {
        uid: user.uid,
        firstName,
        lastName,
        authProvider: "local",
        email,
      }
      await addDoc(collection(db, "users"), {
        newUser
      });
      return newUser;
    } 
    catch (err) {  
      console.log(err.message); 
    };
};

const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
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

const signIn = async (email, password) => {
    try {
    const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
    );
    const user = userCredential.user;
    return true
    } catch (error) {
    return {error: error.message}
    }
};

const passwordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logOut = async() => {
    try {
    await signOut(auth)
    return true
    } catch (error) {
    return false
    }
};
export {
    auth,
    db,
    signInWithGoogle,
    signIn,
    signUp,
    passwordReset,
    logOut,
  };