// import React from 'react';
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Stack,
//   Heading,
//   Text,
//   Container,Flex
// } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Corosoul() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState<Slider | null>(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '40px' });

//   // This list contains all the data for carousels
//   // This can be static or loaded from a server
//   const cards = [
//     {
     
     
//       image:
//         'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     },
//     {
     
    
//       image:
//         'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
//     },
//     {
     
//       image:
//         'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     },
//   ];

//   return (
    
//     <Box
//       position={'relative'}
//       height={'600px'}
//       width={'full'}
//       overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />

//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt size="40px" />
        
//       </IconButton>
      
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt size="40px" />
//       </IconButton>
     
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((card, index) => (
//           <Box
//             key={index}
//             height={'6xl'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${card.image})`}>
           
//             <Container size="container.lg" height="600px" position="relative">
             
//             </Container>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
    
//   );
// }