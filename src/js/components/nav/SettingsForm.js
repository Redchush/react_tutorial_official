import * as React from "react";
import {ButtonToolbar, Form, Button} from "react-bootstrap";

class SettingsForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      settings : this.props.settings
    };
    this.onChangeSize = this.onChangeSize.bind(this);
  }
  onChangeSize(evt){
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
                            value={this.props.settings.boardSize}
                            onChange={this.onChangeSize} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cell size:</Form.Label>
              <Form.Control type="number" name={'board-size'}
                            value={this.props.settings.cellSize}
                            onChange={this.onChangeSize} />
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
