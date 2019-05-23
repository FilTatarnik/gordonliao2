import React, { Component } from 'react';
import './styles.css';


class AboutContainer extends Component {
    render(){
        return(
          
          <wrapper id="section2">
            <div className="aboutDiv" >
              <h2>“Promise Holdings was created to help small companies reach their promise or potential, while always living and adding value with trust & integrity. That is our promise”
              </h2>
              <hr className="hr-light" />
              <h6>
                Promise Holdings is a private investment firm focused on investing in small businesses, primarily in the consumer sector, with a special emphasis in food, fashion & beauty. 
              </h6>
              <h6>
                We are not a Private Equity or Venture Capital firm so do not look to sell within 3 to 5 years. Instead we have a very long-term hold orientation and may never sell in certain instances.
              </h6>
              <h6>
                We also have a very flexible mandate as we invest in both late stage, mature businesses, as well as early stage start-ups. We can also invest a controlling stake, or a small, minority, non-control stake in businesses.  The only things we look for are:
              </h6>
            </div>
          </wrapper>
        )
    }
}
export default AboutContainer;
