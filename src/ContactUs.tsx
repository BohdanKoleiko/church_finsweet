import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import "./ContactUs.scss";

export default function ContactUs() {
   return (
      <main>
         <section className="contact-us__intro">
            <Hero
               headingType="h2"
               headingText="Get in touch with our CHURCH"
               headingColor="white"
               supHeadingText="Contact"
            />
         </section>
      </main>
   );
}
