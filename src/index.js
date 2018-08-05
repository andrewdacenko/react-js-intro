import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  render() {
    if (this.props.count === 0) {
      return <p>Start clicking</p>;
    }

    return (
      <p>
        <span>You have clicked</span>
        {' '}
        <span className="label">{this.props.count}</span>
        {' '}
        <span>times</span>
      </p>
    );
  }
}

class Clicker extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={() => {
          this.setState({
            count: this.state.count + 1,
          });
        }}>
          Increment
        </button>
        <Counter count={this.state.count}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Clicker />,
  document.getElementById('root')
);
