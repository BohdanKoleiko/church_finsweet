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
   } = props;

   const [isFinished, setIsFinished] = useState(false);
   const eventStatusText = ["Upcoming event", "Finished event"];
   const startEvent: Date = new Date(startEventDate);
   const endEvent: Date = useMemo(() => new Date(endEventDate), [endEventDate]);
   const [intervalTime, setIntervalTime] = useState(10);

   useEffect(() => {
      let intervalID: string | number | NodeJS.Timeout | undefined;

      const handleActualTime = function () {
         const timeRemaining = endEvent.getTime() - Date.now();
         if (timeRemaining <= 0) {
            setIsFinished(true);
            handleEventStatus?.(eventID, true);
            setIntervalTime(1000);
         }
      };

      if (!isFinished) {
         intervalID = setInterval(() => {
            handleActualTime();
         }, intervalTime);
      } else {
         clearInterval(intervalID);
      }

      return () => clearInterval(intervalID);
   }, [endEvent, eventID, handleEventStatus, intervalTime, isFinished]);

   if (preview) {
      return (
         <div className={`event event-preview ${classNames}`}>
            <div className={`event-preview__event-info event_${backgroundColor}`}>
               <Heading classNames="event__heading" headingTxt={`${eventName}`} HeadingType="h5">
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
                              ? `${days[startEvent.getDay()].trim()} ${startEvent.getHours()}:${
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

            <figure className="event__img-wrapper preview-img-container">
               <img className="preview-img-container__img" src={eventImage} alt={eventAltImg} />
            </figure>
         </div>
      );
   }

   return (
      <div className={`event event_${backgroundColor} ${classNames}`}>
         <Heading classNames="event__heading" headingTxt={`${eventName}`} HeadingType="h5">
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
                        ? `${days[startEvent.getDay()].trim()} ${startEvent.getHours()}:${
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
   );
};

export default EventCard;
