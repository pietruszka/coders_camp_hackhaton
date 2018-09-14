import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        {this.props.description}<br />
        {this.props.progress}/{this.props.goal}
      </div>
    );
  }
}

export default Mission;
