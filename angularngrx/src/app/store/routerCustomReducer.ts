/**
 * In order to use the time-traveling debugging in the Devtools, and
 * also the router state snapshot is a mutable object, which can cause
 * issues when developing with store freeze to prevent direct state mutations,
 * so must use a custom serializer
 */
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface CustomRouterState {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  /**
   * Custom serializer
   * @param {RouterStateSnapshot}
   * @returns {RouterStateUrl}
   */
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;

    return {url, params, queryParams};
  }
}
