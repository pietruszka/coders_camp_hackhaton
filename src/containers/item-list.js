import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Tabs} from 'antd';
import {List, Card} from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const data = [
  {
    title: 'Axes',
  },
  {
    title: 'Swords',
  },
  {
    title: 'Hammers',
  },
  {
    title: 'Daggers',
  },
  {
    title: 'Bows',
  },
];
const dataShield = [
  {
    title: 'Shields',
  },

];
const dataArmor = [
  {
    title: 'Armors',
  },
  {
    title: 'Boots',
  },
  {
    title: 'Helmets',
  },
];

class ItemList extends Component {
  renderList() {
    return (<div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab={this.props.items[0].kind} key="1">
            <div>
              <List
                grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card onClick = {() => this.props.selectItem(item)} title={item.title}>Tutaj obrazek!</Card>
                    <Card onClick = {() => this.props.selectItem(item)}> klik </Card>
                    <Card onClick = {() => this.props.selectItem(item)}>tutaj obrazek!</Card>
                  </List.Item>
                )}
              />
            </div>
          </TabPane>
          <TabPane tab={this.props.items[1].kind} key="2">
            <List
              grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
              dataSource={dataShield}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>tutaj obrazek!</Card>

                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab={this.props.items[2].kind} key="3">
            <List
              grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
              dataSource={dataArmor}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>tutaj obrazek!</Card>
                </List.Item>
              )}
            />
          </TabPane>
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

