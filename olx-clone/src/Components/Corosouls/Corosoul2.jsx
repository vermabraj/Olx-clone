import React, { Component } from "react";
import Slider from "react-slick";
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';

export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
     accessibility:true,
     adaptiveHeight:false,
    touchMove:true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const cards = [
      'https://www.doditsolutions.com/wp-content/uploads/banner_14.jpg',
      'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    ];

    return (
      <Box  position={'relative'}
      height={'18rem'}
      width={'full'}
      overflow={'hidden'}
      marginTop={"2em"}
       >
      
        <Slider    {...settings}>
        {cards.map((url, index) => (
          <Box
          maxW="100%"
            key={index}
            height={'30rem'}
           
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
        </Slider>
      </Box>
    );
  }
}

