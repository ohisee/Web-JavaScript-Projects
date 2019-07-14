import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';

// import { ApplicationState } from './application-state';
// import { reducer } from './reducer';
import { UiState } from './ui-state';
import { StoreData } from './store-data';
import { uiStateReducer } from './reducers/uiStateReducer';
import { uiStoreDataReducer } from './reducers/uiStoreDataReducer';
import { RouterStateUrl } from './routerCustomReducer';


/**
 * To create Action Reducer Map
 */
export interface AppState {
  // appState: ApplicationState;
  uiState: UiState;
  storeData: StoreData;
  routerReducer: RouterReducerState<RouterStateUrl>;
}

/**
 * Action Reducer Map
 */
export const reducerMap: ActionReducerMap<AppState> = {
  // appState: reducer,
  uiState: uiStateReducer,
  storeData: uiStoreDataReducer,
  routerReducer: routerReducer
};

/**
 * Store freeze
 */
export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [storeFreeze];
