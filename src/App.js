import React, { Component } from 'react'
import NavBar from './NavBar'
import AboutContainer from './AboutContainer'
import TeamComponent from './TeamComponent'
import SimpleSlider from './SimpleSlider'
import PortfolioComponent from './PortfolioComponent'
import TestimonialComponent from './TestimonialComponent'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

class App extends Component {
  render() {
    return (
     <ParallaxProvider>
         <div className="App wrapper">
            <Parallax className="firstParallax section parallax">       
              <NavBar />
            </Parallax>
            <br />
            <br />
            <br />
              <TeamComponent/>
            <Parallax className="secondParallax section parallax">
            </Parallax>
              <PortfolioComponent />
              <TestimonialComponent />
              <TestimonialComponent />

         </div>
     </ParallaxProvider>
    );
  }
}
export default App;



