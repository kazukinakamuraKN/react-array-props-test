import React, { Component } from 'react';

import './ArrayTest.css';

class Borard extends Component {
  render() {
    return (
      <div className="ArrayTest">
        <p>
          {this.props.value}
        </p>
      </div>
    )
  }
}

class ArrayTest extends Component {
  renderBoard(i) {
    return (
      <div>
        <Borard value={i} />
        <Borard value={i} />
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderBoard("Hello")}
      </div>
    );
  }
}

export default ArrayTest;
