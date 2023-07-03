

import React, { useState,useEffect } from "react";
 
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Avatar,
  useDisclosure,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,Button
} from "@chakra-ui/react";



import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Authentication from "../Authentication/Sign-in.component";
  
  
const SignUpForm = ({ModalName})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

 const [first_name, setFirst_name] = useState("");
 const [last_name, setLast_name] = useState("");
 const [email, setEmail] = useState("");
 const [gender, setGender] = useState("male");
 const [password, setPassword] = useState("");
 const [age, setAge] = useState(23);
 const [city, setCity] = useState("");
 const navigate = useNavigate();
 const toast = useToast();

 const handleSubmit = () => {
   const payload = {
     first_name,
     last_name,
     email,
     password,
     age,
     city,
     gender,
   };

   axios
     .post(`https://good-blue-cygnet-cuff.cyclic.app/users/register`, payload)
     .then((res) => {
       console.log(res);
       toast({
         position: "bottom-center",
         render: () => (
           <Flex
             color="white"
             p={"10px"}
             bgColor="green.400"
             borderRadius={"15px"}
           >
             <CheckCircleIcon w={30} h={30} />
             <Text size="lg" ml="15px">
               You are Successfully Registered
             </Text>
           </Flex>
         ),
       });
       navigate("/login");
     })
     .catch((error) => {
       console.log(error);
       toast({
         position: "bottom-center",

         render: () => (
           <Flex
             color="white"
             borderRadius={"15px"}
             p={"10px"}
             bgColor="red"
             alignItems={"center"}
           >
             <WarningIcon w={30} h={30} />
             <Text size="lg" ml="15px">
               Ohh ! Sorry, You entered Wrong Email or Password. Please Enter
               Correct Details. Try Again Login!
             </Text>
           </Flex>
         ),
       });
     });
 };



    return (
      <div>
        <Button variant={"none"} onClick={onOpen}>
          {ModalName}
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {" "}
              <Avatar
                marginLeft={"8rem"}
                w={"7rem"}
                name="Oshigaki Kisame"
                src="https://images-platform.99static.com/Wz8uWM8Bxjb8cKkxi11G_6wcqpg=/1x1:960x960/500x500/top/smart/99designs-contests-attachments/78/78275/attachment_78275463"
              />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div>
                <Box m="auto" height={"auto"} borderRadius="15px">
                  <Text
                    fontSize={"18px"}
                    fontFamily={"sans-serif"}
                    pt={4}
                    borderBottom={"1px solid gainsboro"}
                    pl={8}
                    pb={4}
                    fontWeight="semibold"
                  >
                    {" "}
                    Register Now
                  </Text>
                  <Box p={8}>
                    <Flex direction={["column", "column", "row"]}>
                      <FormControl mr="5%" isRequired>
                        <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                          First Name
                        </FormLabel>
                        <Input
                          id="first-name"
                          placeholder="Enter First Name"
                          variant="none"
                          border={"1px solid gainsboro"}
                          value={first_name}
                          onChange={(e) => setFirst_name(e.target.value)}
                        />
                      </FormControl>

                      <FormControl isRequired mt={[4, 4, 0]}>
                        <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                          Last Name
                        </FormLabel>
                        <Input
                          id="last-name"
                          placeholder="Enter Last Name"
                          variant="none"
                          border={"1px solid gainsboro"}
                          value={last_name}
                          onChange={(e) => setLast_name(e.target.value)}
                        />
                      </FormControl>
                    </Flex>
                    <FormControl mt={8} isRequired>
                      <FormLabel fontWeight={"normal"}>Email address</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter Email Address"
                        variant="none"
                        border={"1px solid gainsboro"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>

                    <Flex mt={8} direction={["column", "column", "row"]}>
                      <FormControl mr="5%" isRequired>
                        <FormLabel fontWeight={"normal"}>Gender</FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter Gener Here"
                          variant="none"
                          border={"1px solid gainsboro"}
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </FormControl>

                      <FormControl isRequired mt={[4, 4, 0]}>
                        <FormLabel fontWeight={"normal"}>Password</FormLabel>
                        <Input
                          type="password"
                          placeholder="Enter Password Here"
                          variant="none"
                          border={"1px solid gainsboro"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormControl>
                    </Flex>

                    <Flex mt={8} direction={["column", "column", "row"]}>
                      <FormControl mr="5%" isRequired>
                        <FormLabel fontWeight={"normal"}>Age</FormLabel>
                        <Input
                          type="number"
                          placeholder="Enter Age Here"
                          variant="none"
                          border={"1px solid gainsboro"}
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </FormControl>

                      <FormControl isRequired mt={[4, 4, 0]}>
                        <FormLabel fontWeight={"normal"}>City</FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter City Here"
                          variant="none"
                          border={"1px solid gainsboro"}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </FormControl>
                    </Flex>

                    <Flex align={"center"} fontSize={"sm"} mt={7} fontFamily="sans-serif">
                      Already Registered{" "}
                     
                        <span
                          style={{
                            color: "#FF3E6C",
                            fontWeight: "semibold",
                            marginLeft: "10px",
                          }}
                        >
                          <Authentication
                            ModalName={"Login Now"}
                            onClick={onClose}
                          />
                        </span>
                    
                    </Flex>
                    <Button
                      mt={2}
                      colorScheme="blue"
                      width={"100%"}
                      bg="#FF3E6C"
                      color="white"
                      _hover={{
                        bg: "#FF3E6C",
                      }}
                      variant={"none"}
                      isFullWidth
                      onClick={handleSubmit}
                    >
                      REGISTER NOW
                    </Button>
                  </Box>
                </Box>
              </div>
            </ModalBody>
            <ModalFooter>QuickSale.com</ModalFooter>
          </ModalContent>
        </Modal>
        <ToastContainer />
      </div>
    );
}

export default SignUpForm;