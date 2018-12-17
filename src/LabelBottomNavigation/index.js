import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 1110,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
    showRecentModal: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  open = (e) => {
    this.setState({
      showRecentModal: true
    })   
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation verticalAlign="middle" value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Recent Work" value="recents" open={this.open} icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorite Work" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Pin map of different areas I've been" value="Pin map of different areas I've been" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
