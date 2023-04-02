import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
  useColorMode,
  HStack,
  Select,
  Hide,
  Show,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";
   import { BsPerson } from "react-icons/bs";  
import { Link } from "react-router-dom";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import SearchBar from "../SearchBar/SearchBar";
import Signin from "../Authentication/Sign-in.component";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

// import Banner from './Banner/Banner';
export default function Navbar() {
  const { isAuth } = useSelector((state) => state.product);
  const { isOpen, onToggle, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const token = localStorage.getItem("user");
  const [updated, setUpdated] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
   const [data, setData] = useState([]);
   const navigate = useNavigate();

let username = localStorage.getItem("username");



const handleChange = (event) => {
  setMessage(event.target.value);
};

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    setUpdated(message);
    navigate(`/all_category?q=${message}`);
    setMessage("");
  }
};



  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={1}
      box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        alignItems="center"
        justifyContent={"space-between"}
        p={4}
        gap="50px"
      >
        <Link to="/">
          <Flex flex={{ base: 1, md: 1, lg: 1 }} justify="space-evenly">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Avatar
                height="3.5rem"
                size="xl"
                name="Logo"
                src="https://images-platform.99static.com/Wz8uWM8Bxjb8cKkxi11G_6wcqpg=/1x1:960x960/500x500/top/smart/99designs-contests-attachments/78/78275/attachment_78275463"
              />
            </Text>
          </Flex>
        </Link>
        <Flex justifyContent={"space-between"} gap="50px">
          <Stack spacing={4}>
            <InputGroup
              width={["50px", "100px", "250px", "400px"]}
              border={"1px solid silver"}
              borderRadius={"7px"}
            >
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                fontSize={"14px"}
                border={"1px solid silver"}
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
            </InputGroup>
          </Stack>
          <Hide below="md">
            <Flex display={{ base: "flex", md: "flex" }} alignItems="center">
              <Select border="none" size="sm">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </Select>
            </Flex>
          </Hide>
          <Flex justify={"center"} alignItems={"center"}>
            <BsPerson size={"20px"} />
            <span id="userCharLimit">{username}</span>
          </Flex>

          <Flex>
            <Hide below="md">
              <Button variant="none" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Hide>
            <small>
              {
                <Signin
                  onClick={() => dispatch({ type: "AUTH_FAIL" })}
                  ModalName={isAuth ? "Logout" : "Login"}
                />
              }
            </small>
          </Flex>

          <HStack>
            <Hide below="md">
              {" "}
              <Flex
                alignItems={"center"}
                height="80%"
                border="5px solid"
                borderRadius="2rem"
                border-style="solid"
                box-shadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                borderColor=" blue yellow #00BFFF yellow"
                fontWeight={"bolder"}
                leftIcon={<AddIcon />}
              >
                {<Signin ModalName={"Sale"} />}
              </Flex>
            </Hide>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
