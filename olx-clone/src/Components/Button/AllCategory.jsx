import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    ListItem,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
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
    
    
    <MenuDivider />
    
    <TableContainer>
    <Table variant='simple'>
      <TableCaption>Olx.com</TableCaption>
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>For Sale: Houses & Apartments</Td>
          <Td>For Rent: Houses & Apartments</Td>
          <Td>Lands & Plots</Td>
          <Td>For Rent: Shops & Offices</Td>
          <Td>For Sale: Shops & Offices</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
     
    </Table>
  </TableContainer>

  </MenuList>
</Menu>
    )
  }

  