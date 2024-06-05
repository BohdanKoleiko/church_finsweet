import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading.tsx";
import "./CardWithTextAndImage.scss";

interface CardWithTextAndImageProps {
   title: string;
   description: string;
   imgSrc: string;
   imgAlt: string;
   flexDirection?: "row-reverse" | "column";
   justifyContent?: "center" | string;
   classNames: string;
}

const CardWithTextAndImage = function ({
   title,
   description,
   imgSrc,
   imgAlt,
   flexDirection,
   justifyContent,
   classNames,
}: CardWithTextAndImageProps) {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const styles = { flexDirection, justifyContent };

   useEffect(() => {
      const handleSetWindowWidth = function () {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleSetWindowWidth);
   }, []);

   if (windowWidth <= 768) {
      styles.flexDirection = "column";
   }

   return (
      <div className={`joining-advantages ${classNames ? classNames : ""}`} style={styles}>
         <div className="joining-advantages__advantage-description">
            <Heading headingTxt={title} HeadingType="h4" classNames="title title_margin-16" />
            <p className="wysiwyg">{description}</p>
         </div>

         <figure className="joining-advantages__picture-wrapper">
            <img className="joining-advantages__picture" src={imgSrc} alt={imgAlt} />
         </figure>
      </div>
   );
};

export default CardWithTextAndImage;
