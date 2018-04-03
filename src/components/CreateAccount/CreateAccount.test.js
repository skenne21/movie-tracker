import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

jest.mock('../../helper/apiCall');

describe('CreateAccount', () => {
  let wrapper, mockHandleUser, mockPush;

  beforeEach(() => {
    mockHandleUser = jest.fn();
    mockPush = jest.fn();
    wrapper = shallow(
      <CreateAccount
        handleUser={mockHandleUser}
        history={ {push:mockPush} } />);
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a default state of name as a empty string', () => {
    expect(wrapper.state('name')).toEqual('');
  });

  it('Should have a default state of email as a empty string', () => {
    expect(wrapper.state('email')).toEqual('');
  });

  it('Should have a default state of password as a empty string', () => {
    expect(wrapper.state('password')).toEqual('');
  });

  it('should set state of the event value when a change occurs', () => {
    const mockEvent = { target: {
      name:'name',
      value:'Bob'
    }};
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('Bob');
  });

  it('Should call handleError, if the user returns an error', async () => {
    const mockEvent = {preventDefault: jest.fn()};

    const expected = jest.spyOn(wrapper.instance(), 'handleError');
    await wrapper.instance().handleSubmit(mockEvent);


    await expect(expected).toHaveBeenCalled();
  });

  it('Should call handleNewUser if there is not an error', async () => {
    const mockEvent = { preventDefault: jest.fn()};

    const spy = jest.spyOn(wrapper.instance(), 'handleNewUser');
    await wrapper.instance().handleSubmit(mockEvent);


    await expect(spy).toHaveBeenCalled();
  });
});
