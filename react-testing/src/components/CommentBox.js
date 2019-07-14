import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from '../components/requireAuth';

/**
 * Class based comment box component
 */
class CommentBox extends Component {

  state = {
    comment: ''
  };

  textChangedHandler = (event) => {
    this.setState({ comment: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.textChangedHandler} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}


export default connect(null, actions)(requireAuth(CommentBox));