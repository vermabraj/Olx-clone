
import './App.css';
import Navbar  from "./Components/Navbar/Navbar"
import SimpleSlider  from './Components/Corosoul';
import PauseOnHover from "./Components/Cards/SlidingCards"
import ProductCards from "./Components/Cards/ProductCards"
function App() {
  return (
    <div className="App">
      
   <Navbar/>
   <SimpleSlider />
  <PauseOnHover/>
  <ProductCards/>
    </div>
  );
}

export default App;
