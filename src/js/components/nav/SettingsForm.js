import * as React from "react";
import {ButtonToolbar, Form, Button} from "react-bootstrap";
import * as R from "ramda";

class SettingsForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      settings : this.props.settings
    };
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeCellSize = this.onChangeCellSize.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeSize(evt){
    evt.preventDefault();
    let value = evt.target.value;
    let newSettings = this.state.settings.set("boardSize", Number.parseInt(value, 10));
    this.setState({
      settings: newSettings
    });
  }
  onChangeCellSize(evt){
    evt.preventDefault();
    let value = evt.target.value;
    let newSettings = this.state.settings.set("cellSize", Number.parseInt(value, 10));
    this.setState({
      settings: newSettings
    });
  }
  onSubmit(evt){
    evt.preventDefault();
    this.props.onSubmit(this.state.settings);
  }

  render() {
    return(
      <Form className='tab-container settings-form' onSubmit={this.onSubmit}>
        <div className='form-fields settings--container'>
          <Form.Row className="">
            <Form.Group>
              <Form.Label>Board size:</Form.Label>
              <Form.Control type="number" name={'board-size'}
                            value={this.state.settings.boardSize}
                            isValid={true}
                            onChange={this.onChangeSize}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cell size:</Form.Label>
              <Form.Control type="number" name={'cell-size'}
                            value={this.state.settings.cellSize}
                            isValid={true}
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
