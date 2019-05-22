import React, { Component } from 'react'
import NavBar from './NavBar'
import Section from './Section'
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
          <NavBar />
         <div className="App wrapper">

            <Parallax className="firstParallax parallax">       
               <Section
                 title="Section 1"
                 dark={false}
                 id="section1"
                />
                <Section
                  title="Section 2"
                  dark={false}
                  id="section2"
                />
              <TeamComponent id="section3" />
              <PortfolioComponent id="section4"/>

          
            </Parallax>
      

         </div>
     </ParallaxProvider>
    );
  }
}
export default App;



