import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading.tsx";
import EventCard from "../EventCard/EventCard.tsx";
import { ParagraphBlockProps } from "../SingleBlog/SingleBlog";
import "./SingleEvent.scss";

export interface SingleEventProps {
   id: number;
   eventName?: string;
   startEventDate?: string;
   endEventDate?: string;
   eventVenue?: string;
   eventDescr?: string;
   img?: string;
   imgAlt?: string;
   finished: boolean;
   body?: ParagraphBlockProps[];
}

const SingleEvent = function ({ setBGColor, events, handleEventStatus }) {
   return (
      events && (
         <main className="main" onLoad={() => setBGColor("#F5F2F0")}>
            <section className="single-event">
               <div className="container">
                  <div className="single-event__wrapper"></div>
               </div>
            </section>

            <section>
               <div className="container">
                  {events && (
                     <>
                        <Heading
                           headingTxt="Upcoming Sermons"
                           HeadingType="h2"
                           textPosition="center"
                        />

                        <div className="seremon-events__wrapper">
                           {events
                              .filter((event) => !event.finished)
                              .map((event, index) => (
                                 <Link to={"/sermons/" + event.id} key={index}>
                                    <EventCard
                                       startEventDate={event.startEventDate!}
                                       endEventDate={event.endEventDate!}
                                       eventName={event.eventName!}
                                       eventDescription={event.eventDescr}
                                       eventVenue={event.eventVenue}
                                       handleEventStatus={handleEventStatus}
                                       eventStatus={event.finished}
                                       eventID={event.id}
                                       backgroundColor="white"
                                    />
                                 </Link>
                              ))}
                        </div>
                     </>
                  )}
               </div>
            </section>
         </main>
      )
   );
};

export default SingleEvent;
