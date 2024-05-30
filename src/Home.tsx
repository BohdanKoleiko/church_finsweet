import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import Event from "./components/Event/Event.tsx";
import Button from "./components/Button/Button.tsx";
import BlogCard from "./components/BlogCard/BlogCard.tsx";
import "./Home.scss";
import { events } from "./BD/events.js";
import { blogs } from "./BD/blogs.js";

const Home = function (props) {
   props.setBGColor("white");

   return (
      <main className="home-main">
         <section className="home-hero">
            <Hero
               backgroundImg="./images/hero-img.jpg"
               backgroundPosition="center"
               backgroundSize="cover"
               backgroundRepeat="no-repeat"
               button
               buttonTxt="learn more"
               headingType="h1"
               headingText="Become a part of our community"
               supHeadingText="Welcome to our CHURCH"
            >
               <div className="home-hero__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
               </div>
            </Hero>
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
                  <Event
                     startEventDate={events[events.length - 1].startEventDate}
                     endEventDate={events[events.length - 1].endEventDate}
                     eventName={events[events.length - 1].eventName}
                     eventVenue={events[events.length - 1].eventVenue}
                     eventDescription={events[events.length - 1].eventDescr}
                     preview
                     eventImage={events[events.length - 1].img}
                     eventAltImg={events[events.length - 1].imgAlt}
                  >
                     <Button
                        text="Register"
                        classNames="seremon-preview__event-button"
                        btn="secondary"
                     />
                  </Event>
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
                     {blogs.map((blog, i) =>
                        i < 4 ? (
                           ""
                        ) : (
                           <BlogCard
                              blogCardSupTitle={blog.blogSupTitle}
                              blogCardTitle={blog.blogTitle}
                              blogDescription={blog.blogDescr}
                              backgroundColor="light-orange"
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

export default Home;
