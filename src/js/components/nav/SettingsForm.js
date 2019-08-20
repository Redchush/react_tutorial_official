import * as React from "react";
import {ButtonToolbar, Form, Button} from "react-bootstrap";
import * as R from "ramda";
import U from "../../util/Util.js";
import GameSettings from "../../model/GameSettings";

class SettingsForm extends React.Component{

  static initialValidationResult = ()=>{return U.createValidationResult(GameSettings.NAMES)}

  constructor(props) {
    super(props);
    this.state = {
      settings : this.props.settings,
      validationResult : SettingsForm.initialValidationResult()
    };
    this.onChangeSize = this._changeSetting.bind(this, GameSettings.NAMES.boardSize);
    this.onChangeCellSize = this._changeSetting.bind(this, GameSettings.NAMES.cellSize);
    this.onSubmit = this.onSubmit.bind(this);
  }
  _changeSetting(settingName, evt){
    evt.preventDefault();
    let value = evt.target.value;
    let parsedResult =  Number.parseInt(value, 10);
    let validationResult = this.state.validationResult;
    if(!parsedResult){
      validationResult = R.clone(validationResult);
      validationResult[settingName] = false;
    }

    let newSettings = this.state.settings.set(settingName, value);
    this.setState({
      settings: newSettings,
      validationResult: validationResult
    });
  }
  onSubmit(evt){
    evt.preventDefault();
    let cellSize = Number.parseInt(this.state.settings.cellSize, 10);
    let boardSize = Number.parseInt(this.state.settings.boardSize, 10);
    if(cellSize && boardSize){
      this.props.onSubmit(new GameSettings(boardSize, cellSize));
    }
  }

  render() {
    const {cellSize, boardSize} = this.state.settings;
    const {cellSize : isCellSizeValid, boardSize : isBoardSizeValid} = this.state.validationResult;
    return(
      <Form className='tab-container settings-form' onSubmit={this.onSubmit}>
        <div className='form-fields settings--container'>
          <Form.Row className="">
            <Form.Group>
              <Form.Label>Board size:</Form.Label>
              <Form.Control type="number" name={'board-size'}
                            value={boardSize}
                            isValid={isCellSizeValid}
                            onChange={this.onChangeSize}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cell size:</Form.Label>
              <Form.Control type="number" name={'cell-size'}
                            value={cellSize}
                            isValid={isBoardSizeValid}
                            onChange={this.onChangeCellSize}
                            />
            </Form.Group>
          </Form.Row>
        </div>
        <ButtonToolbar className="justify-content-center">
          <Button className="btn-form-submit" type="submit" value="Submit" >Save</Button>
        </ButtonToolbar>
      </Form>
    )
  }
}

export default SettingsForm;
