// import React, { useState, useEffect, useRef } from "react";
// import { links } from "./data";
// import logo from "../img/logo-amarillo_1.png"
// import menu from "../img/burguer.png"

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   const linksContainerRef = useRef(null);
//   const linksRef = useRef(null);

//   useEffect(() => {
//     const linksHeight = linksRef.current.getBoundingClientRect().height;
//     if (showLinks) {
//       linksContainerRef.current.style.height = `${linksHeight}px`;
//     } else {
//       linksContainerRef.current.style.height = '0px';
//     }
//   }, [showLinks]);
//   return (
//     <>
//     <nav>
//       <div className="nav-center">
//         <div className="nav-header">
//           <img src={logo} width="30px" />
//           <button
//             className="nav-toggle"
//             onClick={() => setShowLinks(!showLinks)}
//           >
//             <img src={menu} width="30px" />
//           </button>
//         </div>
//         <div className="links-container" ref={linksContainerRef}>
//           <ul className="links" ref={linksRef}>
//             {links.map((link) => {
//               const { id, url, text } = link;
//               return (
//                 <li key={id}>
//                   <a href={url}>{text}</a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./navbar.css"

const Navbar = () => {
  

 
  return (
    <nav className="menu-container">
        {/* burger menu */}
        <input type="checkbox" aria-label="Toggle menu" />
        <span />
        <span />
        <span />
        {/* logo */}
        <a href="#" className="menu-logo">
          <img src="logo" alt="My Awesome Website" />
        </a>
        {/* menu items */}
        <div className="menu">
          <ul>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#pricing">
                Skills
              </a>
            </li>
            <li>
              <a href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#docs">
                Docs
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#signup">
                Sign-up
              </a>
            </li>
            <li>
              <a href="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
