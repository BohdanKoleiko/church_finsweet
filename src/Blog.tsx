import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard/BlogCard.tsx";
import Button from "./components/Button/Button.tsx";
import Heading from "./components/Heading/Heading.tsx";
import { BlogPostProps } from "./components/SingleBlog/SingleBlog.tsx";
import "./Blog.scss";
import { Link } from "react-router-dom";

const Blog = function ({ setBGColor }) {
   const url = "/datas/blogs.json";
   const [blogPosts, setBlogPosts] = useState<BlogPostProps[] | null>(null);

   useEffect(() => {
      (async () => {
         try {
            const response = await fetch(url);
            if (!response.ok) {
               throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setBlogPosts(json);
         } catch (error) {
            throw new Error(`Error in: ${error.message}`);
         }
      })();
   }, []);

   return (
      <main className="main" onLoad={() => setBGColor("#F5F2F0")}>
         <section className="blog">
            <div className="container">
               <div className="blog__wrapper">
                  <Heading
                     classNames="title"
                     headingTxt="most recent post"
                     HeadingType="h2"
                     textPosition="center"
                  >
                     <div className="blog__sup-title">OUR BLOG</div>
                  </Heading>

                  {blogPosts && (
                     <BlogCard
                        blogCardTitle={blogPosts[0].blogTitle!}
                        blogDescription={blogPosts[0].blogDescription}
                        blogCardAltImg={blogPosts[0].imgAlt}
                        blogCardImage={blogPosts[0].img}
                        backgroundColor="white"
                        blogTypeHeading="h4"
                        preview
                        writer={`by ${blogPosts[0].author}`}
                        releaseDate={blogPosts[0].publishDate}
                        key={blogPosts[0].id}
                     >
                        <Button
                           classNames="blog__btn"
                           btn="primary"
                           btnPadding="p24"
                           text="Reed More"
                           link={`./${blogPosts[0].id}`}
                        />
                     </BlogCard>
                  )}
               </div>
            </div>
         </section>

         <section className="blog-posts">
            <div className="container">
               <div>
                  <Heading
                     classNames="title"
                     headingTxt="most recent post"
                     HeadingType="h2"
                     textPosition="center"
                  ></Heading>

                  <div className="blog-posts__blog-cards">
                     {blogPosts?.map((blogItem: BlogPostProps, index: number) =>
                        index > 0 ? (
                           <Link to={"./" + blogItem.id} key={index}>
                              <BlogCard
                                 blogCardSupTitle={blogItem.blogTheme}
                                 blogCardTitle={blogItem.blogTitle!}
                                 blogDescription={blogItem.blogDescription}
                                 backgroundColor="white"
                                 blogTypeHeading="h4"
                                 writer={`by ${blogItem.author}`}
                                 releaseDate={blogItem.publishDate}
                              />
                           </Link>
                        ) : (
                           ""
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
