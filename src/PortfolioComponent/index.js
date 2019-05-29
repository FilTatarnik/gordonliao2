import React from 'react';
import { MDBMedia } from 'mdbreact';
import './styles.css'

const MediaObjectPage = () => {
  return (
    <div id="section4">
    <hr/>
    <h1 className="header"> Portfolio Companies </h1>
    <MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left href="https://www.shopakira.com/?gclid=CjwKCAjw27jnBRBuEiwAdjQXDLvGOPPIwYJEUeojpZvbo08evdfrlRExYbkTmIaVw-kPUNFeXNS8ghoCdx8QAvD_BwE">
          <MDBMedia object src="https://i.imgur.com/zZ0ELPym.png" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Akira
          </MDBMedia>
          AKIRA first opened in 2002 as one Women's boutique in the trendy Wicker Park neighborhood of Chicago and is owned by Eric Hsueh, Erikka Wang, Sarah Hughes, and Gordon Liao. AKIRA offers a full-line of Women's clothing, footwear, and accessories, carrying brands such as adidas, Champion, I.AM.GIA and even our own private labels. Over the years, AKIRA has expanded to 27 stores (with more stores on the way!), and a website serving customers around the world.<a href="https://www.shopakira.com/?gclid=CjwKCAjw27jnBRBuEiwAdjQXDLvGOPPIwYJEUeojpZvbo08evdfrlRExYbkTmIaVw-kPUNFeXNS8ghoCdx8QAvD_BwE">Akira.com</a>
          </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="http://www.azaleawang.com/">
          <MDBMedia object src="https://i.imgur.com/HEXzhF3m.png" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Azalea Wang
          </MDBMedia>
         Azalea Wang is a cutting-edge designer and seller of trendy shoes for women from all walks of life. <a href="http://www.azaleawang.com/">azaleawang.com</a>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://i.imgur.com/TDMJRVfm.png" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Maya Romanoff
          </MDBMedia>
          Maya Romanoff is the largest manufacturer of handcrafted wallcoverings in the United States. For more than 40 years, their artisans have incorporated glass beads, gold leaf, seashells, wood and stitching right in their Chicago studio. <a href="http://www.mayaromanoff.com/">mayaromanoff.com</a>
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
    </div>
  );
}

export default MediaObjectPage;