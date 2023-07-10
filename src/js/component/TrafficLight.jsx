// index is state variable, setIndex is setter function
// const [index, setIndex] = useState(o);
import Light from "./Light";
// import { useTrafficLight } from "react-hooks-helper";
import React, { useState, useEffect } from "react";

const lightDurations = [3000, 2000, 1000];

export const TrafficLight = ({ initialValue }) => {
  const [colorIndex, setColorIndex] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="trafficLight rounded-5">
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  );
};


