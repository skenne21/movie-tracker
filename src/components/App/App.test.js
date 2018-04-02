import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { cleanData } from '../../mocks/mockMovieData';

describe('App', () => {
  let wrapper, mockFetchMovies;

  beforeEach(() => {
    mockFetchMovies = jest.fn()
    wrapper = shallow(
      <App fetchMovies={mockFetchMovies}/>, {disableLifecycleMethods: true});
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})





