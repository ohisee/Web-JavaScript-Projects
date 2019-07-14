/**
 * @fileoverview Function component to trigger error
 */
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import withErrorHandler from "../withErrorHandler";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/error"
});

const TriggerError: FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const [clicked, setClick] = useState<boolean>(false);

  useEffect(() => {
    axiosInstance.get('');
  }, []);

  const onClickHandler = () => {
    setClick(!clicked);
  };

  return (
    <div onClick={onClickHandler}>
      {clicked ? `Triggered ${props.location.pathname} ` : ' '}Try to trigger error
    </div>
  );
};

export default withErrorHandler(TriggerError, axiosInstance);
