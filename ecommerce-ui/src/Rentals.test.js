import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import Rentals from './Rentals';

it('shallow renders', () => {
    const wrapper = shallow(<Rentals />);
    expect(wrapper).toMatchSnapshot();
  
    expect(wrapper.props('classes')).toBeDefined();
    expect(wrapper.props('rentals')).toBeDefined();
    expect(wrapper.props('onClick')).toBeDefined();
  
  });