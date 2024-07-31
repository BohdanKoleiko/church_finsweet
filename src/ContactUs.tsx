import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import ContactForm from "./components/Forms/ContactForm.tsx";
import Socials from "./components/Socials/Socials.tsx";
import "./ContactUs.scss";

const inputFieldsData = [
   {
      type: "text",
      name: "fullName",
      placeholder: "Your full Name",
      required: true,
   },
   {
      type: "email",
      name: "email",
      placeholder: "Your Email",
      required: true,
   },
   {
      type: "text",
      name: "queryRelated",
      placeholder: "Query Related",
      required: true,
   },
];
const socialImages = [
   {
      imageLink: "./images/icons/facebook_black_logo.svg",
      altText: "facebook logo",
      linkToSocial: "https://www.facebook.com",
   },
   {
      imageLink: "./images/icons/x_black_logo.svg",
      altText: "x(twitter) logo",
      linkToSocial: "https://twitter.com",
   },
   {
      imageLink: "./images/icons/linkedin_black_logo.svg",
      altText: "linkedin logo",
      linkToSocial: "https://www.linkedin.com",
   },
];

const textAreasData = [{ name: "message", placeholder: "Message", required: true }];

const ContactUs = function ({ setBGColor }) {
   useEffect(() => {
      setBGColor("#F5F2F0");
   });

   return (
      <main className="main">
         <section className="contact-us">
            <Hero
               headingType="h2"
               headingText="Get in touch with our CHURCH"
               headingColor="white"
               supHeadingText="Contact"
               background="url(./images/contact-us_hero.jpg) center / cover no-repeat"
               classNames="contact-us__hero"
            />
         </section>

         <section className="contacts">
            <div className="container">
               <Heading HeadingType="h5" headingTxt="Contact form:" classNames="contacts__title" />
               <div className="contacts__grid">
                  <ContactForm inputFilds={inputFieldsData} textareas={textAreasData} />

                  <div className="contacts__adresses">
                     <div className="contacts__item">
                        <Socials title="Address">
                           <a
                              href="https://maps.app.goo.gl/bRMzTgxfJMLo7oM88"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              NH 234 Public Square San Francisco 65368
                           </a>
                        </Socials>
                     </div>

                     <div className="contacts__item">
                        <Socials title="Contact Details">
                           <a className="contacts__phone" href="tel:+4805550103">
                              (480) 555-0103
                           </a>{" "}
                           <a className="contacts__mail" href="mailto:finsweet@example.com">
                              finsweet@example.com
                           </a>
                        </Socials>
                     </div>

                     <div className="contacts__item">
                        <Socials title="Find us here">
                           <div className="contacts__social-wrapper">
                              {socialImages.map((social, i) => (
                                 <a
                                    className="contacts__social-link"
                                    href={social.linkToSocial}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={i}
                                 >
                                    <img
                                       className="contacts__social-image"
                                       src={social.imageLink}
                                       alt={social.altText}
                                    />
                                 </a>
                              ))}
                           </div>
                        </Socials>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default ContactUs;
