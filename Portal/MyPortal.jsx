import { Component } from 'react';
import ReactDOM from 'react-dom';

class MyPortal extends Component {
  el = document.createElement('div')

  componentDidMount() {
    this.externalWindow = window.open('', '', 'width=400,height=400, top=200, left=200');
    this.externalWindow.document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default MyPortal;
