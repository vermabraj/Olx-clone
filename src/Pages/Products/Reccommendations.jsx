import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Redux/store";
import React, { useEffect } from "react";
import {
  getPostsAllCategory,
  getPostsHeadPhone,
} from "../../Redux/Products/Product.action";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Box,
  Image,
  CardHeader,
  Flex,
} from "@chakra-ui/react";
import Filters from "./Filters/Filters";
import { AddIcon, ArrowDownIcon, MinusIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Stack } from "react-bootstrap";

const AllProducts = () => {
   const [items, setItems] = useState([]);
   const [visible, setVisible] = useState(8);
   const showMore = () => {
     setVisible((previewValue) => previewValue + 4);
   };
  const { data, loading } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  //console.log(data);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPostsAllCategory());
    }, 2000);
  }, []);

  const sortByLH = () => {
    dispatch({ type: "SORT_LOW_TO_HIGH" });
  };

  const sortByHL = () => {
    dispatch({ type: "SORT_HIGH_TO_LOW" });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "95%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "80px",
              alignItems: "center",
              marginBottom: "5px",
              padding: "10px",
              border: "1px solid silver",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Fresh Reccommendation
              </h1>
            </div>
            <div id="sortButtonContainer">
              <b> Sort By :</b> <button id="sortingButton">Relevance</button>
              <button onClick={sortByLH} id="sortingButton">
                Low to High
              </button>
              <button onClick={sortByHL} id="sortingButton">
                High to Low
              </button>
            </div>
          </div>

          <div id="productCards">
            {data.slice(0, visible).map((item, index) => {
              return (
                <Link to={`/ProductDetails/${index}`}>
                  <Card id="productBody" key={index}>
                    <Box
                      sx={{
                        position: "absolute",
                        marginLeft: "88%",
                        color: "grey",

                        marginTop: "5px",
                      }}
                      _hover={{ color: "red" }}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Box>
                    <Image
                      height={170}
                      margin={"auto"}
                      src={item.image1}
                      alt={item.title}
                    />
                    <CardHeader>
                      <Flex>
                        <Flex alignItems="center" flexWrap="wrap">
                          <Box>
                            <Heading size="md">{item.price}</Heading>
                            <Text id="cardTitle" size="sm">
                              {item.title}
                            </Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardFooter
                      justify="space-between"
                      flexWrap="wrap"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <Text>{item.location}</Text>
                      <Text flexWrap="wrap">{item.post_uploaded}</Text>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
          <Flex  spacing={4} justify={"center"}>
            
            <button
           style={{background:'silver',fontSize:"xxl", fontWeight:"bold",borderRadius:"10px",padding:"0px 10px 0px 10px"}}
              onClick={showMore}
            >
             Show More
            </button>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
