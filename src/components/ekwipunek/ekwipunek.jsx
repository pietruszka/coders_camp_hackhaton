import React, { Component } from 'react';
import styled from 'styled-components';
import postac from './img/postac.png';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { setUserProfile } from './../../reducers/rootReducer';
import itempaths from './../../itemspaths';

class Ekwipunek extends Component {
  constructor(props) {
    super(props);
    console.log(itempaths);
    this.state = props.profile;
    this.helm = itempaths[0].path;
    this.armor = itempaths[2].path;
    this.boots = itempaths[6].path;
    this.weapon = itempaths[10].path;
    this.shield = itempaths[26].path;
  }
  klik = e => {
    // console.log(e.target.id);
    if (this.state.Points > 0) {
      switch (e.target.id) {
        case '1':
          // console.log('');
          this.setState({ Strength: this.state.Strength + 1, Points: this.state.Points - 1 });
          break;
        case '2':
          this.setState({ Agility: this.state.Agility + 1, Points: this.state.Points - 1 });
          break;
        case '3':
          this.setState({ Luck: this.state.Luck + 1, Points: this.state.Points - 1 });
          break;
        case '4':
          this.setState({
            Intelligence: this.state.Intelligence + 1,
            Points: this.state.Points - 1,
          });
          break;
      }
    }
  };

  render() {
    // console.log(this.state);
    return (
      <Container
        shield={this.shield}
        armor={this.armor}
        boots={this.boots}
        weapon={this.weapon}
        helm={this.helm}
        points={this.state.Points}
      >
        <img id="char" src={postac} />
        <div className="item" id="helm" />
        <div className="item" id="armor" />
        <div className="item" id="boots" />
        <div className="item" id="sword" />
        <div className="item" id="shield" />
        <Card title="Stats:">
          <Card.Grid style={gridStyle} className="staty1">
            Poziom: {this.state.Level}
          </Card.Grid>
          <Card.Grid style={gridStyle} className="staty1">
            Doświadczenie: {this.state.EXP}/{this.state.EXPneeded}
          </Card.Grid>
          <Card.Grid style={gridStyle} className="staty1">
            Punkty umiejętności: {this.state.Points}
          </Card.Grid>
          <Card.Grid style={gridStyle} className="staty1">
            PŻ: {this.state.HP}/{this.state.HPmax}
          </Card.Grid>
          <Card.Grid id="1" onClick={this.klik} style={gridStyle} className="staty">
            Siła:
            {this.state.Strength}
          </Card.Grid>
          <Card.Grid id="2" onClick={this.klik} style={gridStyle} className="staty">
            Zręczność:
            {this.state.Agility}
          </Card.Grid>
          <Card.Grid id="3" onClick={this.klik} style={gridStyle} className="staty">
            Szczęście:
            {this.state.Luck}
          </Card.Grid>
          <Card.Grid id="4" onClick={this.klik} style={gridStyle} className="staty">
            Inteligencja: {this.state.Intelligence}
          </Card.Grid>
        </Card>
      </Container>
    );
  }
  componentWillUnmount() {
    this.props.setUserProfile(this.state);
  }
}
const Container = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  #char {
    height: 55vh;
    width: 25vw;
  }
  .item {
    height: 8vh;
    width: 4vw;
    border: 2px solid black;
    background-color: gray;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
  }
  #helm {
    background-image: url("${props => props.helm}");
    top: 7vh;
    right: 40vw;
  }
  #armor {
    background-image: url("${props => props.armor}");
    top: 25vh;
    right: 48vw;
  }
  #shield {
    background-image: url("${props => props.shield}");
    top: 35vh;
    right: 45vw;
  }
  #boots {
    bottom: 27vh;
    background-image: url("${props => props.boots}");
  }
  #sword {
    background-image: url("${props => props.weapon}");
    top: 25vh;
    left: 47vw;
  }
  .staty .staty1 {
    user-select: none; /* Standard syntax */
  }
  .staty1 :hover {
    transform: scale(1);
  }
  .staty :hover {
    cursor: pointer;
    background-color: ${props => (props.points ? 'lightgreen' : 'red')};
  }
`;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default connect(
  ({ profile }) => ({ profile }),
  { setUserProfile },
)(Ekwipunek);
