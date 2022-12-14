import { ReactNode } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar, 
  useColorMode,
  HStack,Select
} from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';
import SearchBar from "../SearchBar/SearchBar"
import LocationSearchInput from "../SearchBar/SearchLocation"
import Banner from './Banner/Banner';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  
  const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );
  
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Flex
        bg={useColorModeValue('#eff1f3', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
       
        <Flex flex={{ base: 1 }} justify={{ base: 'left', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
         
            <Avatar height="3.5rem" size='xl' name='Logo' src='https://images-platform.99static.com/Wz8uWM8Bxjb8cKkxi11G_6wcqpg=/1x1:960x960/500x500/top/smart/99designs-contests-attachments/78/78275/attachment_78275463' />
          </Text>
        </Flex>
<Flex>
<SearchBar/>
</Flex>
        <Stack
          flex={{sm:1,  md: 1,lg:1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Flex display={{ base: 'flex', md: 'flex' }} >
          <Select  border="none"  size="sm" display={{ base: 'flex', md: 'flex', lg:"flex"}}>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
         
        </Select>
        </Flex>
        <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
          <Button
            as={'a'}
            fontSize={'md'}
            fontWeight={500}
            variant={'link'}
            href={'#'}>
            Login
          </Button>
          <HStack>
          <Button   padding="10px"
          border="5px solid" 
        borderRadius="2rem"
          border-style= "solid"
         borderColor= " blue #00BFFF #00BFFF yellow"
           leftIcon={<AddIcon />}>
            SELL
          </Button>
        </HStack>
        </Stack>
      </Flex>
      <Banner/>
    </Box>
  );
}










  