import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemDetail extends Component {
  render() {
    if (!this.props.item) {
      return <div></div>
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>My item: {this.props.item.kind}</div>
        <div>Description: {this.props.item.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem
  };
}

export default connect(mapStateToProps)(ItemDetail);
