import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  
  Popover,
  PopoverTrigger,
  PopoverContent,
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
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";

import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import SearchBar from "../SearchBar/SearchBar";
import Signin from "../Authentication/Sign-in.component";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
   const { isAuth } = useSelector((state) => state.product);
  
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
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
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
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          ml={10}
          alignItems={"center"}
        >
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
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Hide below="md">
            <Flex display={{ base: "flex", md: "flex" }} alignItems="center">
              <Select border="none" size="sm">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </Select>
            </Flex>
</Hide>
<Hide below="sm">
            <Flex justify={"center"} alignItems={"center"}>
              <BsPerson size={"20px"} />
              <span id="userCharLimit">{username}</span>
            </Flex>
          </Hide>
          <Hide below="md">
            <Flex>
              <Button variant="none" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <small>
                {
                  <Signin
                    onClick={() => dispatch({ type: "AUTH_FAIL" })}
                    ModalName={isAuth ? "Logout" : "Login"}
                  />
                }
              </small>
            </Flex>
          </Hide>
          <HStack>
           
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
           
          </HStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={"row"} spacing={4}>
      <Link
        href={"href"}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {"label"}
            </Text>
            <Text fontSize={"sm"}>{"subLabel"}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Stack>
  );
};



const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
    
      <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: "Cars",
    children: [
      {
        label: "Cars",
        subLabel: "used cars",
        href: "/cars",
      },
      {
        label: "Used cars",
        subLabel: "Up-and-coming Designers",
        href: "/cars",
      },
    ],
  },
  {
    label: "Vehicle",
    children: [
      {
        label: "Commercial vehicle",
        subLabel: "All commercial vehicle",
        href: "#",
      },
      {
        label: "Private Vehicle",
        subLabel: "All rental vehicles",
        href: "#",
      },
    ],
  },
  {
    label: "MotorCycle",
    href: "/motorcycle",
  },
  {
    label: "Scooter",
    href: "#",
  },
  {
    label: "Mobile phones",
    href: "#",
  },
  {
    label: "House and apartment",
    href: "#",
  },
  {
    label: "Rental house and apartment",
    href: "#",
  },
];