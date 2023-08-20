
import OrderProgress from "../../Components/OrderProgress/OrderProgress";
import OurMission from "../../Components/OurMission/OurMission";

import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import Pricing from "../../components/Pricing";

const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Banner2></Banner2>
      <Pricing></Pricing>
      <OrderProgress></OrderProgress>
    <OurMission></OurMission>
    </div>
  );

};

export default Home;
