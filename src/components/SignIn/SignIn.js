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
    return (
      <div>
        <form>
          <input type="text" name="user" value="this.state.user"/>
          <input type="text" name="password" value="this.state.password"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn
