import React from "react";
import { MDBJumbotron, MDBBtn, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'

const JumbotronPage = () => {
  return (
    <div className="about-back" id="section2">
      <div>
      <MDBRow >
        <MDBCol>
          <MDBJumbotron  style={{ padding: 0 }} id="about-image">

          <div className="bg-image">

                <MDBCol style={{backgroundImage: 'url("https://i.imgur.com/DoDkkqd.jpg")'}} className="text-black text-center py-5 px-4 my-8" id="aboutstuff">
                  <MDBCol  className="py-5">
                  <h3 id="landing" className="h3-responsive my-5 center text-white font-weight-bold" >
                  
            “Promise Holdings is a consumer-focused private investment firm created to help high potential companies, and high potential people, reach their fullest Promise.  Our only investment criteria are:(a) Great people, (b) Great ideas, and (c) Great fun. Our <u>Promise</u> to everyone we come into contact with - is that we always work with high integrity, high energy, high impact and high trust."
          </h3>
                  
                   
                    <br />
                    </MDBCol>
                    </MDBCol>
          </div>

          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      </div>
    
  
    
    </div>
  )
}

export default JumbotronPage;