import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemDetail extends Component {
  render() {
    if (!this.props.item) {
      return <div></div>
    }
    return (
      <div>
        <h3>Szczegóły dla: </h3>
        <div>Przedmiot: {this.props.item.title}</div>
        <div>Opis: {this.props.item.des}</div>
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
