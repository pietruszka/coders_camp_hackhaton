import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.description}
        {this.props.progress}/{this.props.goal}
      </div>
    );
  }
}

export default Mission;
