import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';


describe('CreateAccount', () => {
  let wrapper, mockHandleUser, mockPush;

  beforeEach(() => {
    mockHandleUser = jest.fn();
    mockPush = jest.fn();
    wrapper = shallow(
      <CreateAccount
        handleUser={mockHandleUser}
        history={ {push:mockPush} } />)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should have a default state of name as a empty string', () => {
    expect(wrapper.state('name')).toEqual('')
  })

  it('Should have a default state of email as a empty string', () => {
    expect(wrapper.state('email')).toEqual('')
  })

  it('Should have a default state of password as a empty string', () => {
    expect(wrapper.state('password')).toEqual('')
  })

  it('should set state of the event value when a change occurs', () => {
    const mockEvent = { target: {
      name:'name',
      value:'Bob'
    }};
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('Bob');
  })

  it('Should call handleNewUSer if there is not an error', async () => {

    const user = {
      status: "success",
      data: {
        id: 13,
        name: "bob",
        password: "bugs",
        email: "jhonson@aol.col"
      }
    };

    const mockEvent = { preventDefault: jest.fn()};

    // const mockGrabUser = jest.fn().mockImplementation(() => Promise.resolve ({user}))

    // {status: "success", data: {…}, message: "Retrieved ONE User"}
    // data: {
    //   {id: 13, name: "bob", password: "bugs", email: "jhonson@aol.col"}

    // }

    const mockHandleNewUser = jest.fn()

    wrapper.instance().handleSubmit(mockEvent)

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
    }));

    
    const spy = jest.spyOn(wrapper.instance(), 'handleNewUser')

    expect(spy).toHaveBeenCalledWith(mockEvent)

  })

  
})

