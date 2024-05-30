import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import "./AboutUs.scss";

const AboutUs = function (props) {
   props.setBGColor("white");

   return (
      <main className="about-us-main">
         <section className="about-us__intro">
            <Hero
               background="url(./images/about-us.jpg) center 14% / cover no-repeat"
               headingType="h2"
               headingText="Serving the world around us"
               supHeadingText="About us"
               headingColor="black"
            />
         </section>
      </main>
   );
};

export default AboutUs;
