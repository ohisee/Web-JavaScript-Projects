import React from 'react';

import classes from './Input.css';

/**
 * Input functional component
 * @param {*} props 
 */
const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  let inputInvalid = false;

  if (props.touched && props.invalid && props.shouldValidate) {
    inputClasses.push(classes.Invalid);
    inputInvalid = true;
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig} />;
      break;
    case ('input-with-icon'):
      const inputIconClasses = ["fa"];
      if (props.inputIcon) {
        inputIconClasses.push(props.inputIcon);
      }
      const inputGroupClasses = [classes.InputGroup, inputInvalid ? classes.Invalid : ''];
      inputElement = (
        <div className={inputGroupClasses.join(' ')}>
          <div className={classes.IconAddon}>
            <i className={inputIconClasses.join(' ')}></i>
          </div>
          <input className={inputInvalid ? classes.Invalid : null}
            value={props.value}
            onChange={props.changed}
            {...props.elementConfig} />
        </div>
      );
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig} />;
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          onChange={props.changed}
          value={props.value}>
          {
            props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>{option.displayValue}</option>
            ))
          }
        </select>
      );
      break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig} />
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );

};

export default input;
