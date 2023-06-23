import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Redux/store";
import React, { useEffect } from "react";
import {
  getPostsAllCategory,
  getPostsHeadPhone,
  getProduct,
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
import { Link, useSearchParams } from "react-router-dom";
import Filters from "./Filters/Filters";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";



const SearchProducts = () => {
  

  const dispatch = useDispatch();
  

  const [searchParams, setSearchParams] = useSearchParams();

 
  const data = useSelector((store) => store.product.data);


  useEffect(() => {
    const paramObj = {
      params: {
        q: searchParams.getAll("q"),
        title: searchParams.getAll("title"),
        location: searchParams.getAll("location"),
        distance: searchParams.getAll("distance"),
        post_uploaded: searchParams.getAll("post_uploaded"),
        pLH: searchParams.getAll("pLH"),
        pHL: searchParams.getAll("pHL"),
        limit: searchParams.getAll("limit"),
      },
    };
    dispatch(getProduct(paramObj));
  }, [searchParams]);


   
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around",width:"95vw",margin:"auto" }}>
       
        <div >
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
                All Reccommended products
              </h1>
              <span>(Showing 1-{data.length} results of total Products )</span>
            </div>
            
          </div>

          <div id="productCards">
            {data.map((item, index) => {
              return (
                <Link to={`/singleproduct/${item.id}`}>
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
                      src={item.image}
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

export default SearchProducts;
