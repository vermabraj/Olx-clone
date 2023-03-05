import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Authentication from "../Authentication/Sign-in.component";
import SignUpForm from "../Sign-up-form/Sign-up-form.components";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import ProductCars from "../../Pages/Products/ProductCars";
import ProductBikes from "../../Pages/Products/ProductBikes";
import ProductHouse from "../../Pages/Products/ProductHouse";
import ProductMobiles from "../../Pages/Products/ProductMobiles";
import AllProducts from "../../Pages/Products/AllProducts";

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<ProductCars />} />
      <Route path="/commercial_vehicle" element={<ProductCars />} />
      <Route path="/motorcycle" element={<ProductBikes />} />
      <Route path="/scooter" element={<ProductBikes />} />
      <Route path="/house" element={<ProductHouse />} />
      <Route path="/mobiles" element={<ProductMobiles />} />
      <Route path="/allProducts" element={<AllProducts />} />
      <Route path="/Authentication" element={<Authentication />} />
      <Route path="/Signup" element={<SignUpForm />} />
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default AllRouters;
