import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
      <div>
        <span className="QuestTitle">{this.props.title}</span><br/>
        {this.props.description}<br />
        {this.props.progress}/{this.props.goal}
      </div>
    );
  }
}

export default Mission;
