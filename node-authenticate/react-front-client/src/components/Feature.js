import React, { Component } from 'react';
import requireAuth from './hoc/requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        This is the feature
      </div>
    );
  }
}

export default requireAuth(Feature);