
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,Card, CardHeader, CardBody, CardFooter
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { Badge } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GiChemicalTank } from 'react-icons/gi';
import { MdOutlineSpeed } from 'react-icons/md';  
import { IoMdOptions } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import {  GrLocation } from 'react-icons/gr'; 
import {  BsCalendarEvent } from 'react-icons/bs';


function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(`https://congruous-fork-name.glitch.me//api/All_category/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res))
      .catch((err) => console.log(err));
  },[]);

  const {image,price,title,location,post_uploaded} = productDetails;
  // console.log(productDetails)
  return (
    <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex justifyContent={"space-between"}  alignItems={"center"} >
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                image
              }
              fit={'cover'}
              align={'center'}
              w={'1000px'}
              
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
         
       
        </SimpleGrid>
          <Stack spacing={{ base: 6, md: 10 }} columns={{base:1,lg:2}}>
           
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
             
              <Box >
              <Text
                fontSize={{ base: '20px', lg: '40px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'bolder'} 
                
                textTransform={'uppercase'}
                mb={'5'}  >
               
              </Text>
              <Stack spacing='4'>
             
                <Card key={"elevated"} variant={"elevated"}>
                  <CardHeader>
                  <Badge colorScheme='green'>Featured</Badge>
                    <Heading size='xl' variant={"elevated"} 
                     align={"start"}>  {title} </Heading>
                  </CardHeader>
                  <CardBody>
                    <Flex align={"center"} justifyContent={"flex-start"} >
                    <Flex align={"center"} justifyContent={"space-between"} width={"65px"}
                    marginRight={"10px"}><GiChemicalTank/>Diesel </Flex>|
                    <Flex align={"center"} justifyContent={"space-between"} width={"90px"}marginLeft={"10px"} marginRight={"10px"}><MdOutlineSpeed/> 45000KM</Flex>|
                    <Flex align={"center"} justifyContent={"space-between"} width={"115px"}marginLeft={"10px"}><IoMdOptions/> Transmission</Flex>
                     </Flex>
                  </CardBody>
                </Card>
                <Card key={"elevated"} variant={"elevated"}>
                  <CardHeader>
                 
                    <Heading size='lg' variant={"elevated"} 
                     align={"start"} color={useColorModeValue('gray.500', 'gray.300')}> Overview </Heading>
                  </CardHeader>
                  <CardBody>
                    <Flex align={"center"}  justifyContent={"space-evenly"}>
                    <Stack>
                    <Flex align={"center"} justifyContent={"space-between"} width={"65px"}
                    marginRight={"10px"}><CgProfile/><small size={"sm"}>Owner</small> </Flex>
                    <Text fontWeight={"bold"}>2nd</Text>
                    </Stack>
                    <Stack>
                    <Flex align={"center"} justifyContent={"space-between"} width={"65px"}
                    marginRight={"10px"}><GrLocation/><small size={"sm"}>Location</small> </Flex>
                    <Text fontWeight={"bold"}>{location}</Text>
                    </Stack>
                    <Stack>
                    <Flex align={"center"} justifyContent={"space-between"} width={"65px"}
                    marginRight={"10px"}><BsCalendarEvent/><small size={"sm"}>Posting date</small> </Flex>
                    <Text fontWeight={"bold"}>{post_uploaded}</Text>
                    </Stack>
                  
                     </Flex>
                  </CardBody>
                </Card>
                <Card key={"elevated"} variant={"elevated"}>
                <CardHeader>
                
                  <Heading size='xl'  
                   align={"start"}>  Discription </Heading>
                </CardHeader>

                <CardBody>
                  <Text
                 fontSize={'2xl'}
                 fontWeight={'300'} align={"start"}>
               This is a second hand model, here you can find everything about it
               </Text>
               <Text  fontSize={'lg'}> ADDITIONAL VEHICLE INFORMATION:</Text>
               <Text fontSize={'lg'}>Accidental: No</Text>
               <Text fontSize={'lg'}>Air Conditioning: Automatic Climate Control</Text>
               <Text fontSize={'lg'}>Color: White</Text>
               <Text fontSize={'lg'}>Insurance Type: Comprehensive</Text>
               <Text fontSize={'lg'}>Registration Place: DL</Text>
               <Text fontSize={'lg'}>Exchange: Yes</Text>
               <Text fontSize={'lg'}>Finance: Yes</Text>
                </CardBody>
              </Card>
            </Stack>
            
              
              
             
            </Box>
              <Flex  columns={{base:1,md:1,lg:2}} justifyContent={"space-between"}>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
           
                <SimpleGrid  spacing={10}>
                  <List spacing={2}>
                    <ListItem>Cars</ListItem>
                    <ListItem>Master Old Certified</ListItem>{' '}
                    <ListItem>Tachmeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti-magnetic</ListItem>
                    <ListItem>Zig-wheels</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
                <Box>
                <Card align='center' w={{base:"18rem",lg:"23rem"}} >
               
                <CardBody >
                  <Text fontSize={"45px"} fontWeight={"bolder"} textAlign={"center"}>{price}</Text>
                  <Button bg='#002f34' color="white" w="100%" marginTop={"10px"}>Make Offer</Button><br/>
                  <hr/>
                  <Heading size='sm' marginTop={"2rem"}> Available at  - {location}</Heading>
                  <Button bg='#002f34' color="white"  w="100%" marginTop={"10px"}>Book test drive</Button><br/>
                  <Button colorScheme='teal'  variant='outline' w="100%" marginTop={"10px"}>Contact with seller</Button><br/>
                </CardBody>
               
              </Card>
              </Box>
              </Box>
            
        </Flex>
            </Stack>
  
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
          
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
       
      
      </Container>
  );
}

export default ProductDetails;
