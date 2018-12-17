import React, { Component } from 'react';
import logo from './logo.svg';
// import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './ButtonAppBar';
import LightingPictures from './LightingPictures';
import LabelBottomNavigation from './LabelBottomNavigation';
import {Route, Switch} from 'react-router-dom'
import AboutContainer from './AboutContainer'
import LightsContainer from './LightsContainer'
import SpeakerContainer from './SpeakerContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <LightingPictures />
        <LabelBottomNavigation />
        <Switch>
          <Route exact path="/about" component={AboutContainer}/>
          <Route exact path="/lights" component={LightsContainer}/>
          <Route exact path="/speakers" component={SpeakerContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;



