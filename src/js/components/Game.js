import React from 'react'
import Immutable from 'immutable';
import Profile from  '../model/Profile';
import * as R from 'ramda'
import BoardContainer from "./board/BoardContainer";
import styles from "../../sass/App.scss";
import NavigationContainer from "./nav/NavigationContainer";
import GameSettings from "../model/GameSettings";
// let { Map, List } = require('immutable');

class Game extends React.Component {

  constructor(props) {
    super(props);
    let array =[
        new Profile("Player1", "Player1", "0", "#5F9EA0"),
        new Profile("Player2", "Player2", "X", "#B8860B")
    ];
    this.state = {
      profiles : Immutable.List(array),
      settings: new GameSettings(3, 34)
    };
    this.onChangeProfiles = R.bind(this.onChangeProfiles, this);
    this.onChangeSettings = R.bind(this.onChangeSettings, this);

  }

  onChangeProfiles(profiles){
    this.setState({
      profiles: profiles,
    })
  }
  onChangeSettings(settings){
    this.setState({
      settings: settings
    })
  }

  render() {
    return (
      <div className={styles.Game}>
        <NavigationContainer profiles = {this.state.profiles}
                             settings = {this.state.settings}
                             onChangeProfiles={this.onChangeProfiles}
                             onChangeSettings={this.onChangeSettings}/>
        <div className="game">
          <div className="game-board ">
            <BoardContainer profiles = {this.state.profiles}
                            settings={this.state.settings}/>
          </div>
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