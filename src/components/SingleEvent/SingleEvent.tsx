import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading.tsx";
import EventCard from "../EventCard/EventCard.tsx";
import RegisterEventForm from "../Forms/RegisterEventForm.tsx";
import { ParagraphBlockProps } from "../SingleBlog/SingleBlog.tsx";
import "./SingleEvent.scss";

interface CertainEventProps {
   id: number;
   eventName: string;
   eventDescr: string;
   startEventDate: string;
   endEventDate: string;
   eventVenue: string;
   img: string;
   imgAlt: string;
   finished: boolean;
   paragraphBlock: ParagraphBlockProps[];
}

interface SingleEventProps {
   setBGColor: (arg0: string) => {};
   events: CertainEventProps[];
   handleEventStatus: () => {};
}

const months: string[] = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

const SingleEvent = function ({ setBGColor, events, handleEventStatus }: SingleEventProps) {
   const navigate = useNavigate();
   const { sermonID } = useParams<{ sermonID: string }>();
   const [certainEvent, setCertainEvent] = useState<CertainEventProps | null>(null);

   useEffect(() => {
      if (events) {
         const fondEvent = events.find((event) => event.id === Number(sermonID));

         if (!fondEvent) {
            navigate("..", { relative: "path" });
         }

         setCertainEvent(fondEvent!);
      }
   }, [events, navigate, sermonID]);

   if (!certainEvent) return null;

   const startEventDate = new Date(certainEvent.startEventDate);
   const startEventParsed = `${startEventDate.getDate().toString().padStart(2, "0")} ${
      months[startEventDate.getMonth()]
   }, ${startEventDate.getFullYear()}`;

   return (
      <main className="main" onLoad={() => setBGColor("#F5F2F0")}>
         <section className="single-event">
            <div className="container">
               <div className="single-event__wrapper">
                  <div>
                     <figure className="single-event__image-container">
                        <img src={certainEvent.img} alt={certainEvent.imgAlt} />
                     </figure>

                     <Heading
                        headingTxt={certainEvent.eventName}
                        HeadingType="h2"
                        classNames="single-event__title"
                     >
                        <div className="single-event__event-status sup-heading sup-heading_gradient">
                           {certainEvent.finished ? "Finished event" : "Upcoming event"}
                        </div>
                     </Heading>

                     {certainEvent.paragraphBlock.map((pBlock, i) => {
                        const TagType = (pBlock.textType as keyof JSX.IntrinsicElements) || "p";
                        return (
                           <TagType className="single-event__text" key={i}>
                              {pBlock.text}
                           </TagType>
                        );
                     })}
                  </div>

                  <div className="single-event__form-container">
                     <RegisterEventForm
                        venue={certainEvent.eventVenue}
                        startEventDate={startEventParsed}
                        eventStatus={certainEvent.finished}
                        classNames={"single-event__form"}
                     />
                  </div>
               </div>
            </div>
         </section>

         <section className="all-events">
            <div className="container">
               {events && (
                  <>
                     <Heading
                        headingTxt="Upcoming Sermons"
                        HeadingType="h2"
                        textPosition="center"
                        classNames="all-events__heading"
                     />

                     <div className="seremon-events__event-cards">
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
   );
};

export default SingleEvent;
