

import SimpleSlider from "../Corosouls/Corosoul"
import SimpleSlider2 from "../Corosouls/Corosoul2"
import PauseOnHover from "../Corosouls/SlidingCards"
import Reccommendations from "./Products/Reccommendations"


export default function Home(){


setTimeout(function () {
 document.querySelector(".home").innerHTML = null;
}, 3000);



return (
  <div >
    <SimpleSlider />
    <div style={{ display: "flex", justifyContent: "center" }} className="home">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loader"
      />
    </div>
    ;
    <PauseOnHover />
    <Reccommendations />
    <SimpleSlider2 />
  </div>
);

}