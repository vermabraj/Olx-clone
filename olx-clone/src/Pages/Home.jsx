
import Navbar  from "../Components/Navbar/Navbar"
import SimpleSlider from "../Components/Corosouls/Corosoul"
import SimpleSlider2 from "../Components/Corosouls/Corosoul2"
import PauseOnHover from "../Components/Cards/SlidingCards"
import ProductCards from "../Components/Cards/ProductCards"
import Footer from "./Footer/Footer"
import Banner from "../Components/Navbar/Banner/Banner"

export default function Home(){

return(
<div>
  
<Navbar/>
<Banner/>
<SimpleSlider/>
<PauseOnHover/>
<ProductCards/>
<SimpleSlider2/>
<Footer/>
</div>

)

}