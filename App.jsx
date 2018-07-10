import React, { Component } from 'react';
import MyPortal from './Portal/MyPortal';

class App extends Component {
  state = {
    show: false,
    count: 27,
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  handleToggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { count, show } = this.state;
    return (
      <div>
        <button onClick={this.handleToggle}>Click Me</button>
        {count}
        {show && (
          <MyPortal>
            I am an external window
            {count}
          </MyPortal>)}
      </div>
    );
  }
}

export default App;
