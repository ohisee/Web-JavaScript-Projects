/**
 * @fileoverview Invalidate auth component
 */
import React, {FC, useEffect} from "react";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {signInOut} from "../store/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";

type Props = {signInOut: () => void};
const InvalidateAuth: FC<Props> = (props) => {

  useEffect(() => {
    props.signInOut();
  }, [props])

  return (<Redirect to={"/"} />);
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    signInOut: () => dispatch(signInOut())
  }
};

export default connect(null, mapDispatchToProps)(InvalidateAuth);
