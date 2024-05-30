import React, { FC } from "react";
import { useState } from "react";
import Button from "../Button/Button.tsx";
import "./SubscribeForm.scss";

interface SubscribeFormProps {
   classNames?: string;
}

const SubscribeForm: FC<SubscribeFormProps> = function ({ classNames }) {
   const [subscrEmail, setSubscrEmail] = useState("");

   const handleSubmit = function (event) {
      event.preventDefault();
   };

   const handleSetSubscrEmail = function (value) {
      setSubscrEmail(value);
   };

   return (
      <form className={`form ${classNames ? classNames : ""}`} onSubmit={handleSubmit}>
         <div className="form__input-wrap">
            <input
               type="email"
               value={subscrEmail}
               name="subscribe"
               placeholder="Yourmail@gmail.com"
               onChange={(e) => {
                  handleSetSubscrEmail(e.target.value);
               }}
               className="form__subscr-email-input"
            />
            <Button btnType="submit" text="Subscribe" classNames="form__button" />
         </div>
      </form>
   );
};

export default SubscribeForm;
