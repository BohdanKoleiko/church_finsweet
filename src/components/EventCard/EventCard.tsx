import React, { useEffect, useMemo, useState } from "react";
import { FC } from "react";
import Heading from "../Heading/Heading.tsx";
import "./EventCard.scss";

export interface EventCardProps {
   classNames?: string;
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
   children?: React.ReactNode;
}

const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthList = [
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

const formatDateTime = (date: Date) => {
   const day = dayList[date.getDay()];
   const month = monthList[date.getMonth()];
   const hour = date.getHours().toString().padStart(2, "0");
   const minute = date.getMinutes().toString().padStart(2, "0");

   return { day, month, hour, minute };
};

const EventCard: FC<EventCardProps> = ({
   classNames,
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
}) => {
   const [isFinished, setIsFinished] = useState(false);

   const startEvent = useMemo(() => new Date(startEventDate), [startEventDate]);
   const endEvent = useMemo(() => new Date(endEventDate), [endEventDate]);

   const {
      day: startDay,
      month: startMonth,
      hour: startHour,
      minute: startMinute,
   } = formatDateTime(startEvent);
   const { day: endDay, hour: endHour, minute: endMinute } = formatDateTime(endEvent);

   useEffect(() => {
      const handleActualTime = () => {
         const timeRemaining = endEvent.getTime() - Date.now();
         if (timeRemaining <= 0) {
            setIsFinished(true);
            handleEventStatus?.(eventID, true);
         }
      };

      if (!isFinished) {
         const intervalID = setInterval(handleActualTime, 1000);
         return () => clearInterval(intervalID);
      }
   }, [isFinished, eventID, handleEventStatus, endEvent]);

   const renderEventSchedule = () => (
      <div className="schedule">
         <div className="schedule__date">
            <figure className="schedule__image">
               <img
                  src="../images/icons/clock.svg"
                  alt="Icon illustrates clock as a symbol of upcoming event date"
               />
            </figure>
            <div>
               <div className="schedule__start-event">{`${startDay} ${startHour}:${startMinute} GMT`}</div>
               <div className="schedule__end-event">{`${endDay} ${endHour}:${endMinute} GMT`}</div>
            </div>
         </div>
         {eventVenue && (
            <div className="schedule__destination">
               <figure className="schedule__image">
                  <img
                     src="../images/icons/destination.svg"
                     alt="Icon illustrates point on the map"
                  />
               </figure>
               <p>{eventVenue}</p>
            </div>
         )}
      </div>
   );

   const renderHeader = () => (
      <Heading classNames="event__heading" headingTxt={eventName} HeadingType="h5">
         <div className="event__sup-heading sup-heading">
            {eventStatus ? "Finished event" : "Upcoming event"}
         </div>
      </Heading>
   );

   return (
      <div
         className={`event ${
            preview ? "event-preview" : ""
         } event_${backgroundColor} ${classNames}`}
      >
         {renderHeader()}
         {eventDescription && <p className="event__descr">{eventDescription}</p>}
         {renderEventSchedule()}
         <div className="event__schedule">
            <span className="event__start-day">
               {String(startEvent.getDate()).padStart(2, "0")}
            </span>
            <span className="event__start-month">{startMonth}</span>
         </div>
         {children}
         {preview && eventImage && (
            <figure className="event__img-wrapper preview-img-container">
               <img className="preview-img-container__img" src={eventImage} alt={eventAltImg} />
            </figure>
         )}
      </div>
   );
};

export default EventCard;
