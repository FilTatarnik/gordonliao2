import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple'
import grey from '@material-ui/core/colors/grey'
import scrollToComponent from 'react-scroll-to-component';


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
function componentDidMount() {
  scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
}
function ButtonAppBar(props) {
  const { classes } = props;
  return (

    <div class="bar">
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary" position="static">
        <Toolbar>
        <div class="logoclass">
        <Link to='/home'>
        <img class="logo" src="https://i.imgur.com/YMDoch1.png"/>
        </Link>
        </div>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>
          <div class="home">
          <Button color="inherit">
          <Link to='/home'>Home</Link>
          </Button>
          </div>
          <div class="about">
          <Button color="inherit">
          <Link to='/about'>About</Link>
          </Button>
          </div>
          <div class="lights">
          <Button color="inherit">
          <Link to='/lights'>Lights</Link>
          </Button>
          </div>
          <div class="speaker">
          <Button color="inherit">
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
