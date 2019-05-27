import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#039be5 light-blue darken-1" className="font-small pt-4 mt-4" id="section5">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title"><strong>Contact Us</strong></h4>
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
            <h4 className="title"><strong>Follow us</strong></h4>
            <MDBBtn size="md" gradient="indigo" a href="https://www.linkedin.com/in/gordon-chun-ching-liao-802330/"><MDBIcon fab icon="linkedin" size="5x" /></MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;