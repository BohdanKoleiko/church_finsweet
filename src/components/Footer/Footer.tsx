import React from "react";
import { NavLink } from "react-router-dom";
import SubscribeForm from "../Forms/SubscribeForm.tsx";
import "./Footer.scss";

function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__wrapper">
               <div className="footer__info">
                  <div>
                     <figure className="footer__logo">
                        <img src="./images/Main-logo-gradient.png" alt="main logo" />
                     </figure>

                     <span className="footer__copyright">&copy; Copyright Finsweet 2022</span>
                  </div>

                  <div className="addres">
                     <a href="tel:+4805550103">(480) 555-0103</a>
                     <a
                        href="https://maps.app.goo.gl/J22G4yBFwmjKDznE9"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        4517 Washington Ave.
                     </a>
                     <a href="mailto:finsweet@example.com">finsweet@example.com</a>
                  </div>
               </div>

               <nav className="footer-nav">
                  <p className="footer-nav__title">Quick links</p>
                  <ul>
                     <li className="footer-nav__links">
                        <NavLink to="/about">About us</NavLink>
                     </li>
                     <li className="footer-nav__links">
                        <NavLink to="/sermons">Sermon</NavLink>
                     </li>
                     <li className="footer-nav__links">
                        <NavLink to="/blog">Blog</NavLink>
                     </li>
                  </ul>
               </nav>

               <div className="social-networks">
                  <p className="social-networks__title">Connect</p>
                  <div className="social-networks__links">
                     <a
                        className="social-networks__link-item"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <g clipPath="url(#clip0_546_166)">
                              <path
                                 d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                                 fill="#FFD2A4"
                              />
                           </g>
                           <defs>
                              <clipPath id="clip0_546_166">
                                 <rect width="16" height="16" fill="white" />
                              </clipPath>
                           </defs>
                        </svg>
                     </a>

                     <a
                        className="social-networks__link-item"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="1 1 22 22"
                           preserveAspectRatio="xMidYMid meet"
                        >
                           <path d="M12.153992 10.729553L8.088684 5.041199 5.92041 5.041199 10.956299 12.087097 11.59021 12.97345 15.900635 19.009583 18.068909 19.009583 12.785217 11.615906z" />
                           <path d="M21.16 1H2.84A1.84 1.84 0 0 0 1 2.84v18.32A1.84 1.84 0 0 0 2.84 23h18.32A1.84 1.84 0 0 0 23 21.16V2.84A1.84 1.84 0 0 0 21.16 1zm-5.925 19l-4.362-6.213L5.41 20H4l6.247-7.105L4 4h4.765l4.13 5.882L18.07 4h1.411l-5.957 6.776L20 20h-4.765z" />
                        </svg>
                     </a>

                     <a
                        className="social-networks__link-item"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <g clipPath="url(#clip0_546_170)">
                              <path
                                 d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                                 fill="#FFD2A4"
                              />
                           </g>
                           <defs>
                              <clipPath id="clip0_546_170">
                                 <rect width="16" height="16" fill="white" />
                              </clipPath>
                           </defs>
                        </svg>
                     </a>
                  </div>
               </div>

               <div className="subscribe">
                  <h4 className="subscribe__title">Subscribe to get Latest Updates and News</h4>

                  <SubscribeForm />
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
