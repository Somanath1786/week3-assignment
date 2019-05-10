import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();

  const mainPage = wrapper.find('MainPage');
  expect(mainPage).toHaveLength(1);
});

it('renders', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});