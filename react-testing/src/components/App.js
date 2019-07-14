import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from '../actions';

import './App.css';

// const app = () => {
//   return (
//     <div>
//       <CommentBox />
//       <CommentList />
//     </div>
//   );
// };

// export default app;

class App extends Component {

  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>
          Sign In
        </button>
      );
    }
  };

  renderHeader = () => {
    return (
      <ul className="header-items">
        <li className="header-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-item">
          <Link to="/post">Post A Comment</Link>
        </li>
        <li className="header-item">
          {this.renderButton()}
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox}></Route>
        <Route path="/" exact component={CommentList}></Route>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(App);
