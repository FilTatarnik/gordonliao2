import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import './styles.css'
class SocialMediaButtons extends Component {
    render(){
        return(
	        <div>
			      <Divider />
			      <footer>
			      <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
			      		<h2>Andrew Watts</h2>
			      		</Typography>
			        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
			          	<SocialIcon url="http://instagram.com/midwest_watts" />
			          
			          	<SocialIcon url="http://facebook.com/wattsmidwest" />
			          

			          
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
