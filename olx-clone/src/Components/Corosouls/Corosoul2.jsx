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
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rent-a-car-banner-template-design-29dd9f007cc19e7aa2fe84fdd1861aa5_screen.jpg?ts=1634324544',
      'https://static.wixstatic.com/media/5e56e2_85bef30065d54911a5220d16af385c39~mv2.jpg/v1/fill/w_586,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5e56e2_85bef30065d54911a5220d16af385c39~mv2.jpg',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rent-a-car-banner-template-design-da13cbd4c73f6d7efa21f80290de446f_screen.jpg?ts=1633243866',
    ];

    return (
      <Box  position={'relative'}
      height={'full'}
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
            
            backgroundImage={`url(${url})`}
          />
        ))}
        </Slider>
      </Box>
    );
  }
}

