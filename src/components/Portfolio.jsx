import React from "react";
import reactSmooth from "../assets/portfolio/jsw.png";
import aeromod from "../assets/portfolio/aeromod.png";
import robot from "../assets/portfolio/robot1.jpg";
import web3 from "../assets/portfolio/web3.jpg";
import car1 from "../assets/portfolio/car2.jpeg";
import motor from "../assets/portfolio/motor2.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactSmooth,
      pptText: "PPT",
      docText: "DOC",
      docLink: "https://docs.google.com/document/d/1DrWs7rwFmNBb0Nu4jLkKuYiSGhbo5dwDiSgskTSHohE/edit",
      pptLink: "https://onedrive.live.com/edit.aspx?resid=B5E76D65E0588E51!146&ithint=file%2cpptx&ct=1691677722299&wdOrigin=OFFICECOM-WEB.MAIN.EDGEWORTH&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=1a9f75e5-50ad-4189-bd62-154a6514d73b&wdo=2"
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
      src: robot,
      pptText: "REPORT",
      docText: "CODE",
      docLink: "https://github.com/aryanraj4049/robot_motion_planning",
      pptLink: "https://github.com/aryanraj4049/robot_motion_planning/tree/main/Code"
    },
    {
      id: 4,
      src: web3,
      pptText: "CODE",
      docText: "REPORT",
      docLink: "https://onedrive.live.com/edit.aspx?resid=8933FBCD5EEF8F58!539&ithint=file%2cdocx&wdo=2&authkey=!AJ2sWlSdvjLVrio",
      pptLink: "https://github.com/aryanraj4049/WEB_3.O"
    },
    {
      id: 5,
      src: car1,
      pptText: "PPT",
      docText: "CODE",
      docLink: "https://github.com/aryanraj4049/radiatormatlab",
      pptLink: "https://docs.google.com/presentation/d/1UMfaDDEFD-nnU1XU3878_YBo9XTcZ1TmhIi1UcHUpFM/edit#slide=id.p"
    },
    {
      id: 6,
      src: motor,
      pptText: "PPT",
      docText: "CODE",
      docLink: "https://docs.google.com/presentation/d/1fAMpC0eEE0eFAr7Mb-xPN-47G9Pz71kIYJqIBemQ3GE/edit#slide=id.g1042aa19e59_0_10",
      pptLink: "https://docs.google.com/presentation/d/1fAMpC0eEE0eFAr7Mb-xPN-47G9Pz71kIYJqIBemQ3GE/edit#slide=id.p"
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
