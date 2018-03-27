import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  render() {
    const { user, password } = this.state;
    return (
      <div>
        <form>
          <input 
            type="text"
            name="user"
            value={user}
            placeholder="Enter User Name"
          />
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter Your Password"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn
