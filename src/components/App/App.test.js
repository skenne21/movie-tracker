import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { cleanData } from '../../mocks/mockMovieData';
import * as apiCall from '../../helper/apiCall';

jest.mock('../../helper/apiCall')

describe('App', () => {
  let wrapper, mockFetchMovies;

  beforeEach(() => {
    mockFetchMovies = jest.fn()
    wrapper = shallow(
      <App fetchMovies={mockFetchMovies}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchMovies on componentDidMount', () => {
    expect(mockFetchMovies).toHaveBeenCalledWith(cleanData)
  });
})
