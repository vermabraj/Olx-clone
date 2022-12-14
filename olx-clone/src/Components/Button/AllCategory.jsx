import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

  export default function AllCategory(){

    return(

        <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    
    border='none'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    
  >
    All Category 
  </MenuButton>
  <MenuList>
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
    )
  }