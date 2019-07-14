import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Sign.css';

class Signin extends Component {

  onSubmit = (formProps) => {
    // signup is defined in the reducer
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {

    // 'handleSubmit' is provided by redux-form
    const { handleSubmit } = this.props;

    let errMsg;
    if (this.props.errorMessage) {
      errMsg = (<div className="error-message"> {this.props.errorMessage} </div>);
    } else {
      errMsg = null;
    }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset className="field-set">
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" />
        </fieldset>
        <fieldset className="field-set">
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none" />
        </fieldset>
        {errMsg}
        <button>Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);