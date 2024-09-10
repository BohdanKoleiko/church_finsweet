import React from "react";
import "./NotFound.scss";

const NotFound = function ({ setBGColor }) {
   return (
      <main className="main" onLoad={() => setBGColor("#F5F2F0")}>
         <section>
            <h1>Not found 404</h1>
         </section>
      </main>
   );
};

export default NotFound;
