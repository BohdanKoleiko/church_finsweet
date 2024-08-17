import React from "react";
import { FC } from "react";
import Heading from "../Heading/Heading.tsx";
import "./EventCard.scss";

interface EventCardProps {
   backgroundColor?: "light-orange" | "white";
   startEventDate: string;
   endEventDate: string;
   eventDescription?: string;
   eventVenue?: string;
   eventName: string;
   preview?: boolean;
   eventImage?: string;
   eventAltImg?: string;
   eventStatus?: boolean;
   handleEventStatus?: Function;
   eventID?: number;
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

const EventCard: FC<EventCardProps> = function (props) {
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
      eventStatus,
      handleEventStatus,
      eventID = 0,
      children,
   } = props;

   const eventStatusText = ["Upcoming event", "Finished event"];

   const startEvent: Date = startEventDate ? new Date(startEventDate) : new Date();
   const endEvent: Date = endEventDate ? new Date(endEventDate) : new Date();

   const handleActualTime = function (endEvent: any) {
      if (Math.floor(endEvent - Date.now()) <= 0) {
         handleEventStatus(eventID, true);
         clearInterval(intervalID);
      } else {
         handleEventStatus(eventID, false);
         clearInterval(intervalID);
      }
   };

   const intervalID = setInterval(() => handleActualTime(endEvent), 0);

   return (
      <>
         <div className={`event event_${backgroundColor} ${preview ? "event__preview" : ""}`}>
            <Heading headingTxt={`${eventName}`} HeadingType="h5" classNames="event__heading">
               <div className="event__sup-heading sup-heading">
                  {eventStatus ? eventStatusText[1] : eventStatusText[0]}
               </div>
            </Heading>

            {eventDescription ? <p className="event__descr">{eventDescription}</p> : ""}

            <div className="schedule">
               <div className="schedule__date">
                  <figure className="schedule__image">
                     <img
                        src="../images/icons/clock.svg"
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
                        src="../images/icons/destination.svg"
                        alt="Icon illustrates point on the map"
                     />
                  </figure>
                  {eventVenue ? <p>{eventVenue}</p> : ""}
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

export default EventCard;
