import React, { Component } from 'react';
import MyPortal from './Portal/MyPortal';

class App extends Component {
  state = {
    count: 0,
    showWindow: false,
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  handleToggle = () => {
    this.setState(prevState => ({
      showWindow: !prevState.showWindow,
    }));
  }

  render() {
    const { count, showWindow } = this.state;
    return (
      <div>
        <h1>
          {count}
        </h1>
        <button onClick={this.handleToggle}>
          {showWindow ? 'Hide' : 'Show'} the window
        </button>
        {showWindow && (
          <MyPortal>
            <h1>{count}</h1>
            <button onClick={() => this.handleToggle()}>
              Close Me!
            </button>
          </MyPortal>
        )}
      </div>
    );
  }
}

export default App;
