import React from "react";
import ImgCard from "../ImgCard/ImgCard.tsx";
import "./ImgCards.scss";

interface ImgCardsProps {
   aligningItems?: "center" | "top";
   classNames?: string;
}

const ImgCards = function ({ aligningItems = "center", classNames }: ImgCardsProps) {
   return (
      <div className={`img-cards img-cards_${aligningItems} ${classNames ? classNames : ""}`}>
         <ImgCard
            src="./images/about-us/bearded-man-praying.jpg"
            alt="charity events"
            imgSize="middle-size"
         />
         <ImgCard
            src="./images/about-us/man-and-woman-reading-book.jpg"
            alt="charity events"
            imgSize="big-size"
         />
         <ImgCard
            src="./images/about-us/people-sitting.jpg"
            alt="charity events"
            imgSize="middle-size"
         />
      </div>
   );
};

export default ImgCards;
