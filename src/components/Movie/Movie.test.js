import React from 'react';
import { mount, shallow } from 'enzyme';
import Movie from './Movie';
import * as mocks from '../../mocks/mockMovieData'

describe('Movie', () => {
  let wrapper;
  let mockUser;
  let mockHandleUser;
  let favsMovie;
  let mockKey;

  beforeEach(() => {
    mockUser = [{
      id: 1,
      name: "Bob",
      password: "ilovemywife",
      email: "billybob@gmail.com",
      favorites: [mocks.cleanData]
    }]
    mockHandleUser = jest.fn();
    favsMovie = true;
    mockKey = 337167;

    wrapper = shallow(
      <Movie
        key={mockKey}
        movie={mocks.cleanMovie}
        user={mockUser}
        handleUser={mockHandleUser}
        favsMovie={favsMovie}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleClick to create an alert if there is not a user', () => {
    const user = [];
    wrapper = shallow(
      <Movie
        key={mockKey}
        movie={mocks.cleanMovie}
        user={user}
        handleUser={mockHandleUser}
        favsMovie={favsMovie}
      />)

    wrapper.find('button').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('should call getFavorites', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mocks.cleanData));
    wrapper.instance().createFavorites();
    await wrapper.update();
    const expected = await wrapper.updateFavorites(mockUser.favorites)

    expect(expected).toHaveBeenCalled()
  });


});
