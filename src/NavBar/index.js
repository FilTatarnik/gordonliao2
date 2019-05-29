import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'
class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
    scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const bgPink = {backgroundColor: '#e91e63'}
    const joshSucks = {backgroundColor: '#ffffff'}
    const container = {height: 1300}
    const hamburger = {backgroundColor: '#42a5f5'}
    return(
      <div>
        
          <header>
            <MDBNavbar style={joshSucks} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand color="blue">
                <strong>
                  <Link className="black-text"
               
                onClick={this.scrollToTop}
                
              >
                <strong><h2>promise holdings llc</h2></strong>
              </Link>
              </strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler style={hamburger} onClick={ this.onClick } />
              <MDBCollapse color="default" isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                  <strong>
                      <Link className="black-text"
                      activeClass="active"
                      to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                    >
                      <strong>About</strong>
                    </Link>
                  </strong>
                  </MDBNavItem>
                  <MDBNavItem>
                  <strong>
                    <Link className="black-text"
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                    >
                      <strong>Team</strong>
                    </Link>
                    </strong>
                  </MDBNavItem>
                  <MDBNavItem>
                  <strong>
                    <Link className="black-text"
                      activeClass="active"
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                    >
                      <strong>Portfolio</strong>
                    </Link>
                    </strong>
                  </MDBNavItem>
                  <MDBNavItem>
                    <strong>
                      <Link className="black-text"
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        <strong>Contact</strong>
                      </Link>
                      </strong>
                  </MDBNavItem>
                </MDBNavbarNav>
     
              </MDBCollapse>
            </MDBNavbar>
          </header>
        
      </div>
    );
  }
}

export default FixedNavbarExample;