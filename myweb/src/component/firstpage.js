import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import Result from './Result';

export default class firstpage extends Component {
  state = {
    name: '',
    banana: 0,
    apple: 0,
    orange: 0,
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  onClick = () => {
    console.log('conclick firstpage');
    this.props.history.push({ pathname: '/store', name: this.state.name });
  };

  onChange = (e) => {
    console.log(this.state.name);
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <p>
          ผมได้สร้างโปรเจคเล็กขึ้นนั้นก็คือโปรคเจคนี้ครับ
          โดยหลังจากที่กรอกชื่อและกดปุ่ม "Go" เรียบร้อยแล้ว
          ท่านจะเข้าไปหน้าต่อไปและสามารถเลือกซื้อผลไม้ได้
          หากท่านมีข้อมูลในฐานข้อมูลแล้ว(MongoDB) ระบบหลังบ้าน(Node.js)
          จะดึงข้อมูลท่านกลับมา หลังจากหน้านี้ท่านสามารถเลือกได้ว่าจะกดซื้อของ
          หรือจะแค่เก็บประวัติของท่านไว้
          แต่หากท่านมีข้อมูลในฐานข้อมูลแล้วท่านสามารถเลือกที่จะลบข้อมูลท่านได้ฒ
          <br></br>
          ผมสร้างโปรเจคนี้ขึ้นเพื่อลองทำการเชื่อม Database-Server-Client
          เข้าด้วยกันครับ
        </p>
        <Form>
          <Col md={5}>
            <FormGroup>
              <Label>What is your name</Label>
              <Input
                width="20%"
                type="text"
                placeholder="What is your name?"
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={this.onClick}>Go</Button>
          </Col>
        </Form>
      </div>
    );
  }
}
