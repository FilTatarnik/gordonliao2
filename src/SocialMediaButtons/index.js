import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import './styles.css'
class SocialMediaButtons extends Component {
    render(){
        return(
	        <div class="foot">
			      <Divider />
			      <footer>
			      <Typography variant="subtitle3" align="left" component="p">
			      		<h2>Andrew Watts</h2>
			      		<h4>Owner/Operator</h4>
			      		<h4>(630)-272-6246</h4>
			      		<a class="email" href="mailto: Andrew@MidwestWatts.com">Email</a>
			      		</Typography>
			        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
			          	<SocialIcon url="http://instagram.com/midwest_watts" />
			          
			          	<SocialIcon url="http://facebook.com/wattsmidwest" />
			          <Typography variant="subtitle3" align="right" component="p">
			          	<h5>Let our passion add value to yours! We currently rent and provide lighting from simple par cans to moving heads! We now also offer truss and sound rentals!</h5>
			          </Typography>
			          
			        </Typography>
			        <Divider/>
			        <img class="bottompics" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shure_Logo.svg/2000px-Shure_Logo.svg.png"/>
			        <img class="bottompics" src="http://www.brackenaudio.com/wp-content/uploads/2013/05/global-truss-logo-2012-black-300x131.png"/>
			        <img class="bottompics" src="https://i2.wp.com/www.mobilebeat.com/wp-content/uploads/2012/08/Chauvet-logo-DJ-RED-version.png?ssl=1"/>
			        <img class="bottompics" src="https://seeklogo.com/images/Q/QSC_Audio-logo-16E32E3612-seeklogo.com.png"/>
			      </footer>
	      	</div>
        )
    }
}
export default SocialMediaButtons;
