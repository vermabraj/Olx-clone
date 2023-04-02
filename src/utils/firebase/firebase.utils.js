

import { initializeApp } from "firebase/app";
import {getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword} from "firebase/auth"
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
 const googleProvider = new GoogleAuthProvider();
 
 googleProvider.setCustomParameters({
    prompt:"select_account"
 })

 export const auth = getAuth()
 export const signInWithGooglePopup =()=>signInWithPopup(auth,googleProvider);
 export const signInWithGoogleRedirect =()=>signInWithRedirect(auth,googleProvider);

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
         switch(error.code){
            case 'auth/wrong-password':
               alert("Incorrect password or Email");
               break;
               case 'auth/user-not-found' :
                  alert("No user associated with this email");
                  break;
                  default:
                     console.log(error)
         }
       
      }

    }
    return userDocRef;
    
 }

 export const createAuthUserWithEmailAndPassword=async(email,password)=>{

if(!email || !password) return;

return await createUserWithEmailAndPassword(auth,email,password)
 }
 
 export const signInAuthUserWithEmailAndPassword=async(email,password)=>{

   if(!email || !password) return;
   
   return await signInWithEmailAndPassword(auth,email,password)
    }
    