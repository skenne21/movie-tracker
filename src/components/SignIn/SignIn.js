import React, { Component } from 'react';
import {signIn} from '../../helper/apiCall';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.user.length ? this.handleSignOut() : this.handleSignIn(event);
  }

  handleSignIn = async (event) => {
    const email = this.state.email.toLowerCase();
    const password = this.state.password;
    const user = await signIn(event, email, password);
    user.status ?
      this.handleUser(user.data)
      :
      this.handleError(user.error);

    this.setState({
      email: '',
      password: ''
    });
  }

  handleUser = (user) => {
    this.props.handleUser(user);
    this.props.history.push('/');
    console.log(this.props.history);
  }

  handleSignOut = () => {
    this.props.removeUser();
  }

  handleError = (error) => {
    this.setState({errorMessage: error.message});
    alert('Email and Password do not match!');
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
          <button>{this.props.user.length ? "Sign Out": "Sign In"}</button><br/>
          <p>tman2272@aol.com password</p>
        </form>
      </div>
    );
  }
}

export default SignIn;
