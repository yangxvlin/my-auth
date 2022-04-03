import React from 'react';
import axios from 'axios';

class HelloPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "null",
    }
  }

  render() {
    return(
      <div>
        <p>This is Hello page!</p>
        <p>Here is the message from backend: {this.state.data} </p>
      </div>
    );
  }
}

export default HelloPage;
