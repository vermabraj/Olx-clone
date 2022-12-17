import { createContext, useContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase"
export const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
const [user,setUser] = useState("")

  function SignUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }
  function LogIn(email,password){

    useEffect(()=>{
      const unSubscribed = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      })
      return ()=>{
        unSubscribed()
      }
    },[])

    return signInWithEmailAndPassword(auth,email,password)
  }
  return (
    <UserAuthContext.Provider  >
      {children}
    </UserAuthContext.Provider>
  );
}

export  function useUserAuth(){
  return(
    useContext(UserAuthContext)
  )
}

