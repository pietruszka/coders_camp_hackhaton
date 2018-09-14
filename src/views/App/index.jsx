import React, { PureComponent, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, withRouter
} from 'react-router-dom';

import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


import { Button } from 'antd';
import Profile from './../../components/Profile'
import Main from './../../components/Main'
import Mission from './../../components/Mission'
import Equipment from './../../components/Equipment'
import Courses from './../../components/Courses'
import Team from './../../components/Team'

import styled from 'styled-components';
import { setUserProfile } from '../../reducers/rootReducer';


const StyledMenu = styled(Menu)`
  background-color: #60712f;
`;

const StyledSider= styled(Sider)`
  background-color: #9ea93f;
`;

const StyledItem= styled(Menu.Item)`
  background-color: #5b2a86;
`;

const StyledLayout = styled(Layout)`
  background-color: #eee5e9;
`;

const StyledHeader = styled(Header)`
  span {
    color: #c4a381;
    font-size: 32px;
    margin-left: 20px;
  }
`;

const StyledStats = styled.div`
  margin: 2px;
  div {
    margin-top: 4px;
  }
  div.life {
    max-height: 30px;
    width: 100px;
    height: 25px;
    font-size: 8px;
    background-color: cornsilk;
    border-radius: 25px;
    border: burlywood 2px solid;
  }
  div.life::after {
    top: 6px;
    position: absolute;
    min-width: ${props => props.mana}px;
    height: 25px;
    min-height: 25px;
    content: "";
    z-index: 100;
    background-color: red;
    border-radius: 25px;
    border: burlywood 2px solid;
  }
  div.exp {
    max-height: 30px;
    width: 100px;
    height: 25px;
    font-size: 8px;
    background-color: cornsilk;
    border-radius: 25px;
    border: burlywood 2px solid;
  }
  div.exp::after {
    top: 35px;
    position: absolute;
    min-width: ${props => props.exp}px;
    height: 25px;
    min-height: 25px;
    content: "";
    z-index: 100;
    background-color: brown;
    border-radius: 25px;
    border: burlywood 2px solid;
  }
`;

class App extends PureComponent {


  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    console.log(this.props.profile)
    const { mana, exp, name } = this.props.profile
    return (
      <Fragment>
        <Layout style={{height: '100%'}}>
          <Router>
            <Fragment>
              <StyledSider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
              >
                <StyledMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Link to="/profile">
                      <Icon type="user" />
                      <span>Profile</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/missions">
                      <Icon type="video-camera" />
                      <span>Missions</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/equipment">
                      <Icon type="upload" />
                      <span>Equipment</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/courses">
                      <Icon type="upload" />
                      <span>Courses</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/team">
                      <Icon type="upload" />
                      <span>Team</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/logout">
                      <Icon type="upload" />
                      <span>Logout</span>
                    </Link>
                  </Menu.Item>
                </StyledMenu>
              </StyledSider>
              <StyledLayout>
                <StyledHeader style={{ background: '#fff', padding: 0 }}>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Icon
                      className="trigger"
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.toggle}
                    />
                    <span>{name}</span>
                    <StyledStats mana={mana}  exp={exp} >
                      <div  className="life"></div>
                      <div className="exp"></div>
                    </StyledStats>
                  </div>


                </StyledHeader>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, height: '100%' }}>
                  <Fragment>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/missions" component={Mission} />
                    <Route exact path="/equipment" component={Equipment} />
                    <Route exact path="/courses" component={Courses} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/logout" component={Mission} />
                  </Fragment>
                </Content>
              </StyledLayout>
            </Fragment>
          </Router>
        </Layout>
      </Fragment>
    );
  }
}

export default connect(({profile}) => ({profile}))(App);
