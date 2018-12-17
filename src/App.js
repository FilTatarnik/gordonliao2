import React, { Component } from 'react';
import logo from './logo.svg';
// import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './ButtonAppBar';
import LightingPictures from './LightingPictures';
import LabelBottomNavigation from './LabelBottomNavigation';
import {Route, Switch} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import AboutContainer from './AboutContainer'
import Album from './Album';
import LightsContainer from './LightsContainer'
import SpeakerContainer from './SpeakerContainer'
import Divider from '@material-ui/core/Divider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
          >
          <Route exact path="/about" component={AboutContainer}/>
          <Route exact path="/lights" component={LightsContainer}/>
          <Route exact path="/speakers" component={SpeakerContainer}/>
          <Route exact path="/home" component={LightingPictures}/>
        </AnimatedSwitch>
        <Album />
        <Divider />
        <LabelBottomNavigation />
      </div>
    );
  }
}

export default App;



