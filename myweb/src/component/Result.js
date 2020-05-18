// export default class result extends Component {
//     export const saveUser = async () => {
//         await axios.post('http://localhost:5000/apipost');
//         console.log('done');
//       };

//       export const sendUser = async (sendObj) => {
//         console.log('sendUser');
//         await axios.post('http://localhost:5000/apipost', sendObj);
//         console.log('Done sent');
//         const ans = await axios.get('http://localhost:5000/apipost');
//         console.log('Done');
//         return ans;
//       };

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup } from 'reactstrap';

export default class result extends Component {
  state = {
    name: '',
    banana: 0,
    apple: 0,
    orange: 0,
    status: null,
  };

  async componentDidMount() {
    const profile = await axios.post('/apifind', {
      name: this.props.location.name,
    });

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
  async deleteUser() {}
  renderContent() {
    switch (this.state.status) {
      case null:
        return;
      default:
        console.log('default');
        return <Button onClick={this.deleteUser()}>Delete</Button>;
    }
  }
  onClick = async () => {
    await axios.post('/apipost');
    this.setState({
      name: '',
      banana: 0,
      apple: 0,
      orange: 0,
    });
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
