
import './App.css';
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar"
import AllRouters from './Components/AllRoutes/AllRoutes';
import { UserAuthContextProvider } from "./Components/Context/UserAuthContext"




function App() {

 

  return (
    <div  className="App">
     <UserAuthContextProvider >
     <Navbar/>
    <AllRouters/>
    <Footer/>
   
    </UserAuthContextProvider>
    </div>
  );
}

export default App;
