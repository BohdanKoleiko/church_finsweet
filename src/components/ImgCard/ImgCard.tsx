import React from "react";
import "./ImgCard.scss";

interface ImgCardProps {
   src: string;
   alt: string;
   imgSize: "big-size" | "middle-size";
   classNames?: string;
}

const ImgCard = function ({ src, alt, imgSize, classNames }: ImgCardProps) {
   return (
      <div className={`img-card img-card_${imgSize} ${classNames ? classNames : ""}`}>
         <figure className="img-card__img">
            <img src={src} alt={alt} />
         </figure>
      </div>
   );
};

export default ImgCard;
