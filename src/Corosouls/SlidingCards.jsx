import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardHeader, Box, CardFooter,Flex,Heading,Text,Image,Hide } from '@chakra-ui/react'
import { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector, useDispatch } from "react-redux";
import { store } from "../Redux/store";
import {getBikes} from "../Api/SlidingCardsApi"
import { getPostsAllCategory } from "../Redux/Products/Product.action";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div

      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function PauseOnHover(){
  
   const { loading, data } = useSelector((store) => store.product);
   const dispatch = useDispatch();
   //console.log(data);
   useEffect(() => {
     setTimeout(() => {
       dispatch(getPostsAllCategory());
     }, 2000);
   }, []);

    const settings = {
      accessibility:true,
      adaptiveHeight:false,
     touchMove:true,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const navigate = useNavigate()
  

 

 

  const handleClick=()=>{
   
    navigate("/")
  }
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
      <Hide below="lg">
      <div style={{margin:"auto",marginBottom:"40px",marginTop:"-60px",border:"1px solid silver"}} >
        <h2 style={{fontSize:"25px",fontWeight:"bolder",marginLeft:"30px",marginBottom:"10px",textDecoration:"underline"}} >More on Cars</h2>
        <Slider  style={{width:"95%",margin:"auto"  }}  {...settings}>
        {data.map((item,i) => (
      
          <Card onClick={handleClick} margin="20px" minH='20rem' maxW={{base:null,md:"15rem",lg:"18rem"}} key={i} id="productBody">
       
        <Box sx={{position:"absolute", marginLeft : "88%",color:"grey",marginTop:"5px",marginRight:"10px"}}></Box>
        <Image
        height={150}
          
          margin={"auto"}
          src={item.image1}
          alt={item.title}
        />
        <CardHeader>
        <Flex spacing='0' flexWrap='wrap'>
          <Flex flex='1' gap='0' alignItems='center' flexWrap='wrap'>
            <Box>
              <Heading size='md'>{item.price}</Heading>
              <Text size="sm">{item.title}</Text>
            </Box>
          </Flex>
         
        </Flex>
      </CardHeader>
        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            fontSize:"12px"
          }}
        >
        <Text>{item.location}</Text>
        <Text>{item.post_uploaded}</Text>
        </CardFooter>
      </Card>
      ))}
        </Slider>
      </div>
      </Hide>
    );
  }
