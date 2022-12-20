
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(`https://lime-sun-attraction.glitch.me/api/All_category/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res))
      .catch((err) => console.log(err));
  },[]);

  const {image,price,title,location,post_uploaded} = productDetails;
  console.log(productDetails)
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
          <Box >
          <Text
            fontSize={{ base: '20px', lg: '40px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'bolder'} 
            
            textTransform={'uppercase'}
            mb={'5'}  >
            Product Details
          </Text>

          <List spacing={2} fontSize={{ base: '16px', lg: '25px' }} >
            <ListItem>
              <Text color={"green"} as={'span'} fontWeight={'bolder'}>
               Location:
              </Text>{' '}
            {location}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
               Posted at:
              </Text>{' '}
            {post_uploaded}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Case:
              </Text>{' '}
              Steel
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
               Owner:
              </Text>{' '}
            "First"
            </ListItem>
          
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
              Type:
              </Text>{' '}
             Second-hand
            </ListItem>
             
          </List>
         
        </Box>
        </SimpleGrid>
          <Stack spacing={{ base: 6, md: 10 }} columns={{base:1,lg:2}}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
               Price : {price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'} align={"start"}>
                {title} 
                This is a second hand model, here you can find everything about it
                </Text>
              </VStack>
              <Flex  columns={{base:1,lg:2}} justifyContent={"space-between"}>
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
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Zig-wheels</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
          <Card align='center' w={{base:"18rem",lg:"23rem"}} >
          <CardHeader>
           
          </CardHeader>
          <CardBody >
            <Text fontSize={"45px"} fontWeight={"bolder"} textAlign={"center"}>{price}</Text>
            <Button bg='#002f34' color="white" w="20rem" marginTop={"10px"}>Make Offer</Button><br/>
            <hr/>
            <Heading size='sm' marginTop={"2rem"}> Available at  - {location}</Heading>
            <Button bg='#002f34' color="white"  w="20rem" marginTop={"10px"}>Book test drive</Button><br/>
            <Button colorScheme='teal'  variant='outline'w="20rem" marginTop={"10px"}>Contact with seller</Button><br/>
          </CardBody>
          <CardFooter>
         
          </CardFooter>
        </Card>
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
