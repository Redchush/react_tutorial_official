import * as React from "react";
import * as R from 'ramda';
import styles from "../../../sass/components/navigation.scss"
import {ButtonToolbar, Form, Button} from "react-bootstrap";
import ProfileService from "../../service/ProfileService";
import ProfileFormField from "./ProfileFormField";
import U from "../../util/Util";
import Immutable from "immutable";


class ProfileForm extends React.Component {

  static formFields = ProfileFormField.constructAll();
  static initialValidationResult =  function() {
    return  R.reduce((accumulator, val) => { accumulator[val] = true; return accumulator}, {}, R.keys(ProfileForm.formFields))
  };

  constructor(props) {
    super(props);
    this.state = {
      profiles : this.props.profiles,
      prevValidProfiles : this.props.profiles,
      validationResults: Immutable.List([ProfileForm.initialValidationResult(), ProfileForm.initialValidationResult()])
    };
    this.onChangeProfileProp = R.curry(this.onChangeProfileProp.bind(this));
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeProfileProp(field, index, evt){
    let value = evt.target.value;
    let newProfile = this.state.profiles.get(index, undefined);
    if(!newProfile){
      return;
    }
    let result = field.validateChar();
    if(!result){
      return;
    }
    newProfile = newProfile.set(field.prop, value);
    let newList = this.state.profiles.set(index, newProfile);
    this.setState({
      profiles : newList
    })
  }


  onSubmit(evt){
    evt.preventDefault();
    let isFormValid = true;
    let newValidationResult = [ProfileForm.initialValidationResult(), ProfileForm.initialValidationResult()];
    const self = this;
    let profilesToUpdate = this.state.profiles;
    let checkProfile = (item, index) =>{
      let propName = item.prop;
      let propVal1 = self.state.profiles.get(index)[propName];
      if(propVal1){
        let result = item.validateString(propVal1);
        if(!result){
          isFormValid = false;
          newValidationResult[index][propName] = false;
          let profile = profilesToUpdate.get(index).set(propName, self.state.prevValidProfiles.get(index)[propName]);
          profilesToUpdate = profilesToUpdate.set(index, profile);
        }
      }
    };
    R.forEachObjIndexed((item)=> {
       checkProfile(item, 0);
       checkProfile(item, 1);
      }, ProfileForm.formFields);
    if(isFormValid){
      this.props.onSubmit(this.state.profiles);
      this.setState({
        profilesToUpdate: this.state.profiles,
        validationResults: Immutable.List(newValidationResult)
      })
    } else {
      this.props.onSubmit(profilesToUpdate);
      this.setState({
        validationResults: Immutable.List(newValidationResult)
      })
    }
  }

  getProfileJsx(profile, index) {
    return (
      <div key={"player_" + profile.id} className={'col-sm player'}>
        <div className="player--title">Player {index + 1} </div>
        <Form.Row className="justify-content-center">
          {R.values(ProfileForm.formFields).map( (field) =>(
            <Form.Group className={"group-" + field.prop} controlId={'formGroupName' + index} key={'prop-' + field.prop}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control type="text" name={field.prop + index}
                            value={profile[field.prop]}
                            onChange={this.onChangeProfileProp(field, index)}
                            isValid = {this.state.validationResults.get(index)[field.prop]}
                            maxLength={field.maxChars}
              />
              <Form.Control.Feedback type="invalid">
                {field.errorMsg}
              </Form.Control.Feedback>
            </Form.Group>
          )
          )}
          {/*<Form.Group className="group-name" controlId={'formGroupName' + index}>*/}
            {/*<Form.Label>Name</Form.Label>*/}
            {/*<Form.Control type="text" name={'name' + index}*/}
                          {/*value={profile.name}*/}
                          {/*onChange={this.onChangeProfileProp("name", index)}*/}
            {/*/>*/}
            {/*<Form.Control.Feedback type="invalid">*/}
              {/*Please, enter a valid user name*/}
            {/*</Form.Control.Feedback>*/}
          {/*</Form.Group>*/}
          {/*<Form.Group className="group-name" controlId={'formGroupName' + index}>*/}
            {/*<Form.Label>Name</Form.Label>*/}
            {/*<Form.Control type="text" name={'name' + index}*/}
                          {/*value={profile.name}*/}
                          {/*onChange={this.onChangeProfileProp("name", index)}*/}
            {/*/>*/}
            {/*<Form.Control.Feedback type="invalid">*/}
              {/*Please, enter a valid user name*/}
            {/*</Form.Control.Feedback>*/}
          {/*</Form.Group>*/}
          {/*<Form.Group className="group-sign" controlId={'formGroupSign' + index}>*/}
            {/*<Form.Label>Sign</Form.Label>*/}
            {/*<Form.Control type="text" name={'sign' + index}*/}
                          {/*value={profile.sign}*/}
                          {/*onChange={this.onChangeProfileProp("sign", index)}*/}
                          {/*isValid={this.state.validation.sign}*/}
            {/*/>*/}
            {/*<Form.Control.Feedback type="invalid">*/}
              {/*Please, enter a valid one sign*/}
            {/*</Form.Control.Feedback>*/}
          {/*</Form.Group>*/}
          {/*<Form.Group className="group-color" controlId={'formGroupSignColor' + index}>*/}
            {/*<Form.Label> Hex Color </Form.Label>*/}
            {/*<Form.Control type="text" name={'signColor' + index}*/}
                          {/*value={profile.signColor}*/}
                          {/*isValid={this.state.validation.signColor}*/}
                          {/*onChange={this.onChangeProfileProp("signColor", index)} />*/}
            {/*<Form.Control.Feedback type="invalid">*/}
              {/*Please, enter a valid hex color. Example: #000000*/}
            {/*</Form.Control.Feedback>*/}
          {/*</Form.Group>*/}
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