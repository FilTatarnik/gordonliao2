import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class LightsContainer extends Component {
	constructor(){
		super();

		this.state = {
			lights: []
		}
	}
	getLights = async () => {
		const response = await fetch('http://localhost:9292/api/lighting');
		const lightParsedJSON = await response.json();
		console.log(lightParsedJSON);
		// return lightParsedJSON
		this.setState({
			lights: lightParsedJSON.light
		})
		
		// console.log(lightParsedJSON);
		// this.setState({
		// 	email: ownerParsedJSON.email,
		// 	appointments: ownerParsedJSON.appointments
		// })
		// return ownerParsedJSON
	}
	componentDidMount(){
		this.getLights();
	}
    render(){
	   const lightList = this.state.lights.map((light, i) => {
		   	return(
		   		<div key={i}>
		   			<h1>
		   			{light.name}
		   			</h1>
		   		</div>
		   		)	
	   })
    return(
		    <div className="back">
		    	<br />
		    	<h1>This is where the light json data will go </h1>
		      		
		      			<h1>{lightList}</h1>
		      		
		      	<Divider />
		      	<br />
		      	<br />
		      	<Divider />
		    </div>
    )
    }
}
export default LightsContainer;
