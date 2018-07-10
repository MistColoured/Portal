import { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  el = document.createElement('div')

  componentDidMount() {
    this.external = window.open('', '', 'width=400,height=400,top=200,left=200');
    this.external.document.body.appendChild(this.el);
  }

  componentWillUnmount = () => {
    this.external.close();
  }

  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
