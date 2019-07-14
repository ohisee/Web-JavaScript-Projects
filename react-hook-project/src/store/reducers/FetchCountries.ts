/**
 * @fileoverview Fetch countries action reducer
 */
import { CountryInfo } from "../actions";
import { Actions, Types } from "../actions/actionTypes";

export interface FetchCountriesState {
  loading: boolean,
  countries: CountryInfo[]
  error: string | null
};

const initialState: FetchCountriesState = {
  loading: false,
  countries: [],
  error: null,
};

const reducer = (state = initialState, action: Actions): FetchCountriesState => {
  switch (action.type) {
    case Types.START_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case Types.FETCH_SUCCEEDED: {
      return {
        ...state,
        countries: state.countries.concat(action.payload),
        loading: false,
        error: null,
      }
    }
    case Types.FETCH_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer;
