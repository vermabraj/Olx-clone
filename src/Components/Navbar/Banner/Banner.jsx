import React from 'react';

import './Banner.css';
import AllCategory from "../../Button/AllCategory"
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>{<AllCategory />}</span>
          </div>
          <div className="otherQuickOptions">
            <Link to="/cars">
              <span>Cars</span>
            </Link>
            <Link to="/motorcycle">
              <span>Motorcycle</span>
            </Link>
            <Link to="/mobiles">
              <span>Mobile Phones</span>
            </Link>
            <Link to="/house">
              {" "}
              <span>For Sale:Houses & Apart...</span>
            </Link>
            <Link to="/scooter">
              {" "}
              <span>Scooter</span>
            </Link>
            <Link to="/commercial_vehicle">
              {" "}
              <span>Commercial & Other Ve...</span>
            </Link>
            <Link to="/house">
              <span>For Rent: House & Apart...</span>
            </Link>
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