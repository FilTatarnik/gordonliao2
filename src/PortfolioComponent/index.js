import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import './styles.css';


const ProjectsPage = () => {
  return (
  <wrapper className="portfolioWrapper" >
    <div id="section4" className="portfolioDiv " >
        <section className="my-8" >
      <hr />
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Portfolio Companies
            </h2>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="7" >
                <MDBRow className="mb-3 center">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="tshirt" size="2x" className="indigo-text" />
                  </MDBCol>

                  <MDBCol md="11" size="10" >
                    <h5 className="font-weight-bold mb-3">AKIRA</h5>
                    <p className="grey-text" >
AKIRA first opened in 2002 as one Women's boutique in the trendy Wicker Park neighborhood of Chicago and is owned by Eric Hsueh, Erikka Wang, Sarah Hughes, and Gordon Liao. AKIRA offers a full-line of Women's clothing, footwear, and accessories, carrying brands such as adidas, Champion, I.AM.GIA and even our own private labels. Over the years, AKIRA has expanded to 27 stores (with more stores on the way!), and a website serving customers around the world.
                    </p>
                  </MDBCol>

                </MDBRow>

                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="shoe-prints" size="2x" className="pink-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Azalea Wang</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                      Reprehenderit maiores nam, aperiam minima elit assumenda
                      voluptate velit.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon fab icon="sketch" size="2x" className="blue-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Maya Romanoff</h5>
                    <p className="grey-text">
                      Maya Romanoff is the largest manufacturer of handcrafted wallcoverings in the United States. For more than 40 years, their artisans have incorporated glass beads, gold leaf, seashells, wood and stitching right in their Chicago studio.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="cut" size="2x" className="cyan-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">ESQ Clothing</h5>
                    <p className="grey-text">
                      The ESQ garment is the pinnacle of men's tailoring as an art. It represents the countless hours and the tireless men and women whom have achieved the highest level of sartorial excellence. From your initial fitting and pattern making, to the final button sewn and ironing process, the ESQ suit renders itself an unmatched dream garment.
                    </p>
                    <p className="grey-text">
                      Our unique process requires over 45 hours of workmanship and each suit lives and breathes thanks to more than 6,000 meticulously hidden stitches made by hand. The ESQ garment is the analog in an increasing digital world, an art form uncompromising to be the best garment you'll ever own.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="tools" size="2x" className="red-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Stride Tool</h5>
                    <p className="grey-text">
                      We are a worldwide designer and manufacturer of specialty hand tools for the professional and DIY market. Our flagship brand, Imperial® has been a pioneer in the manufacturing of brass valves and fittings, and developed into the worldwide leader of innovative products serving the HVAC/R service and tube working tool industries.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          <br />
          <br />
          <br />
          <br />
          <br />
          </section>
          </div>
  </wrapper>


  );
}

export default ProjectsPage;