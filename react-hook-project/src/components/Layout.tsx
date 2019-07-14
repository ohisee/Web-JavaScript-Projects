/**
 * @fileoverview Layout component
 */
import React, { FC, useEffect } from "react";
import {
  CountryInfo, fetchCountries, CountryData,
  fetchData2, fetchGrowthActions, fetchPopGrowthActions
} from "../store/actions";
import { randomId } from "./random";
import { RootState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import TimeseriesLine from "./Charts/TimeseriesLine";
import Spinner from "./Spinner";
import Styles from './Layout.module.css';
import BackupTimeseriesLine from "./Charts/BackupTimeseriesLine";

type Props = {
  loadingCountries: boolean,
  countries: CountryInfo[],
  getCountries: () => void,
  countryGrowthData: CountryData[],
  countryPopGrowthData: CountryData[],
  getCountryGrowthData: (country: string, indicator: string) => void,
  getCountryPopGrowthData: (country: string, indicator: string) => void,
};
const Layout: FC<Props> = (props) => {

  useEffect(() => {
    if (props.countries && props.countries.length === 0) {
      props.getCountries();
    }
  }, [props]);

  const countryOnClickHandler = (country: string) => {
    props.getCountryGrowthData(country, "NY.GDP.MKTP.KD.ZG");
    props.getCountryPopGrowthData(country, "SP.POP.GROW");
  };

  return (
    <div className={Styles.layout}>
      <div className={Styles.countries}>
        {props.loadingCountries ? <Spinner /> :
          <ul className={Styles.countriesList}>
            {props.countries.map(c => <li
              key={randomId()}
              onClick={() => countryOnClickHandler(c.iso2Code)}>{c.name}</li>)}
          </ul>}
      </div>
      <div className={Styles.details}>
        {props.countryGrowthData[0] && props.countryGrowthData.length > 0 ?
          <TimeseriesLine
            width={800}
            height={260}
            margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
            title={`${props.countryGrowthData[0].country.value} ${props.countryGrowthData[0].indicator.value}`}
            data={props.countryGrowthData.map(d => ({ key: new Date(+d.date, 11, 31), value: d.value }))}
            showXaxis={true}
            showYaxis={true}
            timeYearInterval={Math.min(10, props.countryGrowthData.length)} /> :
          <BackupTimeseriesLine />}
        {props.countryPopGrowthData[0] && props.countryPopGrowthData.length > 0 ?
          <TimeseriesLine
            width={800}
            height={260}
            margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
            title={`${props.countryPopGrowthData[0].country.value} ${props.countryPopGrowthData[0].indicator.value}`}
            data={props.countryPopGrowthData.map(d => ({ key: new Date(+d.date, 11, 31), value: d.value }))}
            showXaxis={true}
            showYaxis={true}
            timeYearInterval={Math.min(10, props.countryPopGrowthData.length)} /> :
          <BackupTimeseriesLine />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    loadingCountries: state.fetchCountriesState.loading,
    countries: state.fetchCountriesState.countries,
    countryGrowthData: state.fetchDataState.countryGrowthData,
    countryPopGrowthData: state.fetchDataState.countryPopGrowthData,
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getCountries: () => dispatch(fetchCountries()),
    getCountryGrowthData: (country: string, indicator: string) =>
      dispatch(fetchData2(country, indicator, fetchGrowthActions)),
    getCountryPopGrowthData: (country: string, indicator: string) =>
      dispatch(fetchData2(country, indicator, fetchPopGrowthActions)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
