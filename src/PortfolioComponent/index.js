import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./styles.css"

const gridExamplesPage = () => {
  return (
    <div id="section4">
    <hr/>
    <h2 id="port-body" className="h1-responsive font-weight-bold my-5 center d-flex justify-content-center" >
            Companies
          </h2>
          <br/>
          <br/>
          <br/>
          <br/>
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol className="d-flex justify-content-center" size="6" sm="6" lg="4">
          <img className="akira" src="https://i.imgur.com/XaeQSu0m.jpg?1"/>
        </MDBCol>

        <MDBCol size="12" sm="6" lg="8">
        <h2 className="d-flex justify-content-center">AKIRA</h2>
        <p className="d-flex justify-content-center">         First opened in 2002 as one Women's boutique in the trendy Wicker Park neighborhood of Chicago and is owned by Eric Hsueh, Erikka Wang, Sarah Hughes, and Gordon Liao. AKIRA offers a full-line of Women's clothing, footwear, and accessories, carrying brands such as adidas, Champion, I.AM.GIA and even our own private labels.</p> <a href="https://www.shopakira.com/?gclid=CjwKCAjw27jnBRBuEiwAdjQXDLvGOPPIwYJEUeojpZvbo08evdfrlRExYbkTmIaVw-kPUNFeXNS8ghoCdx8QAvD_BwE">shopakira.com</a>
        
        </MDBCol>
      </MDBRow>
      <br/>
        <MDBRow className="d-flex justify-content-center">
        <MDBCol className="d-flex justify-content-center" size="6" sm="6" lg="4">
          <img className="akira" src="https://i.imgur.com/HEXzhF3m.png"/>
        </MDBCol>

        <MDBCol size="12" sm="6" lg="8">
        <h2 className="d-flex justify-content-center">Azalea Wang</h2>
        <p className="d-flex justify-content-center">          Azalea Wang is a cutting-edge designer and seller of trendy shoes for women from all walks of life.</p> <a href="http://www.azaleawang.com/">azaleawang.com</a>
        
        </MDBCol>
      </MDBRow>
      <br/>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol className="d-flex justify-content-center" size="6" sm="6" lg="4">
          <img className="akira" src="https://i.imgur.com/TDMJRVfm.png"/>
        </MDBCol>

        <MDBCol size="12" sm="6" lg="8">
        <strong>
        <h2 className="d-flex justify-content-center">Maya Romanoff</h2>
        </strong>
        <p className="d-flex justify-content-center">          Maya Romanoff is the largest manufacturer of handcrafted wallcoverings in the United States. For more than 40 years, their artisans have incorporated glass beads, gold leaf, seashells, wood and stitching right in their Chicago studio.</p> <a href="http://www.mayaromanoff.com/">mayaromanoff.com</a>
        
        </MDBCol>
      </MDBRow>
      <br/>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol className="d-flex justify-content-center" size="6" sm="6" lg="4">
          <img id="esq" className="akira" src="https://i.imgur.com/PpTxn9Mm.png?1"/>
        </MDBCol>

        <MDBCol size="12" sm="6" lg="8">
        <strong>
        <h2 className="d-flex justify-content-center">ESQ Clothing</h2>
        </strong>
        <p className="d-flex justify-content-center">          The ESQ garment is the pinnacle of men's tailoring as an art. It represents the countless hours and the tireless men and women whom have achieved the highest level of sartorial excellence. From your initial fitting and pattern making, to the final button sewn and ironing process, the ESQ suit renders itself an unmatched dream garment.</p> <a href="https://www.esqclothing.com/">esqclothing.com</a>
        
        </MDBCol>
      </MDBRow>
      <br/>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol className="d-flex justify-content-center" size="6" sm="6" lg="4">
          <img id="stride" className="akira" src="https://i.imgur.com/O3LS9qFm.png?1"/>
          <br/>
        </MDBCol>

        <MDBCol size="12" sm="6" lg="8">
        <strong>
        <h2 className="d-flex justify-content-center">Stride Tool</h2>
        </strong>
        <p className="d-flex justify-content-center">              We are a worldwide designer and manufacturer of specialty hand tools for the professional and DIY market. Our flagship brand, Imperial® has been a pioneer in the manufacturing of brass valves and fittings, and developed into the worldwide leader of innovative products serving the HVAC/R service and tube working tool industries.</p> <a href="https://stridetool.com/">stridetool.com</a>
        
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default gridExamplesPage;