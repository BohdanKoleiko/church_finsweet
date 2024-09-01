import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import EventCard from "./components/EventCard/EventCard.tsx";
import Button from "./components/Button/Button.tsx";
import BlogCard from "./components/BlogCard/BlogCard.tsx";
import ImgCards from "./components/ImgCards/ImgCards.tsx";
import { gettingData } from "./components/gettingData.ts";
import "./Home.scss";
import { BlogPostProps } from "./components/SingleBlog/SingleBlog.tsx";
import { EventCardProps } from "./components/EventCard/EventCard.tsx";

import arrow from "./images/icons/Arrow.svg";
import bg1 from "./images/fashion-man-love-people.jpg";
import bg2 from "./images/a-statue-holding-a-holy-book.jpg";
import bg3 from "./images/man-people-woman-connection.jpg";
import bg4 from "./images/woman-in-blue-tank-top-and-man-in-red-shirt-painting.jpg";

const Home = function ({ setBGColor }) {
   const blogURL = "/datas/blogs.json";
   const eventURL = "./datas/events.json";
   const [blogPosts, setBlogPosts] = useState<BlogPostProps[] | null>(null);
   const [event, setEvent] = useState<EventCardProps[] | null>(null);

   useEffect(() => {
      gettingData({ setter: setBlogPosts, url: blogURL });
      gettingData({ setter: setEvent, url: eventURL });
   }, []);

   return (
      <main className="main" onLoad={() => setBGColor("white")}>
         <section className="home-hero">
            <Hero
               background="url(./images/hero-img.jpg) center / cover no-repeat"
               button
               buttonTxt="learn more"
               headingType="h1"
               headingText="Become a part of our community"
               supHeadingText="Welcome to our CHURCH"
               classNames="home-hero__heading"
            >
               <div className="home-hero__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
               </div>
            </Hero>
         </section>

         <section className="welcome">
            <div className="container">
               <Heading
                  headingTxt="Love and compassion"
                  HeadingType="h2"
                  textPosition="center"
                  classNames="title title_margin-32"
               >
                  <div className="sup-title">Welcome to our CHURCH</div>
               </Heading>
               <p className="wysiwyg wysiwyg_margin-56 wysiwyg_txt-center welcome__wysiwyg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
               </p>

               <Button
                  btn="primary"
                  btnPadding="p24"
                  btnType="button"
                  text="Read more"
                  classNames="welcome__btn"
                  link="about"
               />

               <ImgCards aligningItems="top" classNames="home__img-cards" />
            </div>
         </section>

         <section className="benefits-of-joining">
            <div className="container">
               <div className="benefits-of-joining__wrapper">
                  <Heading
                     HeadingType="h2"
                     headingTxt="THE benefits of joining our church"
                     textPosition="center"
                     classNames="benefits-of-joining__title"
                  >
                     <div className="sup-title">Watch and listen</div>
                  </Heading>

                  <div className="cards-wrapper">
                     {[bg1, bg2, bg3, bg4].map((bg, index) => (
                        <div
                           className="card"
                           key={index}
                           style={{
                              background: `url(${bg}) center center/cover no-repeat`,
                           }}
                        >
                           <div className="card__content-wrapper">
                              <Heading
                                 HeadingType="h5"
                                 headingTxt="WATCH AND LISTEN TO OUR SERMONS"
                                 headingColor="white"
                                 classNames="card__title"
                              />
                              <p className="wysiwyg card__wysiwyg">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                 eiusmod tempor incididunt ut.
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <section className="seremon-preview">
            <div className="container">
               <Heading
                  headingTxt="join us and become part of something great"
                  HeadingType="h2"
                  textPosition="center"
                  classNames="seremon-preview__title"
               >
                  <div className="sup-title">Upcoming SERMONS</div>
               </Heading>

               <div className="seremon-preview__event">
                  {event && (
                     <EventCard
                        startEventDate={event[event.length - 1].startEventDate}
                        endEventDate={event[event.length - 1].endEventDate}
                        eventName={event[event.length - 1].eventName}
                        eventVenue={event[event.length - 1].eventVenue}
                        eventDescription={event[event.length - 1].eventDescr}
                        preview
                        eventImage={event[event.length - 1].img}
                        eventAltImg={event[event.length - 1].imgAlt}
                     >
                        <Button
                           btn="secondary"
                           btnType="button"
                           btnPadding="p24"
                           text="Register"
                           classNames="seremon-preview__event-button"
                           link={`sermons/${event[event.length - 1].id}`}
                        />
                     </EventCard>
                  )}
               </div>

               <Button
                  btn="text"
                  text="View all Sermons"
                  link="sermons"
                  logo={arrow}
                  classNames="home-hero__all-sermons-button"
               />
            </div>
         </section>

         <section className="serve-the-world">
            <div className="container">
               <div className="serve-the-world__card">
                  <div className="serve-the-world__card-content">
                     <Heading HeadingType="h2" headingTxt="We want to serve the world around us" />
                     <p className="wysiwyg wysiwyg_margin-16">
                        Our goal is to create meaningful change, fostering community and inspiring
                        progress.
                     </p>
                     <Button
                        btn="primary"
                        btnType="button"
                        btnPadding="p24"
                        text="Visit"
                        classNames="serve-the-world__button"
                        link="about"
                     />
                  </div>
                  <div className="serve-the-world__card-background"></div>
               </div>
            </div>
         </section>

         <section className="blog-posts">
            <div className="container">
               <div>
                  <Heading
                     headingTxt="SHARE, INSPIRE, INNOVATE"
                     HeadingType="h2"
                     textPosition="center"
                     classNames="title"
                  >
                     <div className="sup-title">Read our Blog</div>
                  </Heading>

                  <div className="blog-posts__blog-cards">
                     {blogPosts?.map((blogItem: BlogPostProps, index: number) =>
                        index < 4 ? (
                           <Link to={"blog/" + blogItem.id} key={index}>
                              <BlogCard
                                 blogCardSupTitle={blogItem.blogTheme}
                                 blogCardTitle={blogItem.blogTitle!}
                                 blogDescription={blogItem.blogDescription}
                                 backgroundColor="light-orange"
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

export default Home;
