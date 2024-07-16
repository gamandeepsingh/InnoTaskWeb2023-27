import React from "react";
import "./navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { RiListCheck2 } from "react-icons/ri";

export default function Navbar() {
  
  return (
    <div>
      <nav className="navbar z-50">
        <ul className="navbar-nav">
          <li className="logo">
            <div className="nav-link cursor-default">
              <span className="link-text logo-text">Innogeeks</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  />
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  />
                </g>
              </svg>
            </div>
          </li>
          <li className={`nav-item group `  }>
            <a  href="/" className="nav-link">
            <BiHomeAlt2 fontSize={30} className="group-hover:text-[#df49a6]"/>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className={`nav-item group`  }>
            <a href="#about" className="nav-link"  >
             <CgDanger fontSize={30} className="group-hover:text-[#df49a6]"/>
              <span className="link-text">About</span>
            </a>
          </li>
          <li className="nav-item group">
            <a href="#contact" className="nav-link">
              <BsTelephone fontSize={28} className="group-hover:text-[#df49a6]"/>
              <span className="link-text">Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#domains" className="nav-link group">
              <RiListCheck2 fontSize={30} className="group-hover:text-[#df49a6]"/>
              <span className="link-text">Our Domain</span>
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
