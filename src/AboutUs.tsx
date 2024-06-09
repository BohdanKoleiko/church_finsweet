import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import ImgCards from "./components/ImgCards/ImgCards.tsx";
import CardWithTextAndImage from "./components/CardWithTextAndImage/CardWithTextAndImage.tsx";
import CardOfChurchMember from "./components/CardOfChurchMember/CardOfChurchMember.tsx";
import "./AboutUs.scss";

const AboutUs = function ({ setBGColor }) {
   return (
      <main className="about-us-main" onLoad={() => setBGColor("white")}>
         <section className="about-us__intro">
            <Hero
               background="url(./images/about-us.jpg) center 14% / cover no-repeat"
               headingType="h2"
               headingText="Serving the world around us"
               supHeadingText="About us"
               headingColor="black"
            />
         </section>

         <section className="welcome">
            <div className="container">
               <Heading
                  headingTxt="Love and compassion"
                  HeadingType="h2"
                  textPosition="center"
                  classNames="title title_margin-32"
               >
                  <div className="sup-title">Welcome to our CHURCH</div>
               </Heading>
               <p className="wysiwyg wysiwyg_margin-48 welcome__wysiwyg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
               </p>

               <ImgCards classNames="welcome__img-cards" />

               <div className="goals">
                  <div>
                     <Heading
                        HeadingType="h4"
                        headingTxt="STRIVING FOR A BETTER TOMORROW"
                        classNames="title title_margin-16"
                     >
                        <div className="sup-title">OUR MISSIOn & Vision</div>
                     </Heading>
                     <p className="wysiwyg wysiwyg_margin-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum.
                     </p>
                  </div>
                  <div>
                     <Heading
                        HeadingType="h4"
                        headingTxt="BRINgING PEACE AND JOY TO THE WORLD"
                        classNames="title title_margin-16"
                     >
                        <div className="sup-title">WHAT WE DO</div>
                     </Heading>
                     <p className="wysiwyg wysiwyg_margin-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="benefits">
            <div className="container">
               <Heading
                  headingTxt="THE benefits of joining our church"
                  HeadingType="h2"
                  textPosition="center"
                  classNames="title title_margin-64"
               >
                  <div className="sup-title">BENEFITS</div>
               </Heading>

               <CardWithTextAndImage
                  title="find fulfillment and joy"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                  imgSrc="./images/about-us/fulfillment_joy.png"
                  imgAlt="fulfillment joy"
                  imgObjectPosition="top"
                  justifyContent="center"
                  classNames="benefits__card-benefit"
               />

               <CardWithTextAndImage
                  title="shared values"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                  imgSrc="./images/about-us/shared_values.png"
                  imgAlt="shared values"
                  flexDirection="row-reverse"
                  justifyContent="center"
                  classNames="benefits__card-benefit"
               />

               <CardWithTextAndImage
                  title="charity events"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                  imgSrc="./images/about-us/charity_events.png"
                  imgAlt="charity events"
                  justifyContent="center"
                  classNames="benefits__card-benefit"
               />

               <CardWithTextAndImage
                  title="All are welcome"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                  imgSrc="./images/about-us/welcome.png"
                  imgAlt="welcome"
                  flexDirection="row-reverse"
                  justifyContent="center"
                  classNames="benefits__card-benefit"
               />
            </div>
         </section>

         <section className="church-members">
            <div className="container">
               <Heading
                  headingTxt="meet our Inspirational team"
                  HeadingType="h2"
                  textPosition="center"
                  classNames="title title_margin-32"
               >
                  <div className="sup-title">church members</div>
               </Heading>

               <div className="church-members__members-wrapper">
                  <CardOfChurchMember
                     src="./images/about-us/Kim_Bowen.png"
                     alt="Kim Bowen"
                     memberName="Kim Bowen"
                     memberRank="Pastor, Church"
                     facebookLink="https://www.facebook.com/"
                     xLink="https://x.com/"
                     linkedinLink="https://www.linkedin.com/"
                     classNames="church-members__member"
                  />
                  <CardOfChurchMember
                     src="./images/about-us/Danielle_Watkins.png"
                     alt="Danielle Watkins"
                     memberName="Danielle Watkins"
                     memberRank="Pastor, Church"
                     facebookLink="https://www.facebook.com/"
                     xLink="https://x.com/"
                     linkedinLink="https://www.linkedin.com/"
                     classNames="church-members__member"
                  />
                  <CardOfChurchMember
                     src="./images/about-us/Naomi_Craig.png"
                     alt="Naomi_Craig"
                     memberName="Naomi Craig"
                     memberRank="Pastor, Church"
                     facebookLink="https://www.facebook.com/"
                     xLink="https://x.com/"
                     linkedinLink="https://www.linkedin.com/"
                     classNames="church-members__member"
                  />
                  <CardOfChurchMember
                     src="./images/about-us/Santos_Payne.png"
                     alt="Santos_Payne"
                     memberName="Santos Payne"
                     memberRank="Pastor, Church"
                     facebookLink="https://www.facebook.com/"
                     xLink="https://x.com/"
                     linkedinLink="https://www.linkedin.com/"
                     classNames="church-members__member"
                  />
               </div>
            </div>
         </section>
      </main>
   );
};

export default AboutUs;
