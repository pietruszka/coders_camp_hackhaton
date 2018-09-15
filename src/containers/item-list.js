import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Tabs } from 'antd';
import { List, Card } from 'antd';
import { dataWeapons, dataShield, dataArmor } from './item-data';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class ItemList extends Component {
  renderItemTypeList(item) {
    console.log(item);
    return (
      <List.Item key={item.id}>
        <ul>
          <Card title={item.title}>
            {item.items.map(item => {
              return (
                <ul key={item.id} onClick={() => this.props.selectItem(item)}>
                  {item.title}
                </ul>
              );
            })}
          </Card>
        </ul>
      </List.Item>
    );
  }
  renderTable(data) {
    return (
      <TabPane tab={data.dataTitle} key="1">
        <div>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={data.itemList}
            renderItem={item => this.renderItemTypeList(item)}
          />
        </div>
      </TabPane>
    );
  }
  renderList() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {this.renderTable(dataWeapons)}
        </Tabs>
      </div>
    );
  }

  render() {
    return this.renderList();
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of ItemList
  return {
    items: state.items,
  };
}

// anything returned from this function
// will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenewer selectBook i caled,
  // the result be passed to all of our reducers
  return bindActionCreators({ selectItem: selectItem }, dispatch);
}

// promote BookList from a component to a container -
// it needs to know about this new dispatch method, selectBook.
// Make it avaliable as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
