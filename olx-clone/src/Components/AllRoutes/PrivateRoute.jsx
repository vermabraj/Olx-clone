import { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;
