import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './styles.css'

class ModalPage extends Component {
state={
  modal5: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn className="button" color="yellow" onClick={this.toggle(5)}>Learn more</MDBBtn>
      <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="large">
        <MDBModalHeader toggle={this.toggle(5)}><h1><strong>Gordon C.C. Liao</strong></h1></MDBModalHeader>
        <MDBModalBody className="modal-font">
        <h5>
        Prior to Kona Deep Pat was the President and co-founder of popchips, Inc. which he helped build into a leading brand in North America and the U.K. Pat also served as a Vice President of Costco Wholesale Corp., where he launched and managed a number of highly successful new business ventures for Costco.  These included Costco’s gas station business, Executive Membership division and its vertically integrated snack food packaging plants.  Harvard Business School did a case study on Pat’s launching of new businesses at Costco.
         <br/>
         <br/>
         Prior to Costco, Pat was an investment banker at Donaldson, Lufkin and Jenrette  (DLJ) working on mergers, acquisitions and public offerings.
          Pat graduated Cum Laude with a bachelors degree in Economics from Claremont McKenna College.  He lives in Manhattan Beach, CA

        </h5>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="yellow" onClick={this.toggle(5)}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;