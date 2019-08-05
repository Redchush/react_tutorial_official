import * as React from "react";
import ProfileForm from "./ProfileForm";
import styles from "../../../sass/components/navigation.scss";
import {Nav, Tab, Tabs} from "react-bootstrap";
import SettingsForm from "./SettingsForm";
import Scores from "./Scores";
import {MDBIcon} from "mdbreact";

class NavigationContainer extends React.PureComponent {


  constructor(props) {
    super(props);
  }
  onChangeSize(evt){
    let newSize = evt.target.value;

    this.setState({
      size: evt.target.value
    })
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
          {/*<Tabs defaultActiveKey="profile" id="settings-tabs" className="justify-content-center" >*/}
          {/*<Tab eventKey="settings" title="Settings"/>*/}
          {/*<Tab eventKey="profile" title="Profiles"/>*/}
          {/*<Tab eventKey="scores" title="Scores"/>*/}
          {/*</Tabs>*/}

            {/*<Tabs defaultActiveKey="profile" id="settings-tabs" className="justify-content-center" >*/}
              {/*<Tab eventKey="settings" title="Settings">*/}
                {/*<SettingsForm settings = {this.props.settings}*/}
                              {/*onSubmit = {this.props.onChangeSettings}/>*/}
              {/*</Tab>*/}
              {/*<Tab eventKey="profile" title="Profiles">*/}
                {/*<ProfileForm profiles = {this.props.profiles}*/}
                             {/*onSubmit = {this.props.onChangeProfiles}/>*/}
              {/*</Tab>*/}
              {/*<Tab eventKey="scores" title="Scores">*/}
                {/*<Scores/>*/}
              {/*</Tab>*/}
            {/*</Tabs>*/}
        </div>

      </React.Fragment>
    )
  }
}

export default NavigationContainer