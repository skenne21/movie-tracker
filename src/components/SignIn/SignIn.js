import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { signIn, getFavorites } from '../../helper/apiCall';
import PropTypes from 'prop-types';


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
      this.setupUser(user.data)
      :
      this.handleError(user.error);
    this.setState({
      email: '',
      password: ''
    });
  }

  setupUser = async (user) => {
    const userFavorites = await getFavorites(user.id);
    const newUser = Object.assign({}, user, {favorites: userFavorites});
    this.props.handleUser(newUser);
    this.props.history.push('/');
  }

  handleSignOut = () => {
    this.props.removeUser();
  }

  handleError = (error) => {
    this.setState({errorMessage: error.message});
    alert('Email and Password do not match!');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={this.handleChange}
          />
          <button type="Submit">{this.props.user.length ?
            "Sign Out":
            "Sign In"}</button><br/>
        </form>
        <NavLink to="/account">Create an Account</NavLink>
      </div>
    );
  }
}

SignIn.propTypes = {
  user: PropTypes.array,
  handleUser: PropTypes.func,
  history: PropTypes.object,
  removeUser: PropTypes.func
};

export default SignIn;
