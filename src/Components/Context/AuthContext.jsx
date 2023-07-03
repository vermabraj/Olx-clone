import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  let token = localStorage.getItem("token") || "";
   console.log(token)

  const [authState, setState] = useState({
    isAuth: token.length > 0,
    token: null || token,
  });

  const loginUser = (token) => {
    setState({
      isAuth: true,
      token: token,
    });
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setState({
      isAuth: false,
      token: null,
    });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
