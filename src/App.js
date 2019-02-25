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
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


import SocialMediaButtons from './SocialMediaButtons'
import './App.css';


class App extends Component {
  render() {
    return (
     <ParallaxProvider className="wrapper">
     <div className="App">  
     <section className="firstParallax section parallax">       
          <ButtonAppBar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
     </section>
          <LightingPictures className="section"/>
     <section className="secondParallax section parallax">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
     </section>
          <AboutContainer />
     <section className="thirdParallax section parallax">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> 
     </section>
          <CardComponent />
     <section className="fourthParallax section parallax">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
     </section>
          <LightsContainer />
     <section className="fifthParallax section parallax">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
     </section>
        </div>

     </ParallaxProvider>
    );
  }
}

export default App;



