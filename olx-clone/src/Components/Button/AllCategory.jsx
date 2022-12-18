import "./AllCategory.css"
import { Link } from "react-router-dom";
import {Box} from "@chakra-ui/react"
  export default function AllCategory(){

    return(
      <div id="menu-dropdown">
      <Link to='/holiday'><div id="menu-title">All category</div></Link>
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
          
            <Link to='/'> <small>Receptionist & Front office</small></Link>
            <Link to='/'> <small>Operator & Technician</small></Link>
            <Link to='/'> <small> Hotel & Travel Executive</small></Link>
            <Link to='/'> <small>Accountant</small></Link>
            <Link to='/'> <small>Other Jobs</small></Link>
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
              By Price
            </p>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Link to='/'><small>Gifts Under $25</small></Link>
              <Link to='/'><small>Gifts Under $50</small></Link>
              <Link to='/'><small>Gifts Under $100</small></Link>
              <Link to='/'><small>Gifts Over $100</small></Link>
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
              By Category
            </p>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Link to='/'><small>Skin Care Gifts</small></Link>
              <Link to='/'><small>Body Care Gifts</small></Link>
              <Link to='/'><small>Home Scents and Candle Gifts</small></Link>
              <Link to='/'><small>Makeusmall Gifts</small></Link>
              <Link to='/'><small>Hair Care Gifts</small></Link>
              <Link to='/'><small>Beauty Tools and Hair Styling Gifts</small></Link>
            </div>
          </div>
        </Box>
      </div>
    </div>

    )
  }

  