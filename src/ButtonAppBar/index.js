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
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary" position="static">
        <Toolbar>
        <Link to='/home'>
        <img class="logo" src="https://i.imgur.com/YMDoch1.png"/>
        </Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>
          <Button color="inherit">
          <Link to='/home'>Home</Link>
          </Button>
          <Button color="inherit">
          <Link to='/about'>About</Link>
          </Button>
          <Button color="inherit">
          <Link to='/lights'>Lights</Link>
          </Button>
          <Button color="inherit">
          <Link to='/speakers'>Speakers</Link>
          </Button>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>

  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
