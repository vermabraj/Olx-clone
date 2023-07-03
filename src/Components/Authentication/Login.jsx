import React, { useContext, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://sore-goat-pants.cyclic.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("username", res.username);
        localStorage.setItem("token", res.token);
        if (res.token) {
          loginUser(res.token);

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box m="auto" height={"auto"} borderRadius="15px">
        <Box pl={8} pr={8} pb={8} pt={4}>
          <FormControl mt={4} isRequired>
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

          <FormControl mt={8} isRequired>
            <FormLabel fontWeight={"normal"}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              variant="none"
              border={"1px solid gainsboro"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            mt={8}
            colorScheme="blue"
            width={"100%"}
            bg="#FF3E6C"
            color="white"
            _hover={{
              bg: "#FF3E6C",
            }}
            variant={"none"}
            onClick={handleSubmit}
          >
            LOGIN NOW
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
