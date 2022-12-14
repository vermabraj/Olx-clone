import React, { useState } from "react";
import AllCategory from "../../Button/AllCategory";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
           <AllCategory/>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cars")} >Cars</span>
            <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     
    </div>
  );
}

export default Banner;