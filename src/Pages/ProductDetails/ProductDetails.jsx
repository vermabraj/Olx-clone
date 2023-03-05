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
  ListItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
  const { id } = useParams();
  
  const { data } = useSelector((state) => state.product);
  const productDetails = data[id];
  const { image, price, title, location, post_uploaded } = productDetails;
  console.log("detail", id, productDetails);

  return (
    <Container maxW={"7xl"}>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={image} alt="" />
        </div>{" "}
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {price} </p>
            <span>{title}</span>
            <p>{title}</p>
            <span>{post_uploaded}</span>
          </div>
          <div className="productDescription">
            <p className="p-bold">Product Description</p>
            <p>
              Product single owner.. no bargaining direct call..mint
              condition..first service is done..not a single scratch..reason for
              selling : I am going to uk in next month.. urgent sale..
            </p>
          </div>

          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {title}</p>
            <p>Phone : +9184678473</p>
          </div>
        </div>
      </div>
      <Stack spacing={{ base: 6, md: 10 }} columns={{ base: 1, lg: 2 }}>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <Flex columns={{ base: 1, lg: 2 }} justifyContent={"space-between"}>
            <Box>
              <Card align="center" w={{ base: "18rem", lg: "23rem" }}>
                <CardHeader></CardHeader>
                <CardBody>
                  <Text
                    fontSize={"45px"}
                    fontWeight={"bolder"}
                    textAlign={"center"}
                  >
                    {price}
                  </Text>
                  <Button
                    bg="#002f34"
                    color="white"
                    w="20rem"
                    marginTop={"10px"}
                  >
                    Make Offer
                  </Button>
                  <br />
                  <hr />
                  <Heading size="sm" marginTop={"2rem"}>
                    {" "}
                    Available at - {location}
                  </Heading>
                  <Button
                    bg="#002f34"
                    color="white"
                    w="20rem"
                    marginTop={"10px"}
                  >
                    Book test drive
                  </Button>
                  <br />
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    w="20rem"
                    marginTop={"10px"}
                  >
                    Contact with seller
                  </Button>
                  <br />
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Box>
          </Flex>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProductDetails;
