import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Typography from '@material-ui/core/Typography';


class SocialMediaButtons extends Component {
    render(){
        return(
	        
			      <footer>
			        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
			          <SocialIcon network="facebook" style={{padding: 10}} />
			          
			          <SocialIcon network="instagram" color="lightorange"/>
			          <SocialIcon network="snapchat" />

			          <SocialIcon network="twitter" color="lightblue"/>
			        </Typography>
			      </footer>
	      
        )
    }
}
export default SocialMediaButtons;
