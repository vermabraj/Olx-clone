
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
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
  HStack,Select,Hide,Show
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import {AddIcon,Search2Icon} from '@chakra-ui/icons';
import SearchBar from "../SearchBar/SearchBar"
import Signin from "../Authentication/Sign-in.component"
// import Banner from './Banner/Banner';
export default function Navbar() {
   const { isOpen, onToggle,onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  
 
  
  return (
    <Box  bg={useColorModeValue('gray.100', 'gray.900')} px={1} box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 2 }}
        borderBottom={1}
        borderStyle={'solid'}
        flexWrap={"wrap-reverse"}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
       <Link to="/">
        <Flex  flex={{ base: 1 ,md:1,lg:1}} justify={{ base: 'left', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
         
            <Avatar height="3.5rem" size='xl' name='Logo' src='https://images-platform.99static.com/Wz8uWM8Bxjb8cKkxi11G_6wcqpg=/1x1:960x960/500x500/top/smart/99designs-contests-attachments/78/78275/attachment_78275463' />
          </Text>
        </Flex>
        </Link>
<Flex>
<SearchBar width={"15rem"} SearchPlaceholder={"Location"} Search2Icon={  <Avatar size='sm' name='Kent Dodds' src='https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-24.png' />}/>
<SearchBar width={"28rem"} SearchPlaceholder={"Search here"} Search2Icon={<Search2Icon/>}/>
</Flex>
        <Stack
          flex={{sm:1,  md: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Flex display={{ base: 'flex', md: 'flex' }} >
          <Select  border="none"  size="sm" display={{ base: 'flex', md: 'flex', lg:"flex"}}>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
         
        </Select>
        </Flex>
        <Button bg="none" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      
          <small
            >
           {<Signin ModalName={"Login"} />}
          </small>
          <HStack>
         <Hide below="md"> <Button  
          padding="10px"
          border="5px solid" 
        borderRadius="2rem"
          border-style= "solid"
          box-shadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
         borderColor= " blue yellow #00BFFF yellow"
         fontWeight={"bolder"}
           leftIcon={<AddIcon />}>
           {<Signin ModalName={"Sale"}/>}
          </Button></Hide>
        </HStack>
        </Stack>
    
      </Flex>
      
    </Box>
  );
}










  