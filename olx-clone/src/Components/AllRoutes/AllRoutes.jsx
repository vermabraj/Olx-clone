import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";

import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

function AllRouters() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          
            <Home />
         
        }
      />
      <Route
      path="/Login"
      element={
        
          <Login />
       
      }
    />
      <Route
        path="/ProductDetails"
        element={
           <ProductDetails />
         
        }
      />
    
    </Routes>
  );
}

export default AllRouters;
