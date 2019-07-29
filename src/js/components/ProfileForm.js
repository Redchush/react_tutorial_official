import * as React from "react";
import * as R from 'ramda';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles : this.props.profiles
    };

    this.onChangeProfileProp = R.curry(this.onChangeProfileProp.bind(this));
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeProfileProp(prop, index, evt){
    let value = evt.target.value;

    let newProfile = this.state.profiles.get(index, undefined);
    if(!newProfile){
      return;
    }
    newProfile = newProfile.set(prop, value);
    let newList = this.state.profiles.set(index, newProfile);
    this.setState({
      profiles : newList
    })
  }
  onChangeSize(evt){
    let newSize = evt.target.value;

    this.setState({
      size: evt.target.value
    })
  }

  onSubmit(evt){
    evt.preventDefault();
    this.props.onSubmit(this.state.profiles);
  }

  getProfileJsx(profile, index) {
    return (
      <div key={"player_" + profile.id}>
        <div>Player {index} </div>
        <label> name: <input type="text" name={'login' + index}
                             value={profile.name}
                             onChange={this.onChangeProfileProp("name", index)}
        />
        </label>
        <label> sign: <input type="text" name={'sign' + index}
                             value={profile.sign}
                             onChange={this.onChangeProfileProp("sign", index)}
        />
        </label>
      </div>

    )
  }

  render(){
    return (
      <form className='profile-form' onSubmit={this.onSubmit}>
        {this.state.profiles.map(this.getProfileJsx.bind(this))}
        <p>
          <label>Board size:
            <input name='BoardSize' type="text" value={3} onChange={this.onChangeSize.bind(this)}/>
          </label>
        </p>
        <p><input type="submit" value="Submit" /></p>
      </form>
    )
  }
}

export default ProfileForm