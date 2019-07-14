import React from "react";
import { mount } from "enzyme";
import CommentBox from 'components/CommentBox';
import Root from '../../Root';

describe('test comment box', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });

  describe('the text area', () => {
    const newComment = 'new comment';

    beforeEach(() => {
      // Simulate real HTML event, for example, 'change' event
      wrapped.find('textarea').simulate('change', {
        target: { value: newComment }
      });
      wrapped.update();
    });

    it('has a text area that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual(newComment);
    });

    it('has emptied text area after form submit', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  });

});