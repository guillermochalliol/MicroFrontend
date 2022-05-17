// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut,} from "firebase/auth";
import { getFirestore, doc, query, getDocs, setDoc, getDoc, collection, where, addDoc } from "firebase/firestore";
import {keys} from "../constants/firebaseConfig"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:keys.APIKEY,
  authDomain:keys.AUTHDOMAIN,
  databaseURL:keys.DATABASEURL,
  projectId:keys.PROJECTID,
  storageBucket:keys.STORAGEBUCKET,
  messagingSenderId:keys.MESSAGINGSENDERID,
  appId:keys.APPID
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
     
      await setDoc(doc(db, "users", 1), {
        uid: user.uid,
        firstName,
        lastName,
        authProvider: "local",
        email,
      });
    } 
    catch (error) {
        return error
    }
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
    } catch (error) {
        return error
    }
};

const signIn = async (email, password) => {
    try {
    const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
    );
    } catch (error) {
      return error
    }
   
};
const getUser = async (uid) => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const docs = await getDocs(q);
       let user=docs.docs
    if (user) {
        return(user)
      }
      else {
        return("No such document")
      }
    } catch (error) {
        return error
    }
   
};


const passwordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return ("Password reset link sent!");
    } catch (err) {
        return err;
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


function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case "auth/wrong-password":
        return "Password provided is not correct";
    case "auth/invalid-email":
        return "Email provided is invalid";
    case "auth/user-not-found":
        return "Email provided does not correspond to any registered user"
    case "auth/email-already-in-use":
        return "Email already exists"
    case "auth/weak-password":
        return "Password should be at least 6 characters"
    default:
      return "An error has occurred, Please try again";
  }
}


export {
    auth,
    db,
    signInWithGoogle,
    signIn,
    signUp,
    getUser,
    passwordReset,
    logOut,
    signInWithEmailAndPassword,
    mapAuthCodeToMessage
  };