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
            Meet The Team
          </h2>
          <MDBRow>
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-5 column1" alt="">
            <img src="https://i.imgur.com/M0TyGTPb.png">
            </img>
              <h5 className="font-weight-bold mt-4 mb-3">Gordon C.C. Liao</h5>
              <p className="text-uppercase blue-text">Founder & Partner</p>
              <p className="grey-text">
                  A life-long resident of the Chicago area (originally from the far Southside), Gordon is an independent entrepreneur, investor, operator and performer.  He is a Co-founder and Partner of investment firms Promise Holdings LLC, Modjule LLC, Seismic CPG LLC and 4C Capital LLC, also founding and serving in operational roles in both control buyouts and early stage start-ups, primarily in the Consumer space. Among his companies where he is a co-owner and active board member/observer of, include Hickory Farms, Gateway Newsstands, SwingKing, HairClinical and AKIRA.
                  <AboutModal />

              
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="6" md="6" className="mb-lg-0 mb-5">
            <img src="https://i.imgur.com/pbCgNUSb.png"></img>
              <h5 className="font-weight-bold mt-4 mb-3">Patrick J. Turpin</h5>
              <p className="text-uppercase blue-text">Operating Advisor (Co-founder & former COO, PopChips)</p>
              <p className="grey-text">
                  Pat is an accomplished senior executive who has successfully concepted and launched revenue-generating retail channel businesses and brands.  Pat brings over 25 years of consumer products and retail industry experience.
                  Most recently Pat was CEO of a startup beverage brand Kona Deep, where he was brought in to launch the first desalinated deep ocean water brand in North America.
                  <AboutModal2 />
                  
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            
          </MDBRow>
    </div>
  // </wrapper>
  );
}

export default TeamPage;