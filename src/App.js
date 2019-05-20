import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar'
import LightingPictures from './LightingPictures'
import AboutContainer from './AboutContainer'
import LightsContainer from './LightsContainer'
import CardComponent from './CardComponent'
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

              <LightingPictures/>


              

         </div>
     </ParallaxProvider>

    );
  }
}

export default App;



