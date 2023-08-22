import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white mobile-gap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className>
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-2">
        I  am Aryan Raj, a final year Mechanical 
        UG at IIT Kanpur. My diverse interests 
        have led me to explore various fields. 
        I am passionate about full stack web 
        development, WEB3.0, blockchain, 
        and cryptography, and I combine these
        skills with my core mechanical expertise.
        As a coordinator in the Aeromodelling club and a member of 
        the IITK Motorsports team, I gained hands-on
        experience in building RC planes and designing
        a formula electric car.

        </p>

        <br />

        <p className="text-xl">
        During my internship at JSW Steel, 
        I showcased my operational and supply chain
        skills and successfully achieved a 100% improvement 
        in iron oxide dispatch and made significant enhancements
        to the supply chain processes.<br/> <br/>
        With my knowledge in web development, 
        blockchain, and cryptography, coupled 
        with my experience in mechanical engineering 
        and EVs, I am well-prepared to explore 
        innovative solutions at the intersection
        of these domains.
        </p>
      </div>
    </div>
  );
};

export default About;
