import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBCard } from "mdbreact";
import './styles.css';


const ProjectsPage = () => {
  return (
        <section className="my-5">
      <hr />
            <h2 className="h1-responsive font-weight-bold text-center my-5" id="section4">
              Portfolio Companies
            </h2>

            <MDBRow>

              <MDBCol lg="5" className="mb-lg-0 mb-5">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
                  alt=""
                  className="img-fluid rounded z-depth-1"
                />
              </MDBCol>

              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
                  </MDBCol>

                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">AKIRA</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                      Reprehenderit maiores nam, aperiam minima elit assumenda
                      voluptate velit.
                    </p>
                  </MDBCol>

                </MDBRow>

                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="music" size="2x" className="pink-text" />
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
                    <MDBIcon far icon="smile" size="2x" className="blue-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Maya Romanoff</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                      Reprehenderit maiores nam, aperiam minima elit assumenda
                      voluptate velit.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="book" size="2x" className="cyan-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">ESQ Clothing</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                      Reprehenderit maiores nam, aperiam minima elit assumenda
                      voluptate velit.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                    <MDBIcon icon="code" size="2x" className="red-text" />
                  </MDBCol>
                  <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Stride Tool</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                      Reprehenderit maiores nam, aperiam minima elit assumenda
                      voluptate velit.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" size="2">
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol lg="5">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                  alt=""
                  className="img-fluid rounded z-depth-1"
                />
              </MDBCol>
            </MDBRow>
          <br />
          <br />
          <br />
          <br />
          <br />
          </section>
  );
}

export default ProjectsPage;