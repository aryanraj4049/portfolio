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
        I  am Dhara Sharma, a final year Mechanical 
        UG at IIT Kanpur. My diverse interests 
        have led me to explore various fields. 
        I am passionate about Product Management, front-end web 
        development, Data Science, Machine Learning, DSA, and I combine these
        skills with my core mechanical expertise.

        </p>

        <br />

        <p className="text-xl">
        During my internship at Tata Steel, 
        I showcased my operational and analytical
        skills and successfully improved the reliability 
        of Mair Threading and Socketing line in ST finishing 
        area by reducing the damage cost from 3-4 lacs to 2k INR.<br/> <br/>
        With my knowledge in web development, 
        Data Science, DSA coupled 
        with my experience in mechanical engineering 
        , I am well-prepared to explore 
        innovative solutions at the intersection
        of these domains.
        </p>
      </div>
    </div>
  );
};

export default About;
