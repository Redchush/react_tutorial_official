import * as React from "react";
import ProfileForm from "./ProfileForm";
import {Nav, Tab} from "react-bootstrap";
import SettingsForm from "./SettingsForm";
import {MDBIcon} from "mdbreact";

class NavigationContainer extends React.PureComponent {


  constructor(props) {
    super(props);
  }

  render(){
    return (
      <React.Fragment>

        <div className='navigation'>
          <Tab.Container id="form-tabs" defaultActiveKey="profile">
            <Nav  variant="tabs">
              <div className="nav-center">
                <Nav.Item>
                  <Nav.Link eventKey="settings">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profile">Profiles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="scores">Scores</Nav.Link>
                </Nav.Item>
              </div>
              <Nav.Item className="nav-right">
                <Nav.Link eventKey="close"> <MDBIcon icon="times" /></Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="settings">
                <SettingsForm settings = {this.props.settings}
                              onSubmit = {this.props.onChangeSettings}/>
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <ProfileForm profiles = {this.props.profiles}
                             onSubmit = {this.props.onChangeProfiles}/>
              </Tab.Pane>
              <div className="nav--delimiter">
                <div/>
              </div>
            </Tab.Content>
          </Tab.Container>
        </div>

      </React.Fragment>
    )
  }
}

export default NavigationContainer