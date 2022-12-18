import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardHeader, Box, CardFooter,Flex,Heading,Text,Image } from '@chakra-ui/react'
import { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {getBikes} from "../../Api/SlidingCardsApi"
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
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleGetCities = (page) => {
    getBikes({ page: page, limit: 10, sort: "name", order: "desc" })
      .then((res) => {
        setData(res.data);
        setTotalCount(Number(res.headers["x-total-count"]));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetCities(page);
  }, [page]);

  const handleClick=()=>{
   
    navigate("/SingleUserPage")
  }

    return (
      <div style={{margin:"auto",marginBottom:"40px",marginTop:"-40px"}} >
        <h2 style={{fontSize:"25px",fontWeight:"bolder",marginLeft:"30px",marginBottom:"10px",textDecoration:"underline"}} >More on Cars</h2>
        <Slider  style={{width:"95%",margin:"auto"  }}  {...settings}>
        {data.map((item) => (
      
          <Card onClick={handleClick} margin="auto" box-shadow= {"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"} minH='20rem' maxW={{base:null,md:"15rem",lg:"18rem"}}>
       
        <Box sx={{position:"absolute", marginLeft : "90%",color:"white",marginTop:"5px",marginRight:"10px"}}><FavoriteBorderOutlinedIcon  /></Box>
        <Image
        height={150}
          
          margin={"auto"}
          src={item.image}
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
    );
  }
