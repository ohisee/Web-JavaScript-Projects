/**
 * @fileoverview Store
 */
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import SpinnerReducer, { SpinningState } from "./reducers";
import VerifyAuthReducer, { VerifyAuthState } from "./reducers/VerifyAuth";
import FetchCountriesReducer, { FetchCountriesState } from "./reducers/FetchCountries";
import FetchDataReducer, { FetchDataState } from "./reducers/FetchData";

export interface RootState {
  spinnerState: SpinningState,
  verifyAuthState: VerifyAuthState,
  fetchCountriesState: FetchCountriesState,
  fetchDataState: FetchDataState,
}

export const store = createStore(
  combineReducers<RootState>({
    spinnerState: SpinnerReducer,
    verifyAuthState: VerifyAuthReducer,
    fetchCountriesState: FetchCountriesReducer,
    fetchDataState: FetchDataReducer,
  }),
  applyMiddleware(thunkMiddleware)
);
