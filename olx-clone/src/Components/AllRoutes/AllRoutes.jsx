import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Authentication from "../Authentication/Sign-in.component";
import SignUpForm from "../Sign-up-form/Sign-up-form.components";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/Authentication" element={ <Authentication /> } />
      <Route path="/Signup" element={ <SignUpForm /> } />
      <Route path="/ProductDetails/:id" element={ <ProductDetails /> } />
    </Routes>
  );
}

export default AllRouters;
