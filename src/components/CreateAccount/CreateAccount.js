import React, { Component } from 'react';
import { postCreateUser, signIn } from '../../helper/apiCall';
import PropTypes from 'prop-types';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const createUser = await postCreateUser(this.state);
    createUser.status ?
      this.handleNewUser(event):
      this.handleError(createUser.error);

  }

  handleNewUser = async (event) => {
    const { email, password } = this.state;
    const grabUser = await signIn(event, email, password);
    this.props.handleUser(grabUser.data);
    this.props.history.push('/');
  }

  handleError = () => {
    alert('Email already exists');
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            value={name}
            placeholder="Enter Your name"
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
CreateAccount.propTypes = {

  handleUser: PropTypes.func,
  history: PropTypes.object
};

export default CreateAccount;
