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
         Prior to his current activities, Gordon spent 15 years in institutional Private Equity as a Principal and Investment professional with Baird Capital, Reliant Equity Investors, and Wind Point Partners. Gordon received his MBA from Harvard Business School where he was a Toigo Fellow and the Founder of the Asian American Business Association (AABA), and his BS from the University of Illinois, Champaign-Urbana, where he graduated with Highest Honors and as a recipient of the Bronze Tablet.
         <br/>
         <br/>
         Gordon's core mission in life is focused on lifting up underserved communities, with an emphasis on economic wealth creation and the enhancement of self-esteem through the performing arts.  He is the past President of the Goodman Theater's Auxiliary Board, Founding Board Member and current Vice Chair of AAAIM (the Association of Asian American Investment Managers), and former Board member of the Chicago Sinfonietta. Finally, he is a published poet, produced playwright, spoken word artist and wedding singer.

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