import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';
import { cleanData, cleanMovie } from '../../mocks/mockMovieData';

describe('SignIn' ,() => {
  let wrapper, user, history, mockHandleUser, mockRemoveuser;

  beforeEach(() => {
    user = [];
    // user = [{
    //   id: 1,
    //   name: "Bob",
    //   password: "ilovemywife",
    //   email: "billybob@gmail.com",
    //   favorites: cleanData
    // }];
    mockHandleUser = jest.fn();
    mockRemoveuser = jest.fn()
    history = { location: {pathname:'/signin'}}
    wrapper = shallow(
      <SignIn
        user={user}
        history={history}
        handleUser={mockHandleUser}
        removeUser={mockRemoveuser}
      />
    )
  });

  it('Should match the snapshout', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a defualt state of email as a empty string', () => {

    expect(wrapper.state('email')).toEqual('');
  });

  it('Should have a defualt password set to a empty string', () => {

    expect(wrapper.state('password')).toEqual('');
  });

  it('Should have a default errorMessage to a empty string', () => {
    expect(wrapper.state('errorMessage')).toEqual('');
  });

  it('Should add the event to state when the input changes',() => {

    const event = { target: {
      name: 'email',
      value: 'bob@gmail.com'
    }};

    expect(wrapper.state('email')).toEqual('');
    wrapper.instance().handleChange(event);
    expect(wrapper.state('email')).toEqual('bob@gmail.com')
  })

  it.skip('Should call handleSignIn if ther is not a user', async() => {
    const event = { preventDefault: jest.fn()}
    wrapper.instance().handleSubmit(event);
    const expected = await wrapper.instance().handleSignIn()
    expect(expected).toHaveBeenCalledWith(event)
  })


})
