import "./AllCategory.css"
import { Link } from "react-router-dom";

import {Box} from "@chakra-ui/react"
  export default function AllCategory(){

    return(
      <div id="menu-dropdown">
      <Link to='/allproducts'><div id="menu-title">All category</div></Link>
      <div className="menu-dropdown-content">
        <Box display="flex" gap="50px" pt={5} padding="20px">
          <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
            <p
              style={{
                paddingTop: "10px",
                textAlign: "left",
                borderTop: "1px solid gray",
                fontWeight: "medium",
                marginBottom: "10px",
              }}
            >
              Properties
            </p>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Link to='/'><small> For Sale: Houses & Apartments</small></Link>
              <Link to='/'>   <small>For Rent: Houses & Apartments</small></Link>
              <Link to='/'>      <small>Lands & Plots</small></Link>
              <Link to='/'>   <small>For Rent: Shops & Offices</small></Link>
              <Link to='/'>     <small>For Sale: Shops & Offices</small></Link>
              <Link to='/'>     <small>For Sale: Shops & Offices</small></Link>
              <Link to='/'>     <small>PG & Guest Houses</small></Link>
            </div>
            <p
            style={{
              paddingTop: "10px",
              textAlign: "left",
              borderTop: "1px solid gray",
              fontWeight: "medium",
              marginBottom: "10px",
            }}
          >
            Mobiles
          </p>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Link to='/'> <small>Mobile Phones</small></Link>
            <Link to='/'> <small>Accessories</small></Link>
            <Link to='/'> <small> Tablets</small></Link>
          </div>
          </div>
          <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
            <p
              style={{
                paddingTop: "10px",
                textAlign: "left",
                borderTop: "1px solid gray",
                fontWeight: "medium",
                marginBottom: "10px",
              }}
            >
              Jobs
            </p>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Link to='/'> <small>Data entry & Back office</small></Link>
              <Link to='/'> <small>Sales & Marketing</small></Link>
              <Link to='/'> <small>BPO & Telecaller</small></Link>
              <Link to='/'> <small>Driver</small></Link>
              <Link to='/'> <small> Office Assistant</small></Link>
              <Link to='/'> <small>Delivery & Collection</small></Link>
              <Link to='/'> <small>Teacher</small></Link>
              <Link to='/'> <small>Cook</small></Link>
              <Link to='/'> <small>Receptionist & Front office</small></Link>
              <Link to='/'> <small>Operator & Technician</small></Link>
              <Link to='/'> <small> Hotel & Travel Executive</small></Link>
              <Link to='/'> <small>Accountant</small></Link>
              <Link to='/'> <small>Other Jobs</small></Link>
            </div>
            <p
            style={{
              paddingTop: "10px",
              textAlign: "left",
              borderTop: "1px solid gray",
              fontWeight: "medium",
              marginBottom: "10px",
            }}
          >
            Bikes
          </p>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
          
            <Link to='/'> <small>Mototcycles</small></Link>
            <Link to='/'> <small>Scooters</small></Link>
            <Link to='/'> <small> Spare parts</small></Link>
            <Link to='/'> <small>Bicycle</small></Link>
          
          </div>
          </div>

          <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
            <p
              style={{
                paddingTop: "10px",
                textAlign: "left",
                borderTop: "1px solid gray",
                fontWeight: "medium",
                marginBottom: "10px",
              }}
            >
             Electronic Appliances
            </p>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
           
              <Link to='/'><small>  Electronics & Appliances</small></Link>
              <Link to='/'><small>Kitchen & Other Appliances</small></Link>
              <Link to='/'><small>TVs, Video - Audio</small></Link>
              <Link to='/'><small>Cameras & Lenses</small></Link>
              <Link to='/'><small>  Electronics & Appliances</small></Link>
              <Link to='/'><small>Computers & Laptops</small></Link>
              <Link to='/'><small>Hard Disks, Printers & Monitors</small></Link>
              <Link to='/'><small>Washing Machines</small></Link>
              <Link to='/'><small>Games & Entertainment</small></Link>
              <Link to='/'><small>Washing Machines</small></Link>
            </div>
            <p
            style={{
              paddingTop: "10px",
              textAlign: "left",
              borderTop: "1px solid gray",
              fontWeight: "medium",
              marginBottom: "10px",
            }}
          >
          Commercial vehicle spares
          </p>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Link to='/'><small>Commercial Vehicles & Spares</small></Link>
            <Link to='/'><small>Commercial & Other Vehicles</small></Link>
            <Link to='/'><small>Spare Parts</small></Link>
          </div>
          <p
          style={{
            paddingTop: "10px",
            textAlign: "left",
            borderTop: "1px solid gray",
            fontWeight: "medium",
            marginBottom: "10px",
          }}
        >
        Furniture
        </p>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Link to='/'><small>  Furniture</small></Link>
          <Link to='/'><small>Sofa & Dining</small></Link>
          <Link to='/'><small>Beds & Wardrobes</small></Link>
          <Link to='/'><small>Home Decor & Garden</small></Link>
          <Link to='/'><small>Kids Furniture</small></Link>
          <Link to='/'><small>Other Household Items</small></Link>
        </div>
          </div>

          <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
            <p
              style={{
                paddingTop: "10px",
                textAlign: "left",
                borderTop: "1px solid gray",
                fontWeight: "medium",
                marginBottom: "10px",
              }}
            >
            Fashion
            </p>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Link to='/'><small>Men</small></Link>
              <Link to='/'><small>Women</small></Link>
              <Link to='/'><small>Kids</small></Link>
             
            </div>
            <p
            style={{
              paddingTop: "10px",
              textAlign: "left",
              borderTop: "1px solid gray",
              fontWeight: "medium",
              marginBottom: "10px",
            }}
          >
          Book,Sports,Hobbies
          </p>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Link to='/'><small> Books, Sports & Hobbies</small></Link>
            <Link to='/'><small>Books</small></Link>
            <Link to='/'><small>Gym & Fitness</small></Link>
            <Link to='/'><small>Musical Instruments</small></Link>
            <Link to='/'><small>Sports Equipment</small></Link>
            <Link to='/'><small>Other Hobbies</small></Link>
          </div>
          <p
          style={{
            paddingTop: "10px",
            textAlign: "left",
            borderTop: "1px solid gray",
            fontWeight: "medium",
            marginBottom: "10px",
          }}
        >
       Pets
        </p>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Link to='/'><small>  Fishes & Aquarium</small></Link>
          <Link to='/'><small>Pet Food & Accessories</small></Link>
          <Link to='/'><small>Dogs</small></Link>
          <Link to='/'><small>Other Pets</small></Link>
        </div>
        <p
        style={{
          paddingTop: "10px",
          textAlign: "left",
          borderTop: "1px solid gray",
          fontWeight: "medium",
          marginBottom: "10px",
        }}
      >
    Services
      </p>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Link to='/'><small> Electronics & Computer</small></Link>
        <Link to='/'><small>Education & Classes</small></Link>
        <Link to='/'><small>Drivers & Taxi</small></Link>
        <Link to='/'><small>Health & Beauty</small></Link>
        <Link to='/'><small>Other Services</small></Link>
      </div>
          </div>
        </Box>
      </div>
    </div>

    )
  }

  