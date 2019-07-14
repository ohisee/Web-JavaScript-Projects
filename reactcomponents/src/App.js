import React, { Component } from 'react';

import './App.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';
// import WithClass from './hoc/WithClass';
import Auxiliary from './hoc/Auxiliary';
import withClassHoc from './hoc/withClassHoc';

export const AuthenticateContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor() 1', props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'P1', age: 28 },
        { id: 'vasdf1', name: 'P2', age: 29 },
        { id: 'asdf11', name: 'P3', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
      appAuthContext: false,
    };
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount() 2');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount() 4');
  }

  componentWillUnmount() {
    console.log('[App.js] inside componentWillUnmount() 5');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE INTERNAL STATE App.js] inside shouldComponentUpdate() 2', nextProps, nextState);
    // Only check root object, not deep comparison
    // return true;
    // decide whether to proceed updating 
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons ||
      nextState.otherState !== this.state.otherState ||
      nextState.authenticated !== this.state.authenticated ||
      nextState.appAuthContext !== this.state.appAuthContext;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE INTERNAL STATE App.js] inside componentWillUpdate() 3', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE INTERNAL STATE App.js] inside componentDidUpdate() 5');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE INTERNAL STATE App.js] inside getDerivedStateFromProps()',
      nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[UPDATE INTERNAL STATE App.js] inside getSnapshotBeforeUpdate()',
      prevProps, prevState);
    return null;
  }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'P1', age: 28 },
  //     { id: 'vasdf1', name: 'P2', age: 29 },
  //     { id: 'asdf11', name: 'P3', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: true
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  appContextLoginHandler = () => {
    this.setState((prevState) => ({ appAuthContext: !prevState.appAuthContext }))
  }

  render() {

    console.log('[App.js] inside render() 3');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        authenticated={this.state.authenticated} />;
    }

    return (
      // <WithClass classes="App">
      // <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
      // <Cockpit
      //   appTitle={this.props.title}
      //   showPersons={this.state.showPersons}
      //   persons={this.state.persons}
      //   clicked={this.togglePersonsHandler} />
      // {persons}
      // </WithClass>
      <Auxiliary>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
          appContextLogin={this.appContextLoginHandler} />
        <AuthenticateContext.Provider value={this.state.appAuthContext}>
          {persons}
        </AuthenticateContext.Provider>
      </Auxiliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClassHoc(App, "App");
