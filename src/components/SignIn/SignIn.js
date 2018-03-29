import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errorMessage: '',
      fetchedUser: ''
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
    
    this.signIn(event, email, password);
  }

  signIn = async (event, email, password) => {
    try {
      const signIn = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}
      });
      const json = await signIn.json();
      console.table(json);
    } catch (error) {
      alert('Email or Password is Incorrect. Please try again.');
      this.setState({errorMessage: error.message});
    }
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
