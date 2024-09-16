//import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import "./ContactForm.scss";

interface ContactFormProps {
   action?: string;
   method?: string;
   inputFilds?: {
      type: string;
      name: string;
      id?: string;
      placeholder?: string;
      required?: boolean;
   }[];
   textareas?: {
      name: string;
      rows?: number;
      cols?: number;
      id?: string;
      placeholder?: string;
      required?: boolean;
   }[];
}

const ContactForm = function ({
   action = "",
   method = "",
   inputFilds,
   textareas,
}: ContactFormProps) {
//   const [formData, setFormData] = useState({ inputFilds: {}, textareas: {} });

   const handlerFormSubmit = function (event: { preventDefault: () => void }) {
      event.preventDefault();
   };

   const handleInputChange = function (type, name, value) {
      setFormData((prevState) => ({
         ...prevState,
         [type]: {
            ...prevState[type],
            [name]: value,
         },
      }));
   };

   return (
      <form action={action} method={method} className="contact-form" onSubmit={handlerFormSubmit}>
         {inputFilds &&
            inputFilds.map((fild, i) => (
               <input
                  key={i}
                  type={fild.type}
                  name={fild.name}
                  id={fild.id ? fild.id : ""}
                  placeholder={fild.placeholder ? fild.placeholder : ""}
                  required={fild.required ? fild.required : false}
                  className="contact-form__input"
                  onChange={(e) => {
                     handleInputChange("inputFilds", fild.name, e.target.value);
                  }}
               />
            ))}
         {textareas &&
            textareas.map((area, i) => (
               <textarea
                  key={i}
                  name={area.name}
                  id={area.id ? area.id : ""}
                  cols={area.cols}
                  rows={area.rows}
                  placeholder={area.placeholder ? area.placeholder : ""}
                  required={area.required ? area.required : false}
                  className="contact-form__textarea"
                  onChange={(e) => {
                     handleInputChange("textareas", area.name, e.target.value);
                  }}
               ></textarea>
            ))}

         <Button btn="primary" btnType="submit" btnPadding="p24" text="Send message" />
      </form>
   );
};

export default ContactForm;
