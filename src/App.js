import React, { Component } from 'react';
import logo from './logo.svg';
// import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './ButtonAppBar';
import LightingPictures from './LightingPictures';
import LabelBottomNavigation from './LabelBottomNavigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <LightingPictures />
        <LabelBottomNavigation />
      </div>
    );
  }
}

export default App;



