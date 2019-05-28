import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

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
    return(
      <div>
        
          <header>
            <MDBNavbar style={joshSucks} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <strong>
                  <Link className="black-text"
               
                onClick={this.scrollToTop}
                
              >
                Promise Holdings LLC
              </Link>
              </strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
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
                      About
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
                      Team
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
                      Portfolio
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
                        Contact
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