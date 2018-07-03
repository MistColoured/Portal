import React, { Component } from 'react';

import Modal from './Portal/Portal';

class App extends Component {
  state = {
    showModal: false,
  };

  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleHide = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = showModal ? (
      <Modal>
        <div>
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
