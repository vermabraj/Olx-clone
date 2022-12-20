import "./Signin.css"
import SignUpForm from "../Sign-up-form/Sign-up-form.components"
import { Button } from "@chakra-ui/react";

import {signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import React, { useState} from "react";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Avatar,FormLabel,Input,FormControl,useDisclosure
  } from '@chakra-ui/react'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
  
  const defaultFormFields = {
    email:"",
    password:"",
  }

const Authentication = ({ModalName})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
const logGoogleUser = async() =>{
const {user} = await signInWithGooglePopup();
 await createUserDocumentFromAuth(user)
setProfile(user?.displayName)
 toast("Login Successfully")
 
}

const [formField,setFormField] = useState(defaultFormFields)
const {email,password} = formField;
const [profile,setProfile] = useState("")
const navigate = useNavigate()
const restFormFields = ()=>{
setFormField(defaultFormFields)
navigate("/")
toast("Login Successfully")
}

const handleChange=(event)=>{
  const {name,value } = event.target;
  setFormField({...formField,[name]:value})
  }

const handleSubmit=async(event)=>{
event.preventDefault();
try{
  const response = await signInAuthUserWithEmailAndPassword(email,password);
 
restFormFields()
}catch(error){
toast("there is some error in login")
}
}



    return (
       
        
        <div>{profile}{}
        <Button bg={"none"} onClick={onOpen}>{ModalName}</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> <Avatar marginLeft={"8rem"} w={"7rem"} name='Oshigaki Kisame' src='https://images-platform.99static.com/Wz8uWM8Bxjb8cKkxi11G_6wcqpg=/1x1:960x960/500x500/top/smart/99designs-contests-attachments/78/78275/attachment_78275463' /></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input onChange={handleChange} name="email" type="email" value={email} ref={initialRef} placeholder='Enter your email' />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input onChange={handleChange} name="password" type="password" value={password} placeholder='Enter your password' />
            
          </FormControl>
         
         <Button type="submit"  onClick={onClose} colorScheme='blue'  marginTop={"1rem"} w={"full"}>
         Signin
       </Button>
         
         
          </Form>
         
         
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",background:"none"}} className="p-4 box mt-3 text-center">
              Don't have an account? {<SignUpForm ModalName={"Signup"}/>}
            </div>
            <div>
            <GoogleButton
              className="g-btn"
              type="dark"
             onClick={logGoogleUser}
            />
          </div>

          </ModalBody>
          <ModalFooter>
           QuickSale.com - <small>Braj verma</small>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
      </div>
      
    )
}

export default Authentication;