import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import './styles.css';


const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center" id="section3">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img src="https://i.pravatar.cc/300">
            </img>
              <h5 className="font-weight-bold mt-4 mb-3">Gordon C.C. Liao</h5>
              <p className="text-uppercase blue-text">Founder & Partner</p>
              <p className="grey-text">
                  A life-long resident of the Chicago area (originally from the far Southside), Gordon is an independent entrepreneur, investor, operator and performer.  He is a Co-founder and Partner of investment firms Promise Holdings LLC, Modjule LLC, Seismic CPG LLC and 4C Capital LLC, also founding and serving in operational roles in both control buyouts and early stage start-ups, primarily in the Consumer space. Among his companies where he is a co-owner and active board member/observer of, include Hickory Farms, Gateway Newsstands, SwingKing, HairClinical and AKIRA.

                  Prior to his current activities, Gordon spent 15 years in institutional Private Equity as a Principal and Investment professional with Baird Capital, Reliant Equity Investors, and Wind Point Partners. Gordon received his MBA from Harvard Business School where he was a Toigo Fellow and the Founder of the Asian American Business Association (AABA), and his BS from the University of Illinois, Champaign-Urbana, where he graduated with Highest Honors and as a recipient of the Bronze Tablet. 

                  Gordon's core mission in life is focused on lifting up underserved communities, with an emphasis on economic wealth creation and the enhancement of self-esteem through the performing arts.  He is the past President of the Goodman Theater's Auxiliary Board, Founding Board Member and current Vice Chair of AAAIM (the Association of Asian American Investment Managers), and former Board member of the Chicago Sinfonietta. Finally, he is a published poet, produced playwright, spoken word artist and wedding singer.
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

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img src="https://i.pravatar.cc/300"></img>
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
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;