import React from "react";
import BlogCard from "./components/BlogCard/BlogCard.tsx";
import Button from "./components/Button/Button.tsx";
import Heading from "./components/Heading/Heading.tsx";
import { blogs } from "./BD/blogs.js";
import "./Blog.scss";

const Blog = function () {
   return (
      <main className="main">
         <section className="blog">
            <div className="container">
               <div className="blog__wrapper">
                  <Heading
                     headingTxt="most recent post"
                     HeadingType="h2"
                     textPosition="center"
                     classNames="title"
                  >
                     <div className="blog__sup-title">OUR BLOG</div>
                  </Heading>

                  <BlogCard
                     blogCardTitle="Church was doing what he often did when dropped An oracle"
                     blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                     blogCardAltImg="test image"
                     blogCardImage="./images/blogs/2.jpg"
                     backgroundColor="white"
                     blogTypeHeading="h4"
                     preview
                     writer="By John Hunau Deo"
                     releaseDate="Tuesday 13 May, 2018"
                  >
                     <Button text="Reed More" classNames="blog__btn" />
                  </BlogCard>
               </div>
            </div>
         </section>

         <section className="blog-posts">
            <div className="container">
               <div>
                  <Heading
                     headingTxt="most recent post"
                     HeadingType="h2"
                     textPosition="center"
                     classNames="title"
                  ></Heading>

                  <div className="blog-posts__blog-cards">
                     {blogs.map((blog, i) =>
                        i === blogs.length - 1 ? (
                           ""
                        ) : (
                           <BlogCard
                              blogCardSupTitle={blog.blogSupTitle}
                              blogCardTitle={blog.blogTitle}
                              blogDescription={blog.blogDescr}
                              backgroundColor="white"
                              blogTypeHeading="h4"
                              writer={blog.blogAuthor}
                              releaseDate={blog.releaseDate}
                              key={i}
                           />
                        ),
                     )}
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default Blog;
