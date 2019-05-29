import React from 'react';
import { MDBMedia } from 'mdbreact';
import './styles.css'

const MediaObjectPage = () => {
  return (
    <div id="section4">
    <hr/>
    <h1 className="header"> Portfolio Companies </h1>
    <br/>
    <br/>
    <MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left href="https://www.shopakira.com/?gclid=CjwKCAjw27jnBRBuEiwAdjQXDLvGOPPIwYJEUeojpZvbo08evdfrlRExYbkTmIaVw-kPUNFeXNS8ghoCdx8QAvD_BwE">
          <MDBMedia object src="https://i.imgur.com/XaeQSu0m.jpg?1" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            <strong><h2>Akira</h2></strong>
          </MDBMedia>
          AKIRA first opened in 2002 as one Women's boutique in the trendy Wicker Park neighborhood of Chicago and is owned by Eric Hsueh, Erikka Wang, Sarah Hughes, and Gordon Liao. AKIRA offers a full-line of Women's clothing, footwear, and accessories, carrying brands such as adidas, Champion, I.AM.GIA and even our own private labels. Over the years, AKIRA has expanded to 27 stores (with more stores on the way!), and a website serving customers around the world.<a href="https://www.shopakira.com/?gclid=CjwKCAjw27jnBRBuEiwAdjQXDLvGOPPIwYJEUeojpZvbo08evdfrlRExYbkTmIaVw-kPUNFeXNS8ghoCdx8QAvD_BwE">Akira.com</a>
          </MDBMedia>
      </MDBMedia>
      <br/>
      <br/>
      <MDBMedia tag="li">
        <MDBMedia left href="http://www.azaleawang.com/">
          <MDBMedia object src="https://i.imgur.com/HEXzhF3m.png" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            <strong><h2>Azalea Wang</h2></strong>
          </MDBMedia>
         Azalea Wang is a cutting-edge designer and seller of trendy shoes for women from all walks of life. <a href="http://www.azaleawang.com/">azaleawang.com</a>
        </MDBMedia>
      </MDBMedia>
      <br/>
      <br/>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://i.imgur.com/TDMJRVfm.png" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            <strong><h2>Maya Romanoff</h2></strong>
          </MDBMedia>
          Maya Romanoff is the largest manufacturer of handcrafted wallcoverings in the United States. For more than 40 years, their artisans have incorporated glass beads, gold leaf, seashells, wood and stitching right in their Chicago studio. <a href="http://www.mayaromanoff.com/">mayaromanoff.com</a>
        </MDBMedia>
      </MDBMedia>
      <br/>
      <br/>
       <MDBMedia tag="li">
        <MDBMedia left href="https://www.esqclothing.com/">
          <MDBMedia object src="https://i.imgur.com/PpTxn9Mm.png?1" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            <strong><h2>ESQ Clothing</h2></strong>
          </MDBMedia>
          The ESQ garment is the pinnacle of men's tailoring as an art. It represents the countless hours and the tireless men and women whom have achieved the highest level of sartorial excellence. From your initial fitting and pattern making, to the final button sewn and ironing process, the ESQ suit renders itself an unmatched dream garment. <a href="https://www.esqclothing.com/">esqclothing.com</a>
        </MDBMedia>
      </MDBMedia>
      <br/>
      <br/>
        <MDBMedia tag="li">
        <MDBMedia left href="https://stridetool.com/">
          <MDBMedia object src="https://i.imgur.com/O3LS9qFm.png?1" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
           <strong><h2>Stride Tool</h2></strong>
          </MDBMedia>
          We are a worldwide designer and manufacturer of specialty hand tools for the professional and DIY market. Our flagship brand, Imperial® has been a pioneer in the manufacturing of brass valves and fittings, and developed into the worldwide leader of innovative products serving the HVAC/R service and tube working tool industries. <a href="https://stridetool.com/">stridetool.com</a>
        </MDBMedia>
      </MDBMedia>
      <br/>
      <br/>
    </MDBMedia>
    </div>
  );
}

export default MediaObjectPage;