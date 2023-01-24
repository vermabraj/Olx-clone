

import SimpleSlider from "../Components/Corosouls/Corosoul"
import SimpleSlider2 from "../Components/Corosouls/Corosoul2"
import PauseOnHover from "../Components/Cards/SlidingCards"
import ProductCards from "../Components/Cards/ProductCards"

import Banner from "../Components/Navbar/Banner/Banner"
export default function Home({query}){
console.log(query)
return(
<div>

<Banner/>
<SimpleSlider/>
<PauseOnHover/>
<ProductCards/>
<SimpleSlider2/>
</div>

)

}