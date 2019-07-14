/**
 * @fileoverview Verify authentication component
 */
import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { RootState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { Redirect } from "react-router-dom";
import { AnyAction } from "redux";
import { verifyUser } from "../store/actions";
import { connect } from "react-redux";
import Styles from './VerifyAuth.module.css';

type Props = {
  authenticated: boolean,
  processing: boolean,
  error: string | null,
  verifyUser: (email: string, password: string) => void
};
const SignIn: FC<Props> = (props) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    // Cleam up
    return () => {
      setEmail('');
      setPassword('');
    }
  }, [props.processing]);

  const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.currentTarget.value);
  }

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.currentTarget.value);
  }

  const onSignInClickHandler = () => {
    if ((email && email.trim() !== '')
      && (password && password.trim() !== '')) {
      props.verifyUser(email, password);
    }
  }

  const onSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className={Styles.signInForm}>
      {props.authenticated ? <Redirect to={"/playground"} /> : null}
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <legend>Sign In</legend>
          <label>User name</label>
          <input type="text"
            value={email}
            onChange={onEmailChangeHandler}
            autoComplete="email" />
          <label>Password</label>
          <input type="password"
            value={password}
            onChange={onPasswordChangeHandler}
            autoComplete="new-password" />
          <button
            onClick={onSignInClickHandler}
            disabled={props.processing === true}>Sign In</button>
          {props.error ? <span className={Styles.errorMessage}>{props.error}</span> : null}
        </fieldset>
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    authenticated: state.verifyAuthState.token !== null,
    processing: state.verifyAuthState.verifying,
    error: state.verifyAuthState.error,
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    verifyUser: (email: string, password: string) => dispatch(verifyUser(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
