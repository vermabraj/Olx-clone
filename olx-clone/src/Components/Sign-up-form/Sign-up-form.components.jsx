
import { Button } from "@chakra-ui/react";
import { Form } from "react-bootstrap";
import React, { useState,useEffect } from "react";
 import { Link } from "react-router-dom";
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
 import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
  const defaultFormFields = {
    displayName:"",
    email:"",
    password:"",
    confirm_password:""
  }
const SignUpForm = ({ModalName})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
const [formField,setFormField] = useState(defaultFormFields)
const {displayName,email,password,confirm_password} = formField;

const restFormFields = ()=>{
  setFormField(defaultFormFields)
}
const handleChange=(event)=>{
const {name,value } = event.target;
setFormField({...formField,[name]:value})
}


const handleSubmit=async(event)=>{
event.preventDefault();

if(password !== confirm_password){
toast("Password does not match")
  return;
}

try{

const {user} = await createAuthUserWithEmailAndPassword(email,password);
await createUserDocumentFromAuth(user,({displayName}))
restFormFields()
}catch(error){
  if(error.code==='auth/email-already-in-use'){
  toast("cannot create user email already in use")
  }else{
    console.log("user creation encounter an error",error)
  }
}
}

    return (
       
        
        <div>
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
          <FormLabel>Name</FormLabel>
          <Input required type="text"  ref={initialRef} onChange={handleChange} value={displayName} name="displayName" placeholder='Enter your name' />
        </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input required type="email" ref={initialRef} onChange={handleChange} value={email} name="email" placeholder='Enter your email' />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input required type="password" onChange={handleChange} name="password" value={password} placeholder='Enter your password' />
          </FormControl>
          <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
            <Input required type="password" onChange={handleChange} value={confirm_password} name="confirm_password" placeholder='Confirm  password' />
          </FormControl>
        
        <Button type="submit" colorScheme='blue'  marginTop={"1rem"} w={"full"}>
          Sign up
        </Button>
        </Form>
          </ModalBody>
          <ModalFooter>
           QuickSale.com
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
      </div>
      
    )
}

export default SignUpForm;