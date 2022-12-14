
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ThemeContent(){


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

      return(
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>



        </Box>


      )

}