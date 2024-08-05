import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Home from "./Home.tsx";
import AboutUs from "./AboutUs.tsx";
import Sermon from "./Sermon.tsx";
import Blog from "./Blog.tsx";
import ContactUs from "./ContactUs.tsx";
import NotFound from "./NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.js";
import "./App.scss";

function App() {
   const [backgroundColor, setBackgroundColor] = useState("");

   const handleBgColor = function (color: string) {
      if (backgroundColor !== color) {
         setBackgroundColor(color);
      }
   };

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
                     <Route index element={<Sermon setBGColor={handleBgColor} />} />
                     <Route path=":sermonID" element="" />
                  </Route>
                  <Route path="blog">
                     <Route index element={<Blog setBGColor={handleBgColor} />} />
                     <Route path=":blogPostID" element="" />
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
