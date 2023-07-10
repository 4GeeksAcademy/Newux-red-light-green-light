import React from "react";

import { TrafficLight } from "./TrafficLight";

//create your first component
const Home = () => {
  return (
    <div className="container" style={{backgroundImage: "url(" + "https://i.gifer.com/KDYP.gif" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <div className="home">
        <TrafficLight initialValue={0} />
      </div>
    </div>
  );
};

export default Home;
