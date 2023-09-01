import React from "react";
import HeroImage from "../assets/myImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hey There! I am Dhara Sharma
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Final Year Mechanical undergrad, IIT Kanpur passionate about Web
            dev, DSA, Data Science, Product management .<br></br>
            Top 10 in{" "}
            <a
              href="https://github.com/dharash20/Women_of_Mettle_6"
              target="Blank"
            >
              Women of Mettle 6 {" "}
            </a>
            ,  Interned{" "}
            <a href="https://docs.google.com/presentation/d/1utX9OU2eHNfwCxdIaKJ3SfgMNn0oCnh4/edit#slide=id.p1" target="Blank">
              @TATA Steel Limited
            </a>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
