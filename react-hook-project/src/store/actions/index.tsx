/**
 * @fileoverview Actions index
 */
import axios, { AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Actions, Types } from "./actionTypes";

/**
 * Page information from API
 */
interface Page {
  page: number,
  pages: number,
  per_page: string,
  total: number,
  sourceid?: string,
  lastupdated?: string,
};

/**
 * Region Information
 */
interface RegionInfo {
  id: string,
  iso2Code: string,
  name?: string,
  value?: string
}

/**
 * Country Information
 */
export interface CountryInfo {
  id: string,
  iso2Code: string,
  name?: string,
  value?: string,
  region: RegionInfo,
  adminRegion: RegionInfo,
  incomeLevel: RegionInfo,
  lendingType: RegionInfo,
  capitalCity: string,
  longitude: string,
  latitude: string,
}

/**
 * Country data
 */
export interface CountryData {
  indicator: {
    id: string,
    value: string,
  },
  country: {
    id: string,
    value: string,
  },
  countryiso3code: string,
  date: string,
  value: number,
  unit: string,
  obs_status: string,
  decimal: number,
}

interface FetchActions<T> {
  start: () => Actions,
  succeeded: (result: T[]) => Actions,
  failed: (errMsg: string) => Actions,
}

export const fetchGrowthActions: FetchActions<CountryData> = {
  start: (): Actions => {
    return {
      type: Types.FETCH_DATA_START,
      payload: null,
    }
  },
  succeeded: (countryData: CountryData[]): Actions => {
    return {
      type: Types.FETCH_DATA_SUCCEEDED,
      payload: countryData,
    }
  },
  failed: (errMsg: string): Actions => {
    return {
      type: Types.FETCH_DATA_FAILED,
      payload: errMsg,
    };
  },
};

export const fetchPopGrowthActions: FetchActions<CountryData> = {
  start: (): Actions => {
    return {
      type: Types.FETCH_POP_GROWTH_DATA_START,
      payload: null,
    }
  },
  succeeded: (countryData: CountryData[]): Actions => {
    return {
      type: Types.FETCH_POP_GROWTH_DATA_SUCCEEDED,
      payload: countryData,
    }
  },
  failed: (errMsg: string): Actions => {
    return {
      type: Types.FETCH_POP_GROWTH_DATA_FAILED,
      payload: errMsg,
    };
  },
};

const storeInSesssion = <T extends any>(key: string, data: T[]) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

// type StoreFunction = <T> (key: string, data: T[]) => void;
// const storeInSesssion: StoreFunction = (key: string, data) => {
//   sessionStorage.setItem(key, JSON.stringify(data));
// };

// function storeInSesssion<T>(key: string, data: T[]) {
//   sessionStorage.setItem(key, JSON.stringify(data));
// }

const getSession = (key: string) => {
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
};

const startSpining = (): Actions => {
  console.log('starting_spinning');
  return {
    type: Types.START_SPINNER,
    payload: 'start_spinning'
  };
};

const stopSpinning = (): Actions => {
  console.log('stoping_spinning');
  return {
    type: Types.STOP_SPINNNER,
    payload: 'stop_spinning'
  };
};

const api = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
  });
};

export const keepSpinning = (): ThunkAction<Promise<void>, {}, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, null, AnyAction>) => {
    dispatch(startSpining());
    await api();
    dispatch(stopSpinning());
  };
};

const startSignIn = (): Actions => {
  return {
    type: Types.START_SIGNIN,
    payload: null,
  };
};

const signInSucceed = (token: string): Actions => {
  return {
    type: Types.VERIFY_SUCCEEDED,
    payload: token
  };
};

const signInFailed = (errMsg: string): Actions => {
  return {
    type: Types.VERIFY_FAILED,
    payload: errMsg
  };
};

const startFetch = (): Actions => {
  return {
    type: Types.START_FETCHING,
    payload: null,
  };
};

const fetchCountriesFailed = (errMsg: string): Actions => {
  return {
    type: Types.FETCH_FAILED,
    payload: errMsg,
  };
};

const fetchCountriesSucceeded = (countries: CountryInfo[]): Actions => {
  return {
    type: Types.FETCH_SUCCEEDED,
    payload: countries,
  }
};

export const verifyUser = (email: string, password: string): ThunkAction<Promise<void>, {}, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, null, AnyAction>) => {
    const apiUrl = '';
    const apiKey = '';
    dispatch(startSignIn());
    try {
      const res: AxiosResponse<any> = await axios.post(`${apiUrl}${apiKey}`, {
        email, password, returnSecureToken: true
      });
      dispatch(signInSucceed(res.data['idToken']));
    } catch (error) {
      dispatch(signInFailed('Incorrect user and password'));
    }
  };
};

export const signInOut = (): Actions => {
  return {
    type: Types.INVALDIATE_AUTH,
    payload: null,
  }
};

const apiGetCountries = (page: number = 1) => {
  return axios.get('', {
    params: {
      format: 'json',
      page: page
    }
  });
};

export const fetchCountries = (): ThunkAction<Promise<void>, {}, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, null, AnyAction>) => {
    dispatch(startFetch());
    let data = getSession('FetchCountries');
    if (data) {
      dispatch(fetchCountriesSucceeded(data));
    } else {
      try {
        let res: AxiosResponse<any> = await apiGetCountries();
        let pageInfo: Page = res.data[0];
        const countries: CountryInfo[] = res.data[1];
        while (pageInfo.page < pageInfo.pages) {
          res = await apiGetCountries(pageInfo.page + 1);
          pageInfo = res.data[0];
          let t: CountryInfo[] = res.data[1];
          countries.push(...t);
        }
        dispatch(fetchCountriesSucceeded(countries));
        storeInSesssion('FetchCountries', countries);
      } catch (error) {
        dispatch(fetchCountriesFailed('Fetch countries failed'));
      }
    }
  };
};

const fetchDataStart = (): Actions => {
  return {
    type: Types.FETCH_DATA_START,
    payload: null,
  }
};

const fetchDataSucceeded = (countryData: CountryData[]): Actions => {
  return {
    type: Types.FETCH_DATA_SUCCEEDED,
    payload: countryData,
  }
};

const fetchDataFailed = (errMsg: string): Actions => {
  return {
    type: Types.FETCH_DATA_FAILED,
    payload: errMsg,
  };
};

const apiFetchData = (country: string, indicator: string, page: number = 1) => {
  const apiUrl = '';
  return axios.get(apiUrl, {
    params: {
      format: 'json',
      page: page
    }
  });
};

export const fetchData = (country: string, indicator: string): ThunkAction<Promise<void>, {}, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, null, AnyAction>) => {
    dispatch(fetchDataStart());
    let data = getSession(`${country}${indicator}`);
    if (data) {
      dispatch(fetchDataSucceeded(data));
    } else {
      try {
        let res: AxiosResponse<any> = await apiFetchData(country, indicator);
        let pageInfo: Page = res.data[0];
        const countryData: CountryData[] = res.data[1];
        while (pageInfo.page < pageInfo.pages) {
          res = await apiFetchData(country, indicator, pageInfo.page + 1);
          pageInfo = res.data[0];
          let t: CountryData[] = res.data[1];
          countryData.push(...t);
        }
        dispatch(fetchDataSucceeded(countryData));
        storeInSesssion(`${country}${indicator}`, countryData);
      } catch (error) {
        dispatch(fetchDataFailed("Failed in fetching data"));
      }
    }
  };
};

export const fetchData2 = <T extends any>(country: string, indicator: string, fetchActions: FetchActions<T>):
  ThunkAction<Promise<void>, {}, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, null, AnyAction>) => {
    dispatch(fetchActions.start());
    let data = getSession(`${country}${indicator}`);
    if (data) {
      dispatch(fetchActions.succeeded(data));
    } else {
      try {
        let res: AxiosResponse<any> = await apiFetchData(country, indicator);
        let pageInfo: Page = res.data[0];
        const countryData: T[] = res.data[1];
        while (pageInfo.page < pageInfo.pages) {
          res = await apiFetchData(country, indicator, pageInfo.page + 1);
          pageInfo = res.data[0];
          let t: T[] = res.data[1];
          countryData.push(...t);
        }
        dispatch(fetchActions.succeeded(countryData));
        storeInSesssion(`${country}${indicator}`, countryData);
      } catch (error) {
        dispatch(fetchActions.failed("Failed in fetching data"));
      }
    }
  };
};
