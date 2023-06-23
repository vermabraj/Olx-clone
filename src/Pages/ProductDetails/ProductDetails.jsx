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
import { FaInstagram, FaLocationArrow, FaSearchLocation, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { Badge } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCalendarEvent } from "react-icons/bs";

function ProductDetails() {
  const { id } = useParams();

  const { data } = useSelector((state) => state.product);
  const productDetails = data[id];
  const { image1, price, title, location, post_uploaded, _1IpS4 } =
    productDetails;
console.log(data)
  return (
    <Container maxW={"7xl"} margin={"auto"}>
      <Flex className="viewParentDiv" direction={["column", "column", "row"]}>
        <Box className="imageShowDiv">
          <img src={image1} alt="images" />
        </Box>
        <Box className="rightSection">
          <div className="productDetails">
            <p> {price} </p>

            <h1>{title}</h1>
            <span
              style={{ fontSize: "smaller", color: "grey", fontWeight: "bold" }}
            >
              {post_uploaded}
            </span>
          </div>

          <div className="contactDetails">
            <p className="p-bold ">Seller details</p>
            <p>
              <strong style={{ color: "grey" }}>Name :</strong> {title}
            </p>
            <p>
              <strong style={{ color: "grey" }}>Phone :</strong> +9184678473
            </p>
          </div>
          <div className="contactDetails">
            <Text fontSize={"30px"} fontWeight={"bolder"} textAlign={"center"}>
              {location}
            </Text>

            <Button
              colorScheme="teal"
              variant="outline"
              w="90%"
              marginTop={"10px"}
            >
              Chat with seller
            </Button>
          </div>
        </Box>
      </Flex>
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
          <Flex
            columns={{ base: 1, lg: 2 }}
            justifyContent={"space-between"}
            direction={["column", "column", "row"]}
          >
            <Box>
              <Box>
                <Badge colorScheme="yellow">{_1IpS4}</Badge>
                <Heading>Overview</Heading>
                <Flex justify={"space-evenly"} alignItems={"center"}>
                  <Flex justify={"space-evenly"} alignItems={"center"}>
                    <MdLocationOn size={"20px"} />
                    <span style={{ margin: "10px" }}>{location}</span>
                  </Flex>
                  <Flex justify={"space-evenly"} alignItems={"center"}>
                    <BsCalendarEvent size={"20px"} />
                    <span style={{ margin: "10px" }}>{post_uploaded}</span>
                  </Flex>
                </Flex>
              </Box>
              <div className="Description">
                <p className="p-bold">Product Description</p>
                <p>
                  Product single owner.. no bargaining direct call..mint
                  condition..first service is done..not a single scratch..reason
                  for selling : I am going to uk in next month.. urgent sale..
                </p>
              </div>
            </Box>

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
