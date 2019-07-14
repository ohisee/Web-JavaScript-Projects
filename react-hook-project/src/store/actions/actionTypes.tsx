/**
 * @fileoverview Action type
 */
type ActionTypes = {
  START_SPINNER: string,
  STOP_SPINNNER: string,
  START_SIGNIN: string,
  VERIFY_SUCCEEDED: string,
  VERIFY_FAILED: string,
  INVALDIATE_AUTH: string,
  START_FETCHING: string,
  FETCH_SUCCEEDED: string,
  FETCH_FAILED: string,
  FETCH_DATA_START: string,
  FETCH_DATA_SUCCEEDED: string,
  FETCH_DATA_FAILED: string,
  FETCH_GROWTH_DATA_START: string,
  FETCH_GROWTH_DATA_SUCCEEDED: string,
  FETCH_GROWTH_DATA_FAILED: string,
  FETCH_POP_GROWTH_DATA_START: string,
  FETCH_POP_GROWTH_DATA_SUCCEEDED: string,
  FETCH_POP_GROWTH_DATA_FAILED: string,
};
export const Types: Readonly<ActionTypes> = Object.freeze({
  START_SPINNER: "[action]_start_spining",
  STOP_SPINNNER: "[action]_stop_spinning",
  START_SIGNIN: "[action]_start_signin",
  VERIFY_SUCCEEDED: "[action]_signin_succeeded",
  VERIFY_FAILED: "[action]_signin_failed",
  INVALDIATE_AUTH: "[action]_invalidate_auth",
  START_FETCHING: "[action]_start_fetching",
  FETCH_SUCCEEDED: "[action]_fetch_succeeded",
  FETCH_FAILED: "[action]_fetch_failed",
  FETCH_DATA_START: "[action]_fetch_data_start",
  FETCH_DATA_SUCCEEDED: "[action]_fetch_data_succeeded",
  FETCH_DATA_FAILED: "[action]_fetch_data_failed",
  FETCH_GROWTH_DATA_START: "[action]_fetch_growth_data_start",
  FETCH_GROWTH_DATA_SUCCEEDED: "[action]_fetch_growth_data_succeeded",
  FETCH_GROWTH_DATA_FAILED: "[action]_fetch_growth_data_failed",
  FETCH_POP_GROWTH_DATA_START: "[action]_fetch_pop_growth_data_start",
  FETCH_POP_GROWTH_DATA_SUCCEEDED: "[action]_fetch_pop_growth_data_succeeded",
  FETCH_POP_GROWTH_DATA_FAILED: "[action]_fetch_pop_growth_data_failed",
});

/**
 * Payload type
 */
type PayloadType<T> = T;

/**
 * Action type
 */
interface Action {
  type: string,
  payload: PayloadType<any>
};

/**
 * Action
 */
interface StartSpinngAction extends Action { }
interface StopSpinngAction extends Action { }

interface StartSignInAction extends Action { }
interface SignInSucceededAction extends Action { }
interface SignInFailedAction extends Action { }
interface InvalidateAuthAction extends Action { }

interface FetchCountriesStartAction extends Action { }
interface FetchCountriesSucceededAction extends Action { }
interface FetchCountriesFailedAction extends Action { }

interface FetchDataStartAction extends Action { }
interface FetchDataSucceededAction extends Action { }
interface FetchDataFailedAction extends Action { }

interface FetchGrowthDataStartAction extends Action { }
interface FetchGrowthDataSucceededAction extends Action { }
interface FetchGrowthDataFailedAction extends Action { }

export type Actions = StartSpinngAction | StopSpinngAction |
  StartSignInAction | SignInSucceededAction | SignInFailedAction |
  InvalidateAuthAction |
  FetchCountriesStartAction |
  FetchCountriesSucceededAction |
  FetchCountriesFailedAction |
  FetchDataStartAction |
  FetchDataSucceededAction |
  FetchDataFailedAction |
  FetchGrowthDataStartAction |
  FetchGrowthDataSucceededAction |
  FetchGrowthDataFailedAction;
