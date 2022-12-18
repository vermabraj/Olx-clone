

import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,
doc,
getDoc,
setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpACTQ-DSscVNPTKl944BGZfouZOqhvmM",
  authDomain: "react-olx-authentication.firebaseapp.com",
  projectId: "react-olx-authentication",
  storageBucket: "react-olx-authentication.appspot.com",
  messagingSenderId: "927970132407",
  appId: "1:927970132407:web:7f9b380a5390ee44ef6832",
  measurementId: "G-05STQ7EKGQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 const provider = new GoogleAuthProvider();
 
 provider.setCustomParameters({
    prompt:"select_account"
 })

 export const auth = getAuth()
 export const signInWithGooglePopup =()=>signInWithPopup(auth,provider);
 export const db = getFirestore();

 export const createUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid);
   
    const userSnapShot = await  getDoc(userDocRef);
 
    if(!userSnapShot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
         await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
         })
      }catch(error){
         console.log("error creating the user",error)
      }

    }
    return userDocRef;
 }
