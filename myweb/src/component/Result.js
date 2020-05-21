import React, { Component } from 'react';
import axios from 'axios';
import banana from '../image/banana.png';
import apple from '../image/apple.png';
import orange from '../image/orange.png';
import ReactGA from 'react-ga';
import {
  Button,
  FormGroup,
  Input,
  Card,
  CardText,
  CardBody,
  Row,
  Col,
  CardHeader,
} from 'reactstrap';

export default class result extends Component {
  state = {
    name: '',
    banana: 0,
    apple: 0,
    orange: 0,
    status: 'New User',
  };

  async componentDidMount() {
    ReactGA.pageview(window.location.pathname);
    if (this.props.location.name == '') {
      alert('Please input your name before enter store');
      this.props.history.push({ pathname: '/miniproj' });
    }
    const profile = await axios.post('http://localhost:5000/apifind', {
      name: this.props.location.name,
    });
    console.log(this.props.location);
    console.log('Done sent');
    this.setState({ name: this.props.location.name });
    if (profile.data != null) {
      this.setState({
        banana: profile.data.banana,
        apple: profile.data.apple,
        orange: profile.data.orange,
        status: 'User',
      });
    }
    // const ans = await axios.get('http://localhost:5000/apiget');
    console.log(profile);
    // console.log(ans);
  }
  deleteUser = async () => {
    const profile = await axios.post('http://localhost:5000/apidelete', {
      name: this.state.name,
    });
    alert('Deleting your profile');
    this.props.history.push({ pathname: '/miniproj' });
  };
  renderContent() {
    switch (this.state.status) {
      case 'User':
        return <Button onClick={this.deleteUser}>Delete</Button>;
      default:
        break;
    }
  }
  saveUser = async (e) => {
    console.log('save User');
    console.log(this.state);
    if (e.target.id == 'buy') {
      console.log('buy');
      await this.setState({ banana: 0, apple: 0, orange: 0 });
    }
    const sendObj = {
      name: this.state.name,
      banana: this.state.banana,
      apple: this.state.apple,
      orange: this.state.orange,
    };
    if (this.state.status != null) {
      const profile = await axios.post(
        'http://localhost:5000/apiupdate',
        sendObj
      );
    } else {
      const profile = await axios.post(
        'http://localhost:5000/apicreate',
        sendObj
      );
    }
    alert('Thank for visiting');
    this.props.history.push({ pathname: '/miniproj' });
  };

  onChange = async (e) => {
    switch (e.target.id) {
      case 'addbanana':
        return this.setState({ banana: this.state.banana + 1 });
      case 'addapple':
        return this.setState({ apple: this.state.apple + 1 });
      case 'addorange':
        return this.setState({ orange: this.state.orange + 1 });
      case 'subbanana':
        return this.setState({ banana: this.state.banana - 1 });
      case 'subapple':
        return this.setState({ apple: this.state.apple - 1 });
      case 'suborange':
        return this.setState({ orange: this.state.orange - 1 });
      default:
        return;
    }
  };
  onChangeField = async (e) => {
    switch (e.target.id) {
      case 'banana':
        return this.setState({ banana: e.target.value });
      case 'apple':
        return this.setState({ apple: e.target.value });
      case 'orange':
        return this.setState({ orange: e.target.value });
    }
  };
  greetingContent = () => {
    switch (this.state.status) {
      case 'User':
        console.log('user');
        return <h1>Welcome back {this.state.name}! Hope you enjoy my store</h1>;
      case 'New User':
        console.log('user');
        return <h1>Welcome {this.state.name}! Hope you enjoy my store</h1>;
      default:
        return;
    }
  };

  render() {
    return (
      <div>
        <div className="greet">{this.greetingContent()}</div>
        <div className="flexcard">
          <div>
            <Card>
              <CardHeader>Apple</CardHeader>

              <img width="100%" src={apple} alt="Apple image" />
              <CardBody>
                <CardText>
                  Click on "+" or "-" change the number of apple that you want
                  to buy
                </CardText>

                <Row form>
                  <Col md={4}>
                    <div className="icon">
                      <i
                        className="fa fa-minus"
                        onClick={this.state.apple > 0 ? this.onChange : null}
                        id="subapple"
                      ></i>
                    </div>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        className="text-center"
                        type="numberarea"
                        id="apple"
                        value={this.state.apple}
                        onChange={this.onChangeField}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <div className="icon">
                      <i
                        className="fa fa-plus"
                        id="addapple"
                        onClick={this.onChange}
                      ></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>Banana</CardHeader>

              <img width="100%" src={banana} alt="Banana image" />
              <CardBody>
                <CardText>
                  Click on "+" or "-" change the number of banana that you want
                  to buy
                </CardText>

                <Row form>
                  <Col md={4}>
                    <div className="icon">
                      <i
                        className="fa fa-minus"
                        onClick={this.state.banana > 0 ? this.onChange : null}
                        id="subbanana"
                      ></i>
                    </div>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        className="text-center"
                        type="numberarea"
                        id="banana"
                        value={this.state.banana}
                        onChange={this.onChangeField}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <div className="icon">
                      <i
                        className="fa fa-plus"
                        id="addbanana"
                        onClick={this.onChange}
                      ></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>Orange</CardHeader>

              <img width="100%" src={orange} alt="Orange image" />
              <CardBody>
                <CardText>
                  Click on "+" or "-" change the number of orange that you want
                  to buy
                </CardText>

                <Row form>
                  <Col md={4}>
                    <div className="icon">
                      <i
                        className="fa fa-minus"
                        onClick={this.state.orange > 0 ? this.onChange : null}
                        id="suborange"
                      ></i>
                    </div>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        className="text-center"
                        type="numberarea"
                        id="orange"
                        value={this.state.orange}
                        onChange={this.onChangeField}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <div className="icon">
                      <i
                        className="fa fa-plus"
                        id="addorange"
                        onClick={this.onChange}
                      ></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="buttonalign">
          {this.renderContent()}{' '}
          <Button onClick={this.saveUser} id="save">
            Save
          </Button>{' '}
          <Button color="warning" onClick={this.saveUser} id="buy">
            Buy
          </Button>
        </div>
      </div>
    );
  }
}
