import React from 'react'
import Immutable from 'immutable';
import Profile from  '../model/Profile';
import ProfileForm from './ProfileForm.js'
import * as R from 'ramda'
import BoardContainer from "./BoardContainer";

// let { Map, List } = require('immutable');

class Game extends React.Component {

  constructor(props) {
    super(props);
    let array =[
        new Profile("Player1", "Player1", "0"),
        new Profile("Player2", "Player2", "X")
    ];
    this.state = {
      profiles : Immutable.List(array)
    };
    this.onChangeProfiles = R.bind(this.onChangeProfiles, this);

  }

  onChangeProfiles(profiles){
    this.setState({
      profiles: profiles,
      boardSize: 3
    })
  }

  render() {
    return (
      <div className="game">
        <ProfileForm profiles = {this.state.profiles}
                     onSubmit={this.onChangeProfiles}/>
        <div className="game-board">
          <BoardContainer profiles = {this.state.profiles}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game