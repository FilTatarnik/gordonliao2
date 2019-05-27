import React, { Component } from 'react'
import NavBar from './NavBar'
// import Section from './Section'
import AboutContainer from './AboutContainer'
import TeamComponent from './TeamComponent'
// import SimpleSlider from './SimpleSlider'
import PortfolioComponent from './PortfolioComponent'
import FooterComponent from './FooterComponent'
// import TestimonialComponent from './TestimonialComponent'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

class App extends Component {

  render() {
    return (
         <div className="App">
          <NavBar />
              
              <TeamComponent id="section3" />
              <PortfolioComponent id="section4"/>
              <FooterComponent />
         </div>
    );
  }
}
export default App;



