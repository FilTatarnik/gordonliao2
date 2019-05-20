import React, { Component } from 'react'
import NavBar from './NavBar'
import LightingPictures from './LightingPictures'
import AboutContainer from './AboutContainer'
import TeamComponent from './TeamComponent'
import SimpleSlider from './SimpleSlider'
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
              <TeamComponent/>
         </div>
     </ParallaxProvider>

    );
  }
}

export default App;



