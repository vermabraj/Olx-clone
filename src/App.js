import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRouters from "./Components/AllRoutes/AllRoutes";
import { UserAuthContextProvider } from "./Components/Context/UserAuthContext";
import Banner from "./Components/Navbar/Banner/Banner";


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Navbar />
        <Banner />
        
        <AllRouters />
        <Footer />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
