import React, { PureComponent } from 'react';

import Person from './Person/Person';

// const persons = (props) => props.persons.map((person, index) => {
//   return <Person
//     click={() => props.clicked(index)}
//     name={person.name}
//     age={person.age}
//     key={person.id}
//     changed={(event) => props.changed(event, person.id)} />
// });

// export default persons;

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[Persons.js] constructor() 1', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount() 2');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount() 4');
    this.lastPersonRef.current.focus();
  }

  componentWillUnmount() {
    console.log('[Persons.js] inside componentWillUnmount() 5');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps() 1', nextProps);
  }

  // NO need to implmenent shouldComponentUpdate if extends React's PureComponent
  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate() 2', nextProps, nextState);
    // Only check root object, not deep comparison
    return nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked;
    // return true;
  }*/

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate() 3', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate() 5');
  }

  render() {

    console.log('[Persons.js] inside render() 3');

    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        position={index}
        ref={this.lastPersonRef}
        changed={(event) => this.props.changed(event, person.id)}
        isAuthenticated={this.props.authenticated} />
    });
  }
}

export default Persons;