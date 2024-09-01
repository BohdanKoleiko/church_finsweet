import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import ScrollToTop from "./components/ScrollToTop.js";
import SingleBlog from "./components/SingleBlog/SingleBlog.tsx";
import SingleEvent from "./components/SingleEvent/SingleEvent.tsx";
import { gettingData } from "./components/gettingData.ts";
import { ParagraphBlockProps } from "./components/SingleBlog/SingleBlog.tsx";
import Home from "./Home.tsx";
import AboutUs from "./AboutUs.tsx";
import Sermon from "./Sermon.tsx";
import Blog from "./Blog.tsx";
import ContactUs from "./ContactUs.tsx";
import NotFound from "./NotFound.tsx";
import "./App.scss";

interface eventProps {
   id: number;
   eventName?: string;
   startEventDate?: string;
   endEventDate?: string;
   eventVenue?: string;
   eventDescr?: string;
   img?: string;
   imgAlt?: string;
   finished: boolean;
   body?: ParagraphBlockProps[];
}

function App() {
   const [backgroundColor, setBackgroundColor] = useState("");
   const [events, setEvents] = useState<eventProps>();

   const handleBgColor = function (color: string) {
      if (backgroundColor !== color) {
         setBackgroundColor(color);
      }
   };

   const handleEventStatus = (eventID: number, status: boolean) => {
      setEvents((prevState) => {
         return prevState?.map((event: eventProps) =>
            event.id === eventID ? { ...event, finished: status } : event,
         );
      });
   };

   useEffect(() => {
      gettingData({ setter: setEvents, url: "/datas/events.json" });
   }, []);

   return (
      <BrowserRouter>
         <ScrollToTop />
         <div className="app" style={{ backgroundColor }}>
            <Header />
            <Routes>
               <Route path="/">
                  <Route index element={<Home setBGColor={handleBgColor} />} />
                  <Route path="about" element={<AboutUs setBGColor={handleBgColor} />} />
                  <Route path="sermons">
                     <Route
                        index
                        element={
                           <Sermon
                              setBGColor={handleBgColor}
                              events={events}
                              handleEventStatus={handleEventStatus}
                           />
                        }
                     />
                     <Route
                        path=":sermonID"
                        element={
                           <SingleEvent
                              setBGColor={handleBgColor}
                              events={events}
                              handleEventStatus={handleEventStatus}
                           />
                        }
                     />
                  </Route>
                  <Route path="blog">
                     <Route index element={<Blog setBGColor={handleBgColor} />} />
                     <Route path=":blogPostID" element={<SingleBlog />} />
                  </Route>
                  <Route path="contact" element={<ContactUs setBGColor={handleBgColor} />} />
               </Route>
               <Route path="*" element={<NotFound setBGColor={handleBgColor} />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
