import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import TeamComponent from '../TeamComponent'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
            <li className="nav-item" >
              <Link className="header"
               
                onClick={this.scrollToTop}
                
              >
                Promise Holdings LLC
              </Link>
              </li>
          <ul className="nav-items" >
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
