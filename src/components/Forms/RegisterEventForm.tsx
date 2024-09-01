import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import styles from "./RegisterEventForm.module.scss";

interface registerDataProps {
   username: string;
   email: string;
}

interface RegisterEventFormProps {
   venue: string;
   startEventDate: any;
   eventStatus: boolean;
   classNames?: any;
}

const RegisterEventForm = function ({
   venue,
   startEventDate,
   eventStatus,
   classNames,
}: RegisterEventFormProps) {
   const [registerData, setRegisterData] = useState<registerDataProps>({
      username: "",
      email: "",
   });

   const handleSubmit = function (event) {
      event.preventDefault();

      if (!eventStatus) {
         console.log("submit");
      }
   };

   const handleSetSubscrEmail = function (prop: string, value: string) {
      setRegisterData((prevValue) => ({ ...prevValue, [prop]: value }));
   };

   return (
      <form onSubmit={handleSubmit} className={`${styles.eventForm} ${classNames}`}>
         <h4 className={styles.eventFormTitle}>rEGISTER nOW</h4>

         <div className={styles.eventSchedule}>
            <div className={styles.eventScheduleDestination}>
               <figure className={`${styles.eventScheduleImageWrapper} ${styles.alignBottom}`}>
                  <img
                     src="../images/icons/destination.svg"
                     alt="Icon illustrates point on the map"
                     className={`${styles.eventScheduleImage}`}
                  />
               </figure>
               {venue ? <span className={styles.eventScheduleText}>{venue}</span> : ""}
            </div>

            <div className={styles.eventScheduleDate}>
               <figure className={`${styles.eventScheduleImageWrapper} ${styles.alignCenter}`}>
                  <img
                     src="../images/icons/clock.svg"
                     alt="Icon illustrates clock as a symbol of upcoming event date"
                     className={`${styles.eventScheduleImage}`}
                  />
               </figure>
               <span className={styles.eventScheduleText}>{startEventDate}</span>
            </div>
         </div>

         <label className={styles.input} htmlFor="username">
            <span className={styles.inputText}>Full Name</span>
            <input
               className={styles.inputUsername}
               id="username"
               type="text"
               name="username"
               value={registerData.username}
               onChange={(e) => {
                  handleSetSubscrEmail("username", e.target.value);
               }}
               disabled={eventStatus}
               autoComplete="text"
            />
         </label>

         <label className={styles.input} htmlFor="email">
            <span className={styles.inputText}>Email</span>
            <input
               className={styles.inputEmail}
               id="email"
               type="email"
               name="email"
               value={registerData.email}
               onChange={(e) => {
                  handleSetSubscrEmail("email", e.target.value);
               }}
               disabled={eventStatus}
               autoComplete="email"
            />
         </label>

         <Button
            btn="primary"
            btnPadding="p24"
            btnType="submit"
            text="Register now"
            disabled={eventStatus}
            classNames={styles.eventFormButton}
         />
      </form>
   );
};

export default RegisterEventForm;
