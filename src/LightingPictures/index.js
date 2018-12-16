import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';



class LightingPicture extends Component {
    render(){
        return(
    <div>
    <br />
      <h1>This is where the pictures that Watts is going to give us are going to go.</h1>
      	<Divider />
      	<br />
      <Card style={{maxHeight: 750, maxWidth: 750, marginLeft: 200}}>
      	<img src="https://i.imgur.com/I1wluQE.jpg">
      	</img>
      </Card>
      <br />
      	<Divider />
    </div>
        )
    }
}
export default LightingPicture;
 