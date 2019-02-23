import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar'
import LightingPictures from './LightingPictures'
import AboutContainer from './AboutContainer'
import SimpleSlider from './SimpleSlider'
import Album from './Album'
import LightsContainer from './LightsContainer'
import SpeakerContainer from './SpeakerContainer'
import CardComponent from './CardComponent'

import SocialMediaButtons from './SocialMediaButtons'
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">         
          
          <ButtonAppBar />

          <LightingPictures />

          <AboutContainer />
       
          <CardComponent />
          <br />
          <CardComponent />

          <LightsContainer />

        </div>
    );
  }
}

export default App;



