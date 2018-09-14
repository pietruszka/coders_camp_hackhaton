import React, { Component } from 'react';
import styled from 'styled-components';
import postac from './img/postac.jpg';
import helm from './img/helm.jpg';
import { Card } from 'antd';

const Container = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: blue;
  #char{
    height: 60vh;
    width: 25vw;
  }
  .item {
    min-width: 3vw;
    height: 5vh;
    border: 2px solid black;
    background-color: gray;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;

  }
  #helm {
    background-image: url("${helm}");
    top: 7vh;
    right: 40vw;
  }
  #armor {
    background-image: url("${helm}");
    top: 35vh;
    right: 43vw;
  }
  #boots {
    bottom: 27vh;
    background-image: url("${helm}");
  }
  .gridStyle :hover{
    cursor: pointer;
  }
`;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default class Ekwipunek extends Component {
  constructor() {
    super();
    // console.log(helm);
    this.state = {
      Level: 10,
      EXP: 150,
      EXPneeded: 200,
      Points: 5,
      HP: 70,
      HPmax: 100,
      Strength: 5,
      Agility: 5,
      Luck: 5,
      Intelligence: 5,
    }
  }
  klik = (e) => {
    console.log(e.target.id);
    if (this.state.Points > 0) {

      switch (e.target.id) {
        case "1":
          // console.log('');
          this.setState({ Strength: ++this.state.Strength, Points: --this.state.Points });
          break;
        case "2":
          this.setState({ Agility: ++this.state.Agility, Points: --this.state.Points });
          break;
        case "3":
          this.setState({ Luck: ++this.state.Luck, Points: --this.state.Points });
          break;
        case "4":
          this.setState({ Intelligence: ++this.state.Intelligence, Points: --this.state.Points });
          break;
      }
    }
  }

  render() {
    console.log(postac);
    return <Container><img id="char" src={postac} />
      <div className="item" id="helm"></div>
      <div className="item" id="armor"></div>
      <div className="item" id="boots"></div>
      <Card title="Statystyki">
        <Card.Grid style={gridStyle} className="staty">Level: {this.state.Level}</Card.Grid>
        <Card.Grid style={gridStyle} className="staty">EXP: {this.state.EXP}/{this.state.EXPneeded}</Card.Grid>
        <Card.Grid style={gridStyle} className="staty">Points to spend: {this.state.Points}</Card.Grid>
        <Card.Grid style={gridStyle} className="staty">HP: {this.state.HP}/{this.state.HPmax}</Card.Grid>
        <Card.Grid id="1" onClick={this.klik} style={gridStyle} className="staty">Strength:{this.state.Strength}</Card.Grid>
        <Card.Grid id="2" onClick={this.klik} style={gridStyle} className="staty">Agility:{this.state.Agility}</Card.Grid>
        <Card.Grid id="3" onClick={this.klik} style={gridStyle} className="staty">Luck:{this.state.Luck}</Card.Grid>
        <Card.Grid id="4" onClick={this.klik} style={gridStyle} className="staty">Intelligence: {this.state.Intelligence}</Card.Grid>
      </Card>,
    </Container>;


  }
}





