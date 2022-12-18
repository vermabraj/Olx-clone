import "./Signin.css"
import { Button } from "@chakra-ui/react";

import {signInWithGooglePopup,createUserDocumentFromAuth} from "../../../utils/firebase/firebase.utils"
import React, { useState } from "react";
 import { Link } from "react-router-dom";
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

const Signin = ({ModalName})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
const logGoogleUser = async() =>{
const {user} = await signInWithGooglePopup();
const userDocRef = await createUserDocumentFromAuth(user)
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
          <ModalHeader> <Avatar w={"7rem"} name='Oshigaki Kisame' src='https://images-platform.99static.com/Wz8uWM8Bxjb8cKkxi11G_6wcqpg=/1x1:960x960/500x500/top/smart/99designs-contests-attachments/78/78275/attachment_78275463' /></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='Enter your email' />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Enter your password' />
            
          </FormControl>
          <Button colorScheme='blue'  marginTop={"1rem"} w={"full"}>
          Signin
        </Button>
            <div className="p-4 box mt-3 text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
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
           QuickSale.com
          </ModalFooter>
        </ModalContent>
      </Modal>
       
      </div>
      
    )
}

export default Signin;