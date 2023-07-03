import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram
} from "react-icons/ai";
import {Link} from "react-router-dom"
import {  ImYoutube2 } from "react-icons/im";
import { Image, Stack } from '@chakra-ui/react'
import "./FooterStyle.css";


 const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
         
          <div className="sub">
            <div>
              <b>Popular Locations</b>
              <p>Kolkata</p>
              <p>Mumbai</p>
              <p>Chennai</p>
              <p>Pune</p>
            </div>
            <div>
              <b>Trending Locations</b>
              <p>Bhuvaneshwar</p>
              <p>Hyderabad</p>
              <p>Chandigarh</p>
              <p>Nashik</p>
            </div>
            <div>
              <b>About Us</b>
              <p>About QuickSale Group</p>
              <p>Careers</p>
              <p>Contact us</p>
              <p>QuickSale people</p>
              <p>Waah jobs</p>
            </div>
            <div>
              <b>QuickSale</b>
              <p>Help</p>
              <p>Site map</p>
              <p>Legal & Privacy information</p>
              <p>Blog</p>
              <p>QuickSale Autos Sell Car</p>
            </div>
            <div>
              <b><h1>FOLLOW US</h1></b>
              <div  className="footerSocialLinks">
              <div ><AiFillFacebook /></div>
              <div >  <AiFillTwitterCircle /></div>  
              <div  > <AiFillInstagram /></div>
              <div ><Link src="https://www.youtube.com/@Brajverma/featured"> <ImYoutube2 /> </Link></div>
           
              </div>
              <div className="storeLogo">
              <Stack direction='row'>
              <Image boxSize='100px' name='play-store-logo' src='https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg' />
              <Image boxSize='100px' name='app-store-logo' src='https://www.freepnglogos.com/uploads/app-store-logo-png/available-the-app-store-badge-vector-11.png' />
            
            </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footersFooter">
      <small>Other Countries Russia - South Africa - Nepal</small>
      <small>All rights reserved © 2006-2023 QuickSale</small>
      </div>
    </div>
  );
};

export default Footer;