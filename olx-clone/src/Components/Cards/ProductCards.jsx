import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Box,Heading,Text,Image } from '@chakra-ui/react'



export default function ProductCards() {
  
  return (
    <Card maxW='15rem'>
 
  <CardBody>
   
  </CardBody>
  <Image
    
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Image'
  />
  <CardHeader>
  <Flex spacing='0'>
    <Flex flex='1' gap='0' alignItems='center' flexWrap='wrap'>
      <Box>
        <Heading size='sm'>3300</Heading>
        <Text size="sm">Iphone 14 pro</Text>
      </Box>
    </Flex>
   
  </Flex>
</CardHeader>
  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      fontSize:"10px"
    }}
  >
  <Text>Sehore MP</Text>
  <Text>15-12-2022</Text>
  </CardFooter>
</Card>
  );
}
