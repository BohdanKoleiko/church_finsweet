import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import Heading from "./components/Heading/Heading.tsx";
import Event from "./components/Event/Event.tsx";
import Button from "./components/Button/Button.tsx";
import BlogCard from "./components/BlogCard/BlogCard.tsx";
import ImgCards from "./components/ImgCards/ImgCards.tsx";
import "./Home.scss";

import { events } from "./BD/events.js";
import { blogs } from "./BD/blogs.js";
import arrow from "./images/icons/Arrow.svg";
import bg1 from "./images/fashion-man-love-people.jpg";
import bg2 from "./images/a-statue-holding-a-holy-book.jpg";
import bg3 from "./images/man-people-woman-connection.jpg";
import bg4 from "./images/woman-in-blue-tank-top-and-man-in-red-shirt-painting.jpg";

const Home = function ({ setBGColor }) {
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
                  link="about-us"
               />

               <ImgCards aligningItems="top" classNames="home__img-cards" />
            </div>
         </section>

         <section className="benefits-of-joining">
            <div className="container">
               <div className="benefits-of-joining__wrapper">
                  <Heading
                     HeadingType="h2"
                     headingTxt="THE benefits of joining our church"
                     textPosition="center"
                     classNames="benefits-of-joining__title"
                  >
                     <div className="sup-title">Watch and listen</div>
                  </Heading>

                  <div className="cards-wrapper">
                     <div
                        className="card"
                        style={{
                           background: `url(${bg1}) center center/cover no-repeat`,
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

                     <div
                        className="card"
                        style={{
                           background: `url(${bg2}) center center/cover no-repeat`,
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

                     <div
                        className="card"
                        style={{
                           background: `url(${bg3}) center center/cover no-repeat`,
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

                     <div
                        className="card"
                        style={{
                           background: `url(${bg4}) center center/cover no-repeat`,
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
                        btn="secondary"
                        btnType="button"
                        btnPadding="p24"
                        text="Register"
                        classNames="seremon-preview__event-button"
                        link={`"sermon/register?id=${events[events.length - 1].id}`}
                     />
                  </Event>
               </div>

               <Button
                  btn="text"
                  text="View all Sermons"
                  link="/sermon"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                     </p>
                     <Button
                        btn="primary"
                        btnType="button"
                        btnPadding="p24"
                        text="Visit"
                        classNames="serve-the-world__button"
                        link="/about-us"
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
