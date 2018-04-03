import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';
import { signIn } from '../../helper/apiCall'
import { cleanData, cleanMovie } from '../../mocks/mockMovieData';

jest.mock('../../helper/apiCall')

describe('SignIn' ,() => {
  let wrapper, user, history, mockHandleUser, mockRemoveuser;

  beforeEach(() => {
    user = [];
    mockHandleUser = jest.fn();
    mockRemoveuser = jest.fn()
    history = { location: {pathname:'/signin'}, push: jest.fn()}
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

  it('Should have a default state of email as a empty string', () => {

    expect(wrapper.state('email')).toEqual('');
  });

  it('Should have a default password set to a empty string', () => {

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

  it('Should call handleSignIn if there is not a user', async() => {
    const event = { preventDefault: jest.fn()}
    const spy = jest.spyOn(wrapper.instance(), 'handleSignIn')
    wrapper.instance().handleSubmit(event);

    expect(spy).toHaveBeenCalledWith(event)
  })

  it('handleSignIn should set state back to default', async () => {
    const mockEvent = {}
    wrapper.setState({email: 'bob@gmail.com', password: 'password'})
    expect(wrapper.state('email')).toEqual('bob@gmail.com')
    expect(wrapper.state('password')).toEqual('password')

    await wrapper.instance().handleSignIn(mockEvent)

    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  });

  it('handleSignIn should call handleError if an error is returned', async () => {
    const mockEvent = {}
    const user = {error: 'an error occurred'}

    const spy = jest.spyOn(wrapper.instance(), 'handleError')
    await wrapper.instance().handleSignIn(mockEvent)

    expect(spy).toHaveBeenCalledWith(user.error)
  });

  it('setupUser calls handleUser with a new user object', async () => {
    const user = {email: 'bob@gmail.com', password: 'password', id: 1}

    const newUser = Object.assign({}, user, {favorites: cleanData});

    await wrapper.instance().setupUser(user);
    expect(mockHandleUser).toHaveBeenCalled();
  });

  it('handleSignOut should call removeUser', () => {
    const expected = mockRemoveuser;
    wrapper.instance().handleSignOut();

    expect(expected).toHaveBeenCalled()
  });

  it('handleError should set state to error', () => {
    const error = {message: 'an error occurred'}
    expect(wrapper.state('errorMessage')).toEqual('')
    wrapper.instance().handleError(error)

    expect(wrapper.state('errorMessage')).toEqual(error.message)
  });
})
