import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../Heading/Heading.tsx";
import "./SingleBlog.scss";

interface ParagraphBlock {
   text?: string | string[];
   textType?: string;
}

interface BodyBlock {
   title?: string;
   titleType: string;
   paragraphBlock?: ParagraphBlock[];
   images?: string[];
}

export interface BlogPost {
   id: number;
   author?: string;
   publishDate?: string;
   blogTitle?: string;
   blogTheme?: string;
   blogDescription?: string;
   img?: string;
   imgAlt?: string;
   body?: BodyBlock[];
}

const SingleBlog = function () {
   const url = "/datas/blogs.json";
   const { blogPostID } = useParams();
   const navigate = useNavigate();
   const [certainCourse, setCertainCourse] = useState<BlogPost | null>(null);

   const postID = blogPostID ? +blogPostID : 0;

   const fetchBlogPost = useCallback(async () => {
      try {
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
         }

         const data = await response.json();
         const course = data.find((item: BlogPost) => item.id === postID);

         if (!course) {
            navigate("..", { relative: "path" });
         } else {
            setCertainCourse(course);
         }
      } catch (error) {
         console.error(error);
      }
   }, [postID, navigate]);

   useEffect(() => {
      fetchBlogPost();
   }, [fetchBlogPost]);

   if (!certainCourse) return null;

   return (
      certainCourse && (
         <main>
            <section className="single-blog">
               <div className="single-blog__wrapper">
                  <div className="container">
                     <Heading
                        headingTxt={certainCourse.blogTitle!}
                        HeadingType="h2"
                        textPosition="center"
                        classNames="single-blog__title"
                     >
                        <div className="sup-title">{certainCourse.blogTheme}</div>
                     </Heading>
                     <div className="single-blog__release release">
                        <span className="release__date">{certainCourse.publishDate}</span>{" "}
                        <span className="release__author">By {certainCourse.author}</span>
                     </div>

                     <figure className="single-blog__main-image">
                        <img src={certainCourse.img} alt={certainCourse.imgAlt} />
                     </figure>

                     <div className="single-blog__blog-content">
                        {certainCourse.body?.map((block, index) => (
                           <article className="single-blog__article" key={index}>
                              {block.title && (
                                 <Heading
                                    classNames="single-blog__article-title"
                                    headingTxt={block.title}
                                    HeadingType={block.titleType}
                                 />
                              )}

                              {block.paragraphBlock?.map((paragraph, pIndex) => {
                                 const TagType = paragraph.textType as keyof JSX.IntrinsicElements;

                                 if (TagType === "ul" || TagType === "ol") {
                                    return (
                                       <TagType className="single-blog__article-text" key={pIndex}>
                                          {(paragraph.text as string[])?.map((item, liIndex) => (
                                             <li key={liIndex}>{item}</li>
                                          ))}
                                       </TagType>
                                    );
                                 }

                                 return (
                                    <TagType className="single-blog__article-text" key={pIndex}>
                                       {paragraph.text}
                                    </TagType>
                                 );
                              })}

                              {block.images?.map((image, imgIndex) => (
                                 <figure className="single-blog__article-img" key={imgIndex}>
                                    <img src={image} alt="article visual" />
                                 </figure>
                              ))}
                           </article>
                        ))}
                     </div>
                  </div>
               </div>
            </section>
         </main>
      )
   );
};

export default SingleBlog;
