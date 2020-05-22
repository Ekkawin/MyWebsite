import React, { Component, useState } from 'react';
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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

    if (this.props.location.name == undefined) {
      alert('Please input your name before enter store');
      this.props.history.push({ pathname: '/miniproj' });
    }
    const profile = await axios.post('/apifind', {
      name: this.props.location.name,
    });

    this.setState({ name: this.props.location.name });
    if (profile.data != null) {
      this.setState({
        banana: profile.data.banana,
        apple: profile.data.apple,
        orange: profile.data.orange,
        status: 'User',
      });
    }
  }
  deleteUser = async () => {
    const profile = await axios.post('/apidelete', {
      name: this.state.name,
    });
    alert('Deleting your profile');
    this.props.history.push({ pathname: '/miniproj' });
  };
  // modal = async () => {
  //   const [modal, setModal] = useState(false);

  //   const toggle = () => setModal(!modal);
  //   return (
  //     <div>
  //       <Modal isOpen={modal} toggle={toggle}>
  //         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
  //         <ModalBody>
  //           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //           aliquip ex ea commodo consequat. Duis aute irure dolor in
  //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //           culpa qui officia deserunt mollit anim id est laborum.
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button color="primary" onClick={toggle}>
  //             Do Something
  //           </Button>{' '}
  //           <Button color="secondary" onClick={toggle}>
  //             Cancel
  //           </Button>
  //         </ModalFooter>
  //       </Modal>
  //     </div>
  //   );
  // };
  renderContent() {
    switch (this.state.status) {
      case 'User':
        return <Button onClick={this.deleteUser}>Delete Cart</Button>;
      default:
        break;
    }
  }
  saveUser = async (e) => {
    if (e.target.id == 'buy') {
      await this.setState({ banana: 0, apple: 0, orange: 0 });
      alert('Thank for visiting');
    } else {
      alert('Your item on cart is already save. See you next time!');
    }
    const sendObj = {
      name: this.state.name,
      banana: this.state.banana,
      apple: this.state.apple,
      orange: this.state.orange,
    };
    if (this.state.status != 'New User') {
      const profile = await axios.post('/apiupdate', sendObj);
    } else {
      const profile = await axios.post('/apicreate', sendObj);
    }

    this.props.history.push({ pathname: '/miniproj' });
  };

  onChange = async (e) => {
    switch (e.target.id) {
      case 'addbanana':
        return this.setState({ banana: this.state.banana - 1 + 2 });
      case 'addapple':
        return this.setState({ apple: this.state.apple - 1 + 2 });
      case 'addorange':
        return this.setState({ orange: this.state.orange - 1 + 2 });
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
        return <h1>Welcome back {this.state.name}! Hope you enjoy my store</h1>;
      case 'New User':
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

              <img
                className="centerimg"
                width="50%"
                src={apple}
                alt="Apple image"
              />
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
                        type="number"
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

              <img
                className="centerimg"
                width="50%"
                src={banana}
                alt="Banana image"
              />
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

              <img
                className="centerimg"
                width="50%"
                src={orange}
                alt="Orange image"
              />
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
            Save Cart
          </Button>{' '}
          <Button color="warning" onClick={this.saveUser} id="buy">
            Buy
          </Button>
        </div>
      </div>
    );
  }
}
