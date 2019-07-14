/**
 * @fileoverview Input text two-way binding
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import InputStyles from "./InputText.module.css";
import { keepSpinning, fetchCountries, CountryInfo } from "../store/actions";
import Spinner from "./Spinner";
import { RootState } from "../store";
import { randomId } from "./random";

type State = { title: string };
type Properties = {
  isSpinning: boolean,
  spin: () => void,
  countries: CountryInfo[],
  getCountries: () => void,
};
class InputText extends Component<Properties, State> {

  state = {
    title: '',
  };

  _inputTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.currentTarget.value
    });
  }

  componentDidMount = () => {
    if (this.props.countries && this.props.countries.length === 0) {
      this.props.getCountries();
    }
  }

  render() {
    return (
      this.props.isSpinning ? <Spinner /> :
        <React.Fragment>
          <div className={InputStyles.inputArea}>
            <input type="text"
              value={this.state.title}
              onChange={this._inputTextChangeHandler} />
            <span>{this.state.title}</span>
          </div>
          <ul className={InputStyles.countriesList}>
            {this.props.countries.map(c => <li key={randomId()}>{c.name}</li>)}
          </ul>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isSpinning: state.fetchCountriesState.loading,
    countries: state.fetchCountriesState.countries,
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    spin: () => dispatch(keepSpinning()),
    getCountries: () => dispatch(fetchCountries()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
