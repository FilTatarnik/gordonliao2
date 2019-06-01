import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import AboutModal from '../AboutModal'
import AboutModal2 from '../AboutModal2'
import './styles.css';


const TeamPage = () => {
  return (
  <wrapper className="team-body-wrapper">
    
    <div className="team-body" id="section3" >

          <h2 className="h1-responsive font-weight-bold my-5 center" >
            The Team
          </h2>
          <MDBRow>
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-5 column1" alt="">
            <img src="https://i.imgur.com/M0TyGTPb.png">
            </img>
              <h5 className="font-weight-bold mt-4 mb-3">Gordon C.C. Liao</h5>
              <p className="text-uppercase blue-text">Founder & Partner</p>
              <p className="grey-text">
                  A life-long resident of the Chicago area (originally from the far Southside), Gordon is an independent entrepreneur, investor, operator and performer.  He is a Co-founder and Partner of investment firms Promise Holdings LLC, Modjule LLC, Seismic CPG LLC and 4C Capital LLC, also founding and serving in operational roles in both control buyouts and early stage start-ups, primarily in the Consumer space. Among his companies where he is a co-owner and active board member/observer of, include Hickory Farms, Gateway Newsstands, SwingKing, HairClinical and AKIRA.
                  <br/>
                  <br/>
                  <AboutModal />

              
              </p>
         
            </MDBCol>

          

            
          </MDBRow>
    </div>
   </wrapper>
  );
}

export default TeamPage;