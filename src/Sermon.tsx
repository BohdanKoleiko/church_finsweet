import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import EventCard from "./components/EventCard/EventCard.tsx";
import Button from "./components/Button/Button.tsx";
import "./Sermon.scss";
import { Link } from "react-router-dom";

const Sermon = function ({ setBGColor, events, handleEventStatus }) {
   return (
      <main className="main" onLoad={() => setBGColor("white")}>
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
                  {events && (
                     <EventCard
                        startEventDate={events[events.length - 1].startEventDate!}
                        endEventDate={events[events.length - 1].endEventDate!}
                        eventName={events[events.length - 1].eventName!}
                        eventVenue={events[events.length - 1].eventVenue}
                        eventDescription={events[events.length - 1].eventDescr}
                        preview
                        eventImage={events[events.length - 1].img}
                        eventAltImg={events[events.length - 1].imgAlt}
                        handleEventStatus={handleEventStatus}
                        eventStatus={events[events.length - 1].finished}
                        eventID={events[events.length - 1].id}
                     >
                        <Button
                           btnType="button"
                           btnPadding="p24"
                           text="Register"
                           classNames="seremon-preview__event-button"
                           btn="secondary"
                           link={`./${events[events.length - 1].id}`}
                        />
                     </EventCard>
                  )}
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
                  {events &&
                     events.map((event, index) => (
                        <Link to={"./" + event.id} key={index}>
                           <EventCard
                              startEventDate={event.startEventDate!}
                              endEventDate={event.endEventDate!}
                              eventName={event.eventName!}
                              eventDescription={event.eventDescr}
                              eventVenue={event.eventVenue}
                              handleEventStatus={handleEventStatus}
                              eventStatus={event.finished}
                              eventID={event.id}
                           />
                        </Link>
                     ))}
               </div>
            </div>
         </section>
      </main>
   );
};

export default Sermon;
