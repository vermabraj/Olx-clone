

import {
  
  Button,
  Input,InputGroup,InputRightElement,
} from '@chakra-ui/react';
import React from 
'react'

 function SearchBar({Search2Icon,width,SearchPlaceholder}) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md' display={{ base: 'none', md: 'flex',lg:"flex" }}>
      <Input 
    marginLeft="20px"
        pr='4.5rem'
        type="text"
        placeholder={SearchPlaceholder} width={width}
      />
      <InputRightElement width='3rem'>
        <Button  h='2rem' size='sm' onClick={handleClick}>
          {Search2Icon}
        </Button>
      </InputRightElement>
      
    </InputGroup>
  )
}

export default SearchBar;