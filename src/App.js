import React, { Component } from 'react';
import logo from './logo.svg';
// import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './ButtonAppBar';
import LightingPictures from './LightingPictures';
import LabelBottomNavigation from './LabelBottomNavigation';
import {Route, Switch} from 'react-router-dom'
import { AnimatedSwitch, spring, AnimatedRoute } from 'react-router-transition';
import AboutContainer from './AboutContainer'
import Album from './Album';
// import { spring, AnimatedRoute } from 'react-router-transition';
import LightsContainer from './LightsContainer'
import SpeakerContainer from './SpeakerContainer'
import Divider from '@material-ui/core/Divider';
import ReallySmoothScroll from 'really-smooth-scroll'
import './App.css';


ReallySmoothScroll.shim()

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 777,
    damping: 33.3,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 0,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">

        <ButtonAppBar />
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
          <Route exact path="/about" component={AboutContainer}/>
          <Route exact path="/lights" component={LightsContainer}/>
          <Route exact path="/speakers" component={SpeakerContainer}/>
          <Route exact path="/home" component={LightingPictures}/>
        <br />
        <br />
        <br />
        </AnimatedSwitch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>


    );
  }
}

export default App;



