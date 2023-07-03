import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
  Heading,
  Select,
  Stack,
  Checkbox
} from "@chakra-ui/react";
import "../../index.css";
import React, { useRef, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
const intitialData = {
  title: "",
  imageSrc: "",
  image1: "",

  price: "",
  description: "",
  distance: "",
  rating: Math.floor(Math.random() * 5) + 1,
  category: "",
  location: "",
  warranty: "",
  featured: "No",
  post_uploaded:currentDate,
};

const AddProducts = () => {
  const [data, setData] = useState(intitialData);
  const imgref = useRef();
  const [loading, setLoading] = useState(false);
 
  const toast = useToast();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleImage = async () => {
    setLoading(true);
    let form = new FormData();
    form.append("image", imgref.current.files[0]);
    let res = await fetch(
      "https://api.imgbb.com/1/upload?key=c8ae0e28f0a4d5c6dbada81345770a8a",
      {
        method: "POST",
        body: form,
      }
    );
    let acc_res = await res.json();
    const imageurl1 = acc_res.data.display_url;
    console.log(imageurl1);
    setData({ ...data, image1: imageurl1 });
    setLoading(false);
  };
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.title === "" ||
      data.post_uploaded === "" ||
      data.category === "" ||
      data.location === "" ||
      data.rating === "" ||
      data.image1 === "" ||
      data.description === "" ||
      data.price === ""
    ) {
      toast({
        position: "top-left",

        render: () => (
          <Flex color="white" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Add Product Image
            </Text>
          </Flex>
        ),
      });
      return;
    }
    toast({
      position: "top-left",
      render: () => (
        <Flex
          color="white"
          border="4px solid white"
          p={"10px"}
          bgColor="green.400"
        >
          <CheckCircleIcon w={30} h={30} />
          <Text size="lg" ml="15px">
            Product has been added!!{" "}
          </Text>
        </Flex>
      ),
    });
    let res = await fetch(
      "https://sore-goat-pants.cyclic.app/products/create",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(setData(intitialData));
    navigate("/");
  };
console.log(data)
  return (
    <Box mt={8} width={"40%"} margin={"auto"}>
      <Heading margin="20px 0px 50px 0px" textDecoration={"underline"}>
        Add Your Products <span style={{ color: "red" }}>For Sale</span>
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Product Name"
            value={data.title}
            name="title"
            onChange={handleChange}
          />
          <FormLabel for="category" mt={4}>
            Choose a category:
          </FormLabel>

          <Select name="category" value={data.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="mobile">Mobile</option>
            <option value="home_and_apartment">House and Apartments</option>
          </Select>

          <FormLabel mt={4}>Product Description</FormLabel>
          <Input
            type="text"
            placeholder="Enter Product Description"
            value={data.description}
            name="description"
            onChange={handleChange}
          />

          <FormLabel mt={4}>Product Image-1</FormLabel>
          <Input type="file" onChange={handleImage} ref={imgref} />

          <FormLabel mt={4}>Product Price (Rs.)</FormLabel>
          <Input
            type="number"
            placeholder="Enter Product Price"
            value={data.price}
            name="price"
            onChange={handleChange}
          />

          <FormLabel mt={4}>Distance</FormLabel>
          <Input
            type="text"
            placeholder="Enter Product Distance"
            name="distance"
            value={data.distance}
            onChange={handleChange}
          />

          <FormLabel mt={4}>Location</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Location"
            value={data.location}
            onChange={handleChange}
            name="location"
          />
          <FormLabel mt={4}>Warranty</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Warranty"
            value={data.warranty}
            onChange={handleChange}
            name="warranty"
          />
          <FormLabel for="featured" mt={4}>
            Featured ?:
          </FormLabel>

          <Select name="featured" value={data.featured} onChange={handleChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Select>
          <Button
            mb={2}
            mt={8}
            colorScheme="green"
            type="submit"
            isLoading={loading}
          >
            Sell Now
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default AddProducts;
