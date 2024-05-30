import React, { FC } from "react";
import Heading from "../Heading/Heading.tsx";
import "./BlogCard.scss";

interface BlogCardProps {
   backgroundColor?: "light-orange" | "white";
   blogDescription?: string;
   blogCardImage?: string;
   blogCardAltImg?: string;
   blogCardTitle: string;
   blogCardSupTitle?: string;
   blogTypeHeading?: "h4" | "h5";
   writer?: string;
   releaseDate?: string;
   preview?: boolean;
   button?: boolean;
   children?: any;
}

const BlogCard: FC<BlogCardProps> = function (props) {
   const {
      backgroundColor = "white",
      blogDescription,
      blogCardImage,
      blogCardAltImg,
      blogCardTitle,
      blogCardSupTitle,
      blogTypeHeading = "h5",
      writer,
      releaseDate,
      preview,
      children,
   } = props;

   if (preview) {
      return (
         <div className={`blog-card blog-card_${backgroundColor} blog-card__preview`}>
            <div className="preview-descr">
               <div className="blog-card__release-info">
                  <span>{releaseDate}</span>
                  <span>{writer}</span>
               </div>

               <Heading
                  headingTxt={blogCardTitle ? blogCardTitle : "Blog Card Title"}
                  HeadingType={blogTypeHeading}
                  classNames="blog-card__heading"
               >
                  {blogCardSupTitle && (
                     <div className="blog-card__sup-heading sup-heading">{blogCardSupTitle}</div>
                  )}
               </Heading>

               <p className="blog-card__descr">
                  {blogDescription
                     ? blogDescription
                     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
               </p>

               {children}
            </div>

            <figure className="preview-img">
               <img
                  src={blogCardImage ? blogCardImage : ""}
                  alt={blogCardAltImg ? blogCardAltImg : ""}
               />
            </figure>
         </div>
      );
   }

   return (
      <>
         <div className={`blog-card blog-card_${backgroundColor}`}>
            <Heading
               headingTxt={blogCardTitle ? blogCardTitle : "Blog Card Title"}
               HeadingType="h5"
               classNames="blog-card__heading"
            >
               {blogCardSupTitle && (
                  <div className="blog-card__sup-heading sup-heading">{blogCardSupTitle}</div>
               )}
            </Heading>

            <p className="blog-card__descr">
               {blogDescription
                  ? blogDescription
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>

            <div className="blog-card__release-info">
               <span>{writer}</span>
               <span>{releaseDate}</span>
            </div>

            {children}
         </div>
      </>
   );
};

export default BlogCard;
