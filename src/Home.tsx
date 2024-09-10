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

const cards = [
   {
      image: bg1,
      title: "WATCH AND LISTEN TO OUR SERMONS",
      text: "Watch and listen to our sermons for inspiring messages that uplift your spirit and deepen your faith. Join us online to connect with meaningful teachings and worship from wherever you are.",
   },
   {
      image: bg2,
      title: "WATCH AND LISTEN TO OUR SERMONS",
      text: "Watch and listen to our sermons for inspiring messages that uplift your spirit and deepen your faith. Join us online to connect with meaningful teachings and worship from wherever you are.",
   },
   {
      image: bg3,
      title: "WATCH AND LISTEN TO OUR SERMONS",
      text: "Watch and listen to our sermons for inspiring messages that uplift your spirit and deepen your faith. Join us online to connect with meaningful teachings and worship from wherever you are.",
   },
   {
      image: bg4,
      title: "WATCH AND LISTEN TO OUR SERMONS",
      text: "Watch and listen to our sermons for inspiring messages that uplift your spirit and deepen your faith. Join us online to connect with meaningful teachings and worship from wherever you are.",
   },
];

const Home = function ({ setBGColor }) {
   const blogURL = "/datas/blogs.json";
   const eventURL = "./datas/events.json";
   const [blogPosts, setBlogPosts] = useState<BlogPostProps[] | null>(null);
   const [event, setEvent] = useState<EventCardProps[] | null>(null);

   useEffect(() => {
      gettingData({ setter: setBlogPosts, url: blogURL });
      gettingData({ setter: setEvent, url: eventURL });
   }, []);

   const [isHover, setIsHover] = useState<{ status: boolean; elementIndex: number | null }>({
      status: false,
      elementIndex: null,
   });

   const handleMouseEnter = (index) => {
      setIsHover({ ...isHover, status: true, elementIndex: index });
   };
   const handleMouseLeave = () => {
      setIsHover({ ...isHover, status: false, elementIndex: null });
   };

   const textBlockStyles = (index) => {
      const textHeight = document.querySelectorAll(".card__wysiwyg")[index]?.scrollHeight;

      if (window.innerWidth > 768) {
         return {
            height: index === isHover.elementIndex ? `${textHeight}px` : "0px",
         };
      } else {
         return { height: `${textHeight}px` };
      }
   };

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
                  Welcome to our church, a community built on love and compassion. Here, you'll find
                  a warm, supportive environment where faith, kindness, and spiritual growth are
                  central. Whether you're new or a long-time member, we invite you to join us in
                  worship, prayer, and service as we walk together in faith, guided by love and a
                  desire to uplift one another.
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
                     classNames="benefits-of-joining__title"
                     HeadingType="h2"
                     headingTxt="THE benefits of joining our church"
                     textPosition="center"
                  >
                     <div className="sup-title">Watch and listen</div>
                  </Heading>

                  <div className="cards-wrapper">
                     {cards.map((card, index) => (
                        <div
                           className="card"
                           key={index}
                           style={{
                              background: `url(${card.image}) center center/cover no-repeat`,
                           }}
                           onMouseEnter={() => handleMouseEnter(index)}
                           onMouseLeave={handleMouseLeave}
                        >
                           <div className="card__content-wrapper">
                              <Heading
                                 classNames="card__title"
                                 HeadingType="h5"
                                 headingTxt={card.title}
                                 headingColor="white"
                              />
                              <p className="wysiwyg card__wysiwyg" style={textBlockStyles(index)}>
                                 {card.text}
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
                  classNames="seremon-preview__title"
                  headingTxt="join us and become part of something great"
                  HeadingType="h2"
                  textPosition="center"
               >
                  <div className="sup-title">Upcoming SERMONS</div>
               </Heading>

               {event && (
                  <EventCard
                     classNames="seremon-preview__event"
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
                        classNames="seremon-preview__event-button"
                        btn="secondary"
                        btnType="button"
                        btnPadding="p24"
                        text="Register"
                        link={`sermons/${event[event.length - 1].id}`}
                     />
                  </EventCard>
               )}

               <Button
                  classNames="home-hero__all-sermons-button"
                  btn="text"
                  text="View all Sermons"
                  link="sermons"
                  logo={arrow}
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
