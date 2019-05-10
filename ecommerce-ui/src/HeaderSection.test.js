import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import HeaderSection from './HeaderSection';

it('shallow renders', () => {
    const wrapper = shallow(<HeaderSection />);
    expect(wrapper).toMatchSnapshot();
  
    expect(wrapper.props('classes')).toBeDefined();
    
  });