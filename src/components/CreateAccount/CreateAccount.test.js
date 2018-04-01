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

  it.skip('Should call handleError, if the user returns an error', () => {

    const results = {error:"already exists."};

    const mockEvent = { preventDefault: jest.fn()};


    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(results)
    }));

    wrapper.instance().handleSubmit(mockEvent);

    const expected = jest.spyOn(wrapper.instance(), 'handleError')


    expect(expected).toHaveBeenCalled()


  })

  it.skip('Should call handleNewUSer if there is not an error', async () => {

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

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(response)
    }));

    const response = {
      status: "true",
      data: {
        id: 13,
        name: "bob",
        password: "bugslife",
        email: "jhon@aol.col"
      }
    }

    wrapper.instance().handleSubmit(mockEvent)

    const spy = jest.spyOn(wrapper.instance(), 'handleNewUser')


    expect(spy).toHaveBeenCalled();
  })

  
  
})

