import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('portal');

export default class Modal extends Component {
  el = document.createElement('div')

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return (
      ReactDOM.createPortal(children, this.el)
    );
  }
}
