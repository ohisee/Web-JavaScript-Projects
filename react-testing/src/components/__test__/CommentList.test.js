import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';

describe('Comment list test', () => {

  let wrapped;

  beforeEach(() => {

    const initialState = {
      comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );

  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  });

});