import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Redux/store";
import React, { useEffect } from "react";
import {
  getPostsCars,
  getPostsHouse,
  getPostsMobiles,
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
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";

import { Link } from "react-router-dom";

const ProductHouse = () => {
  const { data, loading } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPostsHouse());
    }, 2000);
  }, []);

  const sortByLH = () => {
    dispatch({ type: "SORT_LOW_TO_HIGH" });
  };

  const sortByHL = () => {
    dispatch({ type: "SORT_HIGH_TO_LOW" });
  };
if (loading)
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loader"
      />
    </div>
  );
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div id="filters">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              padding: "10px",
            }}
          >
            Filters
          </h1>
          <Filters  />
        </div>
        <div id="titleBar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "80px",
              alignItems: "center",
              marginBottom: "5px",
              padding: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
               House and Apartments
              </h1>
              <span>(Showing 1-{data.length} results of total Products )</span>
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
            {data.map((item, index) => {
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
                      src={item.image1 ? item.image1 : item.imgageSrc}
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
                      <Text>{item.post_uploaded}</Text>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHouse;
