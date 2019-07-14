import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
// import WithClass from '../../../hoc/WithClass';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClassUsingStatefulComponent';

import { AuthenticateContext } from '../../../App';

// const person = (props) => {
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   )
// };

// export default person;

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] constructor() 1', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount() 2');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount() 4');
    if (this.props.position === 0) {
      // this.inputElement.focus();
      this.inputElement.current.focus();
    }
  }

  componentWillUnmount() {
    console.log('[Person.js] inside componentWillUnmount() 5');
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {

    console.log('[Person.js] inside render() 3');

    return (
      // <WithClass classes={classes.Person}>
      <Auxiliary>
        {this.props.isAuthenticated ? <p>{this.props.name} is authenticated</p> : null}
        <AuthenticateContext.Consumer>
          {contextAuth => contextAuth ? <p>App Context is authenticated</p> : null}
        </AuthenticateContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          // ref={(inp) => { this.inputElement = inp }}
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Auxiliary>
      // </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person);

