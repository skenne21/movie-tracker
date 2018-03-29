import React, { Component } from 'react';
import {signIn} from '../../helper/apiCall';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errorMessage: '',
      fetchedUser: {}
    };
  }
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const email = this.state.email.toLowerCase();
    const password = this.state.password;
    const user = await signIn(event, email, password);
    user.status ? this.setState({fetchedUser: user.data}) : 
      this.setState({errorMessage: user.error.message});
    console.log(user);
  }

  createAccount = async () => {

  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter User Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={this.handleChange}
          />
          <button>Submit</button><br/>
          <p>tman2272@aol.com password</p>
        </form>
      </div>
    );
  }
}

export default SignIn;
