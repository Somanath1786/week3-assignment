import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import RentalCard from './RentalCard';

it('shallow renders', () => {
    const wrapper = shallow(<RentalCard />);
    expect(wrapper).toMatchSnapshot();
  
    expect(wrapper.props('classes')).toBeDefined();
    expect(wrapper.props('rentals')).toBeDefined()
    expect(wrapper.props('onClick')).toBeDefined();

  });