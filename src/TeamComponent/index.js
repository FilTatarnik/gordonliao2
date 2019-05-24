import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import AboutModal from '../AboutModal'
import './styles.css';


const TeamPage = () => {
  return (
  <wrapper className="team-body-wrapper">
    
    <div className="team-body" id="section3" >

          <h2 className="h1-responsive font-weight-bold my-5 center" >
            Meet The Team
          </h2>
          <MDBRow>
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-5 column1">
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
                  Prior to Kona Deep Pat was the President and co-founder of popchips, Inc. which he helped build into a leading brand in North America and the U.K. 
                  Pat also served as a Vice President of Costco Wholesale Corp., where he launched and managed a number of highly successful new business ventures for Costco.  These included Costco’s gas station business, Executive Membership division and its vertically integrated snack food packaging plants.  Harvard Business School did a case study on Pat’s launching of new businesses at Costco.
                  Prior to Costco, Pat was an investment banker at Donaldson, Lufkin and Jenrette  (DLJ) working on mergers, acquisitions and public offerings.
                  Pat graduated Cum Laude with a bachelors degree in Economics from Claremont McKenna College.  He lives in Manhattan Beach, CA
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