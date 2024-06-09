import React from "react";
import Heading from "../Heading/Heading.tsx";
import "./CardOfChurchMember.scss";

interface CardOfChurchMemberProps {
   src: string;
   alt: string;
   memberName: string;
   memberRank?: string;
   facebookLink?: string;
   xLink?: string;
   linkedinLink?: string;
   classNames?: string;
}

const CardOfChurchMember = function ({
   src,
   alt,
   memberName,
   memberRank,
   facebookLink,
   xLink,
   linkedinLink,
   classNames,
}: CardOfChurchMemberProps) {
   const titleClasses = "church-member" + `${classNames ? ` ${classNames}` : ""}`;

   return (
      <div className={titleClasses}>
         <figure className="church-member__pictire-wrapper">
            <img className="church-member__pictire" src={src} alt={alt} />
         </figure>

         <Heading headingTxt={memberName} HeadingType="h5" classNames="church-member__name" />
         <span className="church-member__rank">{memberRank}</span>

         <div className="church-member__social-networks">
            <a className="church-member__social" href={facebookLink}>
               <img src="./images/icons/Facebook.svg" alt="facebook logo" />
            </a>
            <a className="church-member__social" href={xLink}>
               <img src="./images/icons/x_logo_twitter_new_brand_icon.svg" alt="x logo" />
            </a>
            <a className="church-member__social" href={linkedinLink}>
               <img src="./images/icons/Linkedin.svg" alt="linkedin logo" />
            </a>
         </div>
      </div>
   );
};

export default CardOfChurchMember;
