import React from "react";
import {
  Box,
  
  Button,
  Checkbox,
  Container,
  Flex,
  
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAllCategory } from "../../../Redux/Products/Product.action";

const PriceRange = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.product);
  let allCategories = Object.keys(categories);

  const filterCategory = (e, categoryName) => {
    if (e.target.checked) {
      dispatch({ type: "FILTER_BY_CATEGORY", payload: categoryName });
    }
  };

  const belowPrice = (e, priceRange) => {
    if (e.target.checked) {
      dispatch({ type: "FILTER_BY_PRICE_RANGE", payload: priceRange });
    } else dispatch(getPostsAllCategory());
  };

  return (
    <Flex>
      <Box width={"100%"} borderRight="1px solid #D3D3D3">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
        
          <VStack alignItems="flex-start" paddingLeft="10px">
            <Text>Availability</Text>
            <Flex gap="1rem">
              <Checkbox onChange={(e) => belowPrice(e, 9999)} />
              <Text>Below 9999</Text>
            </Flex>
            <Flex gap="1rem">
              <Checkbox onChange={(e) => belowPrice(e, 29999)} />
              <Text>Below 29999</Text>
            </Flex>
            <Flex gap="1rem">
              <Checkbox />
              <Text>Exclude out of Stock</Text>
            </Flex>
          </VStack>
         
          <VStack alignItems="flex-start" paddingLeft="10px">
            <Text fontWeight={"bold"} fontSize="lg">Categorize by Brand</Text>
            {allCategories.map((category,i) => {
              return (
                <Flex gap="1rem" key={i}>
                  {" "}
                  <Checkbox onChange={(e) => filterCategory(e, category)} border="silver"/>
                  <Text  id="filterCharLimit">{`${category} (${categories[category]})`}</Text>
                </Flex>
              );
            })}
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default PriceRange;
