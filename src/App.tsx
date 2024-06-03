import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Home from "./Home.tsx";
import AboutUs from "./AboutUs.tsx";
import Sermon from "./Sermon.tsx";
import Blog from "./Blog.tsx";
import NotFound from "./NotFound.tsx";
import "./App.scss";

function App() {
   const [bgColor, setbgColor] = useState("");

   const handleBgColor = function (color: string) {
      setbgColor(color);
   };

   return (
      <BrowserRouter>
         <div className="app" style={{ backgroundColor: `${bgColor}` }}>
            <Header onClick={handleBgColor} />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about-us" element={<AboutUs />} />
               <Route path="/sermon" element={<Sermon />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
