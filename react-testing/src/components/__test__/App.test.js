import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Root from '../../Root';

describe('shows App components', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('shows a comment box', () => {
    // const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('shows a comment list', () => {
    // const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  ReactDOM.render(<Root><App /></Root>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows sum', () => {
  expect(20 + 80).toEqual(100);
});