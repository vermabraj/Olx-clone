import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";

import Login from "../../Pages/Login";
import SingleUserPage from "../../Pages/SingleUserPage";
import SignUp from "../../Pages/SignUp"
// import PrivateRoute from "../Components/PrivateRoute";
import { Container,Row,Col } from "react-bootstrap";
import {UserAuthContextProvider} from "../../Context/UserAuthContext"
function AllRouters() {
  return (
    <Container>
    <Row>
    <Col>
    <UserAuthContextProvider>
    <Routes>
      <Route  path="/"  element={ <Home />} />
      <Route  path="/SingleUserPage" element={<SingleUserPage />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </UserAuthContextProvider>
    </Col>
    </Row>
    </Container>
  );
}

export default AllRouters;
