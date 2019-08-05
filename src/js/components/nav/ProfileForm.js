import * as React from "react";
import * as R from 'ramda';
import styles from "../../../sass/components/navigation.scss"
import {ButtonToolbar, Form, Button} from "react-bootstrap";
import ProfileService from "../../service/ProfileService";


class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles : this.props.profiles,
      validation: this.getInitialValidation()
    };
    this.onChangeProfileProp = R.curry(this.onChangeProfileProp.bind(this));
    this.onSubmit = this.onSubmit.bind(this);
  }

  getInitialValidation(){
    return {
      name: true,
      sign: true,
      signColor: true
    }
  }

  onChangeProfileProp(prop, index, evt){
    let value = evt.target.value;
    console.log(value);

    let newProfile = this.state.profiles.get(index, undefined);
    if(!newProfile){
      return;
    }
    let result = ProfileService.validate(prop, value);
    let newValidation = {};
    if(!result){
      newValidation[prop] = false;
    }
    newProfile = newProfile.set(prop, value);
    let newList = this.state.profiles.set(index, newProfile);
    this.setState({
      validation: !result ? newValidation : this.getInitialValidation(),
      profiles : newList
    })
  }

  onSubmit(evt){
    evt.preventDefault();
    this.props.onSubmit(this.state.profiles);
  }

  getProfileJsx(profile, index) {
    return (
      <div key={"player_" + profile.id} className={'col-sm player'}>
        <div className="player--title">Player {index + 1} </div>
        <Form.Row className="justify-content-center">
          <Form.Group className="group-name" controlId={'formGroupName' + index}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name={'login' + index}
                          value={profile.name}
                          onChange={this.onChangeProfileProp("name", index)}
            />
            <Form.Control.Feedback type="invalid">
              Please, enter a valid user name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="group-sign" controlId={'formGroupSign' + index}>
            <Form.Label>Sign</Form.Label>
            <Form.Control type="text" name={'sign' + index}
                          value={profile.sign}
                          onChange={this.onChangeProfileProp("sign", index)}
                          isValid={this.state.validation.sign}
            />
            <Form.Control.Feedback type="invalid">
              Please, enter a valid one sign
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="group-color" controlId={'formGroupSignColor' + index}>
            <Form.Label> Hex Color </Form.Label>
            <Form.Control type="text" name={'signColor' + index}
                          value={profile.signColor}
                          isValid={this.state.validation.signColor}
                          onChange={this.onChangeProfileProp("signColor", index)} />
            <Form.Control.Feedback type="invalid">
              Please, enter a valid hex color. Example: #000000
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </div>
    )
  }

  render(){
    return (
        <Form className='profile-form tab-container' onSubmit={this.onSubmit}>
          {/*<h3 className="form-header">Players settings</h3>*/}
          <div className='form-fields profile--container row '>
            {this.state.profiles.map(this.getProfileJsx.bind(this))}
          </div>
          <ButtonToolbar className="justify-content-center">
            <Button className="btn-form-submit" type="submit" value="Submit" >Save</Button>
          </ButtonToolbar>
        </Form>
    )
  }
}

export default ProfileForm