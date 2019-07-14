/**
 * @fileoverview Fetch data reducer
 */
import { CountryData } from "../actions";
import { Actions, Types } from "../actions/actionTypes";

export interface FetchDataState {
  countryGrowthData: CountryData[],
  countryPopGrowthData: CountryData[],
  loading: boolean,
  error: string | null,
}

const initialState: FetchDataState = {
  countryGrowthData: [],
  countryPopGrowthData: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: Actions): FetchDataState => {
  switch (action.type) {
    case Types.FETCH_DATA_START:
      return {
        ...state,
        countryGrowthData: [],
        loading: true,
        error: null,
      }
    case Types.FETCH_DATA_SUCCEEDED:
      return {
        ...state,
        countryGrowthData: state.countryGrowthData.concat(action.payload),
        loading: false,
        error: null,
      };
    case Types.FETCH_DATA_FAILED:
      return {
        ...state,
        countryGrowthData: [],
        loading: false,
        error: action.payload,
      };
    case Types.FETCH_POP_GROWTH_DATA_START:
      return {
        ...state,
        countryPopGrowthData: []
      };
    case Types.FETCH_POP_GROWTH_DATA_SUCCEEDED:
      return {
        ...state,
        countryPopGrowthData: state.countryPopGrowthData.concat(action.payload),
      };
    case Types.FETCH_POP_GROWTH_DATA_FAILED:
      return {
        ...state,
        countryPopGrowthData: [],
      };
    default:
      return state;
  }
};

export default reducer;
