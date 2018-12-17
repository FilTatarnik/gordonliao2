import React, { Component } from 'react';
import ButtonAppBar from './ButtonAppBar';
import LightingPictures from './LightingPictures';
import AboutContainer from './AboutContainer'
import Album from './Album';
import LightsContainer from './LightsContainer'
import SpeakerContainer from './SpeakerContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD

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
=======
          <ButtonAppBar onClick={this.props.scrollToComponent}/>
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
          <LightingPictures onClick={this.props.scrollToComponent}/>
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
          <Album />
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
          <AboutContainer onClick={this.props.scrollToComponent}/>
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
          <Album />
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
          <LightsContainer onClick={this.props.scrollToComponent}/>
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
          <Album />
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
          <SpeakerContainer onClick={this.props.scrollToComponent}/>
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
          <Album />
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
>>>>>>> d6bc7364669c1569350aa015c5a6fff7e3f9cbcf
        </div>


    );
  }
}

export default App;



