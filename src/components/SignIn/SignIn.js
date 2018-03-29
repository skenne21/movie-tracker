import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: '',
      fetchedUser: ''
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  async componentDidMount() {
    const signIn = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({email: 'tman2272@aol.com', password: 'password'}),
      headers: {'Content-Type': 'application/json'},
    });
    const json = await signIn.json()
    console.table(json)
  }
  handleSubmit = async (event) => {
    // event.preventDefault();

    // const signIn = await fetch('api/users', {
    //   method: 'post',
    //   body: JSON.stringify({email: 'tim@aol.com', password: 'password'}),
    //   headers: {'Content-Type': 'application/json'},
    // });
    // const response = signIn.json();
    // console.log(signIn);
    //
    // this.setState({fetchedUser: response})
  }


  render() {
    const { user, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user"
            value={user}
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn
