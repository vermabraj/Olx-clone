import React, { Component } from "react";
import Slider from "react-slick";
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';

export default class SimpleSlider extends Component {
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
      'https://statics.olx.in/olxin/banners/hero_bg_in_v3@1x.png',
      'https://marutisuzukitruevaluecdn2.azureedge.net/-/media/feature/truevalue/carouselgallery/homebanner/home-26-08.jpg?modified=20210826074338&h=588&w=1920&la=en&hash=B8CB78CEC4E6A0D9071A95BBBAF55676',
      'https://olx-sijeesh.web.app/Images/banner%20copy.png',
    ];

    return (
      <Box  position={'relative'}
      height={'18rem'}
      width={'full'}
      overflow={'hidden'}
      >
      
        <Slider   {...settings}>
        {cards.map((url, index) => (
          <Box
          maxW="100%"
            key={index}
            height={'10rem'}
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

