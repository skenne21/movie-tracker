import React from 'react';
import { shallow } from 'enzyme';
import MovieWrapper from './MovieWrapper';
import { cleanData, cleanMovie } from '../../mocks/mockMovieData';

describe('MovieWrapper', () => {
  it('Should match the  if there is no user snapshot', () => {
    const user = [];
    const wrapper = shallow(
      <MovieWrapper
        movies={[cleanMovie]}
        user={user}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should match the snapshot if there is a user and locaiton is /', () => {
    const history = { location: {pathname:'/'}};
    const user = [{
      id: 1,
      name: "Bob",
      password: "ilovemywife",
      email: "billybob@gmail.com",
      favorites: cleanData
    }];
    const wrapper = shallow(
      <MovieWrapper
        movies={[cleanMovie]}
        user={user}
        history={history}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should match the snapshot if there is a user and locaiton is /favorites',
    () => {
      const history = { location: {pathname:'/favorites'}};

      const user = [{
        id: 1,
        name: "Bob",
        password: "ilovemywife",
        email: "billybob@gmail.com",
        favorites: cleanData
      }];
      const wrapper = shallow(
        <MovieWrapper
          movies={[cleanMovie]}
          user={user}
          history={history}/>);
      expect(wrapper).toMatchSnapshot();
    });
});