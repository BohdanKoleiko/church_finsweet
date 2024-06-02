import React from "react";
import "./Heading.scss";

interface HeadingProps {
   headingTxt: string;
   HeadingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
   headingColor?: "white" | "black";
   textPosition?: "left" | "center" | "right";
   classNames?: string;
   children?: any;
}

const Heading = function (props: HeadingProps) {
   const { headingTxt, headingColor, HeadingType, textPosition, classNames } = props;

   return (
      <div
         className={
            "heading" +
            `${headingColor ? ` heading_${headingColor}` : ""}` +
            `${textPosition ? ` heading_${textPosition}` : ""}` +
            `${classNames ? " " + classNames : ""}`
         }
      >
         {props.children || ""}
         <HeadingType>{headingTxt}</HeadingType>
      </div>
   );
};

export default Heading;
