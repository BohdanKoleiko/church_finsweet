import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
   btn?: "primary" | "secondary";
   btnType?: "button" | "submit" | "reset";
   text?: string;
   btnPadding?: "p24" | "p20";
   classNames?: string;
}

const Button: FC<ButtonProps> = function ({
   btn = "primary",
   btnType = "button",
   text = "Button",
   btnPadding = "p24",
   classNames,
}) {
   return (
      <button
         type={btnType}
         className={`button button__${btn} button_${btnPadding} ${classNames ? classNames : ""}`}
      >
         {text}
      </button>
   );
};

export default Button;
