import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import SimpleModal from '../SimpleModal';
import './styles.css'



class LightingPicture extends Component {
    render(){
        return(
          <div class="back">
            <br />
              <h1 class="motivate">HELP OTHERS ACHIEVE THEIR DREAMS </h1>
              <h1 class="motivate"> AND YOU WILL ACHIEVE YOURS.</h1>
                <Divider />
              	<br />
                <br />
              	<Divider />
                <br />
                <SimpleModal open={this.props.open} />
          </div>
        )
    }
}
export default LightingPicture;
 