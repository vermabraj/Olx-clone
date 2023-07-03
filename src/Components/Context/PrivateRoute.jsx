import { useContext } from "react";
import {  useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoute({ children }) {
  const { pathname } = useLocation();
  const { authState } = useContext(AuthContext);
const navigate = useNavigate()
  if (authState.isAuth) {
    return children;
  }
window.location.pathname = "./login"
  
}

export default PrivateRoute;
