import React from "react";
import tata from "../assets/portfolio/tata.png";
import aeromod from "../assets/portfolio/aeromod.png";
import imagep from "../assets/portfolio/ipcv.jpg";
import wom from "../assets/portfolio/wom.png";
import algo from "../assets/portfolio/algo101x.png";
import disloc from "../assets/portfolio/dislocation.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tata,
      pptText: "PPT",
      docText: "DOC",
      docLink: "https://docs.google.com/presentation/d/1utX9OU2eHNfwCxdIaKJ3SfgMNn0oCnh4/edit#slide=id.p1",
      pptLink: "https://docs.google.com/presentation/d/1utX9OU2eHNfwCxdIaKJ3SfgMNn0oCnh4/edit#slide=id.p1"
    },
    {
      id: 2,
      src: aeromod,
      pptText: "DEMO" ,
      docText: "CODE",
      docLink: "https://github.com/aryanraj4049/club-website-master-2",
      pptLink: "https://aryanraj4049.github.io/club-website-master-2/"
    },
    {
      id: 3,
      src: imagep,
      pptText: "REPORT",
      docText: "CODE",
      docLink: "https://github.com/dharash20/Image_processing_and_Computer_Vision_using_python",
      pptLink: "https://github.com/dharash20/Image_processing_and_Computer_Vision_using_python"
    },
    {
      id: 4,
      src: wom,
      pptText: "DOC",
      docText: "PPT",
      docLink: "https://github.com/dharash20/Women_of_Mettle_6",
      pptLink: "https://github.com/dharash20/Women_of_Mettle_6"
    },
    {
      id: 5,
      src: algo,
      pptText: "PPT",
      docText: "CODE",
      docLink: "",
      pptLink: ""
    },
    {
      id: 6,
      src: disloc,
      pptText: "PPT",
      docText: "CODE",
      docLink: "https://github.com/dharash20/Dislocation-Dynamics",
      pptLink: "https://github.com/dharash20/Dislocation-Dynamics"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen mobile-gap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, pptText, docText,docLink,pptLink}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <a href={pptLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {pptText}
                </button>
              </a>
              <a href={docLink} target="blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {docText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
