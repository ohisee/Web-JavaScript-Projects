import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

describe('integrations test', () => {

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('can fetch a list of comments and display those comments', (done) => {
    // Attempt to render the entire app
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    // find the 'fetchComments' button and click
    wrapped.find('.fetch-comments').simulate('click');

    // wait for moxio
    moxios.wait(() => {
      wrapped.update();

      // expect to find a list of comments
      expect(wrapped.find('li').length).toEqual(2);
      wrapped.unmount();

      // done callback
      done();
    });
  });

});