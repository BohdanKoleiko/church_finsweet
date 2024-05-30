import React from "react";
import { FC, useState } from "react";
import Heading from "../Heading/Heading.tsx";
import "./Event.scss";

interface EventProps {
   backgroundColor?: "light-orange" | "white";
   startEventDate: string;
   endEventDate: string;
   eventDescription?: string;
   eventVenue?: string;
   eventName: string;
   preview?: boolean;
   eventImage?: string;
   eventAltImg?: string;
   children?: any;
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
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

const Event: FC<EventProps> = function (props) {
   const {
      backgroundColor = "light-orange",
      startEventDate,
      endEventDate,
      eventDescription,
      eventVenue,
      eventName,
      preview,
      eventImage,
      eventAltImg,
      children,
   } = props;

   const [eventStatus, setEventStatus] = useState("Upcoming event");

   const startEvent: any = startEventDate ? new Date(startEventDate) : "";
   const endEvent: any = endEventDate ? new Date(endEventDate) : "";

   const handleActualTime = function (endEvent: number) {
      if (Math.floor(endEvent - Date.now()) <= 0) {
         setEventStatus("Finished event");
         clearInterval(intervalID);
      }
   };

   const intervalID = setInterval(() => handleActualTime(endEvent), 3000);

   return (
      <>
         <div className={`event event_${backgroundColor} ${preview ? "event__preview" : ""}`}>
            <Heading headingTxt={`${eventName}`} HeadingType="h5" classNames="event__heading">
               <div className="event__sup-heading sup-heading">{eventStatus}</div>
            </Heading>

            <p className="event__descr">
               {eventDescription
                  ? eventDescription
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>

            <div className="schedule">
               <div className="schedule__date">
                  <figure className="schedule__image">
                     <img
                        src="./images/icons/clock.svg"
                        alt="Icon illustrates clock as a symbol of upcoming event date"
                     />
                  </figure>
                  <div>
                     <div className="schedule__start-event">
                        {startEvent
                           ? `${days[startEvent.getDay()]} ${startEvent.getHours()}:${
                                startEvent.getMinutes() === 0
                                   ? "0" + startEvent.getMinutes()
                                   : startEvent.getMinutes()
                             } GMT`
                           : "wrong data format"}
                     </div>

                     <div className="schedule__end-event">
                        {endEvent
                           ? `${days[endEvent.getDay()]} ${endEvent.getHours()}:${
                                endEvent.getMinutes() === 0
                                   ? "0" + endEvent.getMinutes()
                                   : endEvent.getMinutes()
                             } GMT`
                           : "wrong data format"}
                     </div>
                  </div>
               </div>

               <div className="schedule__destination">
                  <figure className="schedule__image">
                     <img
                        src="./images/icons/destination.svg"
                        alt="Icon illustrates point on the map"
                     />
                  </figure>
                  <p>{eventVenue ? eventVenue : "No 233 Main St. New York, United States"}</p>
               </div>
            </div>

            <div className="event__schedule">
               <span className="event__start-day">
                  {startEvent.getDate().toString().length === 1
                     ? `0${startEvent.getDate()}`
                     : startEvent.getDate()}
               </span>
               <span className="event__start-month">{months[startEvent.getMonth()]}</span>
            </div>

            {children}
         </div>
         {preview && (
            <figure className="preview-img">
               <img src={eventImage} alt={eventAltImg} />
            </figure>
         )}
      </>
   );
};

export default Event;
