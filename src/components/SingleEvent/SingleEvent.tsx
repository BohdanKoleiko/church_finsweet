import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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

const SingleEvent = function ({ setBGColor }) {
   const url = "/datas/events.json";
   const { sermonID } = useParams();
   const navigate = useNavigate();
   const [certainEvent, setCertainEvent] = useState<SingleEventProps | null>(null);
   const [events, setEvents] = useState<SingleEventProps[] | null>(null);

   const postID = sermonID ? +sermonID : 0;

   const fetchEvents = useCallback(async () => {
      try {
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
         }

         const eventsData = await response.json();
         //const event = data.find((item: SingleEventProps) => item.id === postID);

         if (!eventsData) {
            navigate("..", { relative: "path" });
         } else {
            //setCertainEvent(event);
            setEvents(eventsData);
         }
      } catch (error) {
         console.error(error);
      }
   }, [navigate]);

   useEffect(() => {
      fetchEvents();
   }, [fetchEvents]);

   const handleEventStatus = (eventID: number, status: boolean) => {
      setEvents((prevState) => {
         return prevState?.map((event) =>
            event.id === eventID ? { ...event, finished: status } : event,
         );
      });
   };

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
