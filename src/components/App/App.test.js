import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { cleanData } from '../../mocks/mockMovieData';

jest.mock('../../helper/apiCall');

describe('App', () => {
  let wrapper, mockFetchMovies;

  beforeEach(() => {
    mockFetchMovies = jest.fn();
    wrapper = shallow(
      <App fetchMovies={mockFetchMovies}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchMovies on componentDidMount', () => {
    expect(mockFetchMovies).toHaveBeenCalledWith(cleanData);
  });
});
