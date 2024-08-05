import React from "react";
import { FC } from "react";
import Heading from "../Heading/Heading.tsx";
import Button from "../Button/Button.tsx";
import "../Hero/Hero.scss";

interface HeroProps {
   background?: string;
   textColor?: string;
   headingColor?: "white" | "black";
   buttonTxt?: string;
   button?: boolean;
   headingType: "h1" | "h2";
   headingText: string;
   supHeadingText?: string;
   classNames?: string;
   children?: any;
}

const Hero: FC<HeroProps> = function (props) {
   const {
      background,
      textColor,
      headingColor = "white",
      buttonTxt,
      button,
      headingType,
      headingText,
      supHeadingText,
      classNames,
   } = props;

   const heroStyles = {
      background: background,
      color: textColor,
   };

   return (
      <div
         className="hero"
         style={{ background: `${heroStyles?.background}`, color: `${heroStyles?.color}` }}
      >
         <div className="container">
            <div className="hero__wrapper">
               <Heading
                  HeadingType={headingType}
                  headingTxt={headingText}
                  classNames={`hero__heading ${classNames ? classNames : ""}`}
                  headingColor={headingColor}
               >
                  {supHeadingText && (
                     <div className="hero__sup-heading sup-heading">{supHeadingText}</div>
                  )}
               </Heading>
               {button && (
                  <Button
                     btn="primary"
                     btnPadding="p24"
                     link="about"
                     text={buttonTxt}
                     classNames="hero__learn-more-btn"
                  />
               )}
               {props.children || ""}
            </div>
         </div>
      </div>
   );
};

export default Hero;
