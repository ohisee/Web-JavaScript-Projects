import React from 'react';
import Header from './Header';

const app = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default app;