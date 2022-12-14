

import {
  
  Button,
  Input,InputGroup,InputRightElement,
} from '@chakra-ui/react';
import React from 
'react'
import { Search2Icon } from '@chakra-ui/icons'
 function SearchBar() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md' display={{ base: 'none', md: 'flex',lg:"flex" }}>
      <Input 
        pr='4.5rem'
        type="text"
        placeholder='Search here' width="500px"
      />
      <InputRightElement width='3rem'>
        <Button bg="black" h='2.5rem' size='md' onClick={handleClick}>
          {<Search2Icon color="white"/>}
        </Button>
      </InputRightElement>
      
    </InputGroup>
  )
}

export default SearchBar;