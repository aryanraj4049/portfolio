import React from "react";

import dsa from "../assets/dsa.png"
import numpy from "../assets/numpy.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import matlab from "../assets/matlab.jpg";
import cad from "../assets/cad.jpg";
import panda from "../assets/panda.png";
import cpp from "../assets/cpp.png"
import sql from "../assets/sql.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cpp,
      title: "CPP",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: dsa,
      title: "DSA",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: numpy,
      title: "Numpy",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: panda,
      title: "Pandas",
      style: "shadow-blue-600",
    },

    {
      id: 8,
      src: matlab,
      title: "Matlab",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: cad,
      title: "CAD",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen mobile-gap"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>   
          <br/><br/> 
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
