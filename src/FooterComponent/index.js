import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import './styles.css'

const FooterPage = () => {
  return (
    <div className="feet">
    <MDBFooter style={{ margin: 0 }} color="light-blue" className="font-small pt-4 mt-4" id="section5">
      <MDBContainer style={{ margin: 0 }} fluid className="text-center">

        <MDBRow>
          <MDBCol md="6">
            <h4 className="title"><strong>Contact</strong></h4>
            <p>
              Gordon Liao
            </p>
            <p>
              (312) 543 3789
            </p>
             <p>
            gliao@promise-holdings.com
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h4 className="title"><strong>Connect</strong></h4>
            <MDBBtn size="md" gradient="indigo" a href="https://www.linkedin.com/in/gordon-chun-ching-liao-802330/"><MDBIcon fab icon="linkedin" size="5x" /></MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;