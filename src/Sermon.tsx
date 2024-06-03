import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import Event from "./components/Event/Event.tsx";
import Button from "./components/Button/Button.tsx";
import { events } from "./BD/events.js";
import "./Sermon.scss";

const Sermon = function () {
   return (
      <main className="main">
         <section className="seremon-hero">
            <Hero
               background="url(./images/sermons-hero.jpg) center 25% / cover no-repeat"
               headingColor="black"
               headingType="h2"
               headingText="take part in OUR SERMON"
               supHeadingText="SERMON"
            ></Hero>
         </section>

         <section className="seremon-preview">
            <div className="container">
               <Heading
                  headingTxt="join us and become part of something great"
                  HeadingType="h2"
                  textPosition="center"
                  classNames="seremon-preview__title"
               >
                  <div className="seremon-preview__sup-title">Upcoming SERMONS</div>
               </Heading>

               <div className="seremon-preview__event">
                  <Event
                     startEventDate={events[events.length - 1].startEventDate}
                     endEventDate={events[events.length - 1].endEventDate}
                     eventName={events[events.length - 1].eventName}
                     eventVenue={events[events.length - 1].eventVenue}
                     eventDescription={events[events.length - 1].eventDescr}
                     preview
                     eventImage={events[events.length - 1].img}
                     eventAltImg={events[events.length - 1].imgAlt}
                  >
                     <Button
                        text="Register"
                        classNames="seremon-preview__event-button"
                        btn="secondary"
                     />
                  </Event>
               </div>
            </div>
         </section>

         <section className="seremon-events">
            <div className="container">
               <Heading
                  headingTxt="View All Events"
                  HeadingType="h2"
                  classNames="seremon-events__title"
               />

               <div className="seremon-events__wrapper">
                  {events.map((event, index) => (
                     <Event
                        startEventDate={event.startEventDate}
                        endEventDate={event.endEventDate}
                        eventName={event.eventName}
                        eventDescription={event.eventDescr}
                        eventVenue={event.eventVenue}
                        key={index}
                     />
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
};

export default Sermon;
