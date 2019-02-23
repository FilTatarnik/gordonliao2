import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './styles.css'

const styles = {

};


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
			   		<div className="lightCardDiv" key={i} >
					   			<Grid  rows={2}spacing={24} className="lightCard">
					   				<Grid item >
					   					<Card>
					   					<Typography>
					   					{light.name}
					   					</Typography>
					   					<Divider/>
					   					<Typography>
					   					{light.description}
					   					</Typography>
					   					</Card>
					   				</Grid>
					   			</Grid>
					   			<br/>
			   		</div>
		   		)	
	   })
    return(
		    <div className="back">
		      {lightList}
		    </div>
    )
    }
}
export default withStyles(styles)(LightsContainer);
