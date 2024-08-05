import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";

interface ButtonProps {
   btn?: "primary" | "secondary" | "text";
   btnType?: "button" | "submit" | "reset";
   text?: string;
   btnPadding?: "p24" | "p20";
   link?: string;
   logo?: string;
   classNames?: string;
}

const Button = function ({
   btn,
   btnType = "button",
   text,
   btnPadding,
   link,
   logo,
   classNames,
}: ButtonProps) {
   let navigate = useNavigate();

   const handleRouteRedirection = function (path) {
      navigate(path);
   };

   const buttonNoImageClasses = {
      btn: btn ? `button_${btn}` : "",
      btnPadding: btnPadding ? `button_${btnPadding}` : "",
      classNames: classNames ? classNames : "",
   };

   const buttonClasses = {
      btn: btn ? `button_${btn}` : "",
      btnLogo: logo ? `button__logo` : "",
      btnPadding: btnPadding ? `button_${btnPadding}` : "",
      classNames: classNames ? classNames : "",
   };

   return !logo ? (
      <button
         type={btnType}
         className={`button ${Object.values(buttonNoImageClasses)
            .filter((value) => value)
            .join(" ")}`}
         onClick={link ? () => handleRouteRedirection(link) : undefined}
      >
         {text}
      </button>
   ) : (
      <button
         type={btnType}
         className={`button ${Object.values(buttonClasses)
            .filter((value) => value)
            .join(" ")}`}
         onClick={link ? () => handleRouteRedirection(link) : undefined}
      >
         <span className="button__text">{text}</span>
         {logo && <img src={logo} alt="just icon" />}
      </button>
   );
};

export default Button;
