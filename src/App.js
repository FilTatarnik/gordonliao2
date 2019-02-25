import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar'
import LightingPictures from './LightingPictures'
import AboutContainer from './AboutContainer'
import SimpleSlider from './SimpleSlider'
import Album from './Album'
import LightsContainer from './LightsContainer'
import SpeakerContainer from './SpeakerContainer'
import CardComponent from './CardComponent'
import ParallaxImage from './ParallaxImage'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import SocialMediaButtons from './SocialMediaButtons'
import './App.css';


class App extends Component {
  render() {
    return (
     <ParallaxProvider>
     <div className="App wrapper">
          <Parallax className="firstParallax section parallax">       
          <ButtonAppBar />
          </Parallax>

          <LightingPictures className="section"/>
          
          <Parallax className="secondParallax section parallax">
          </Parallax>
          
          <AboutContainer />
          
          <Parallax className="thirdParallax section parallax">
          </Parallax>
          
          <CardComponent />
          
          <Parallax className="fourthParallax section parallax">
          </Parallax>
          
          <LightsContainer />
          
          <Parallax className="fifthParallax section parallax">
          </Parallax>
     </div>
     </ParallaxProvider>

    );
  }
}

export default App;



