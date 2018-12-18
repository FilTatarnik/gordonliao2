import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './styles.css'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



function ButtonAppBar(props) {
  const { classes } = props;

function topScroll() {
  window.scrollTo({
    top: 0,
     behavior: 'smooth'
  });
}
function aboutScroll() {
  window.scrollTo({
    top: 953,
    behavior: 'smooth'
  });
}
function lightsScroll() {
  window.scrollTo({
    top: 1900,
    behavior: 'smooth'
  });
}
function speakerScroll() {
  window.scrollTo({
    top: 2561,
    behavior: 'smooth'
  });
}
  return (

<div className="bar">
  <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary" position="static">

        <Toolbar>

          <div className="logoclass">
            <Link to='/home' onClick={topScroll}>
              <img className="logo" src="https://i.imgur.com/YMDoch1.png" alt=""/>
            </Link>
          </div>

            <Typography variant="h6" color="inherit" className={classes.grow}>
            </Typography>

            <div id="home" >
              <Button color="inherit" onClick={topScroll}>
                <Link to='/home'>Home</Link>
              </Button>
            </div>

            <div id="about">
              <Button color="inherit" onClick={aboutScroll}>
                <Link to='/about'>About</Link>
              </Button>
            </div>

            <div id="lights">
              <Button color="inherit" onClick={lightsScroll}>
                <Link to='/lights'>Lights</Link>
              </Button>
            </div>

            <div id="speaker">
              <Button color="inherit" onClick={speakerScroll}>
                <Link to='/speakers'>Speakers</Link>
              </Button>
            </div>

        </Toolbar>

      </AppBar>
    </MuiThemeProvider>
      <br/>
  </div>
</div>
    

  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);