import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/index';
import {bindActionCreators} from 'redux';

//tabs from AntDesign
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

//end tabs

class ItemList extends Component {
  renderList() {
    return (<div>

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab={this.props.items[0].kind} key="1">{this.props.items[0].weaponKind}</TabPane>
          <TabPane tab={this.props.items[1].kind} key="2">CTUTAJ LISTA PRZEDMIOTOW</TabPane>
          <TabPane tab={this.props.items[2].kind} key="3">CTUTAJ LISTA PRZEDMIOTOW</TabPane>
        </Tabs>
      </div>
    );
  };


  render() {
    return this.renderList();
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of ItemList
  return {
    items: state.items
  };
}

// anything returned from this function
// will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenewer selectBook i caled,
  // the result be passed to all of our reducers
  return bindActionCreators({selectItem: selectItem}, dispatch)

}

// promote BookList from a component to a container -
// it needs to know about this new dispatch method, selectBook.
// Make it avaliable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

