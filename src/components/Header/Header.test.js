import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
  })
})
