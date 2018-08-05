import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <div>{'Hello, ' + this.props.message + '!'}</div>;
  }
}

ReactDOM.render(
  // TODO: change "World" to your name
  <HelloMessage message="World"/>,
  document.getElementById('root')
);
