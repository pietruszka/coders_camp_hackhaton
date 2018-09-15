import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setUserProfile } from './../reducers/rootReducer';
import Ekwipunek from './ekwipunek/ekwipunek'


class Profile extends PureComponent {

  onChangeButtonClick = () => {
    const newData = {
      name: 'qweerrty'
    }

    this.props.setUserProfile(newData)
  }

  render() {
    return (<Ekwipunek />)
    // const { name, mana, exp } = this.props.profile;
    // console.log(this.props)
    // return <div>
    //   <div>Profile</div>
    //   <Button onClick={() => this.onChangeButtonClick()} type="danger">Danger</Button>
    //   <div>name: {name}</div>
    //   <div>mana: {mana}</div>
    //   <div>exp: {exp}</div>
    // </div>;
  }
}

Profile.defaultProps = {
  profile: {
    name: '',
    mana: 0,
  }
};




export default connect(({ profile }) => ({ profile }), ({ setUserProfile }))(Profile);
