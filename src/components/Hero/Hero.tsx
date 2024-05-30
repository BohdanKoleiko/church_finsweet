import React from "react";
import { FC } from "react";
import Heading from "../Heading/Heading.tsx";
import Button from "../Button/Button.tsx";
import "../Hero/Hero.scss";

interface HeroProps {
   background?: string;
   backgroundImg?: string;
   backgroundPosition?: string;
   backgroundSize?: string;
   backgroundRepeat?: string;
   textColor?: string;
   headingColor?: "white" | "black";
   buttonTxt?: string;
   button?: boolean;
   headingType: "h1" | "h2";
   headingText: string;
   supHeadingText?: string;
   children?: any;
}

const Hero: FC<HeroProps> = function (props) {
   const {
      background,
      backgroundImg,
      backgroundPosition,
      backgroundSize,
      backgroundRepeat,
      textColor,
      headingColor = "white",
      buttonTxt,
      button = false,
      headingType,
      headingText,
      supHeadingText,
   } = props;

   const heroStyles = {
      background: background
         ? background
         : `url(${backgroundImg}) ${backgroundPosition} / ${backgroundSize} ${backgroundRepeat}`,
      color: textColor ? textColor : "",
   };

   return (
      <div className="hero" style={heroStyles}>
         <div className="container">
            <div className="hero__inner">
               <Heading
                  HeadingType={headingType}
                  headingTxt={headingText}
                  classNames="hero__heading"
                  headingColor={headingColor}
               >
                  {supHeadingText && (
                     <div className="hero__sup-heading sup-heading">{supHeadingText}</div>
                  )}
               </Heading>
               {button && <Button text={buttonTxt} classNames="hero__learn-more-btn" />}
               {props.children || ""}
            </div>
         </div>
      </div>
   );
};

export default Hero;
