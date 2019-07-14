/**
 * @fileoverview Spinner
 */
import React, { FC } from "react";

import SpinnerStyles from './Spinner.module.css';

const Spinner: FC = () => (
  <div className={SpinnerStyles.loader}></div>
);

export default Spinner;
