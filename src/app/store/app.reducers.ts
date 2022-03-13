import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';

import { AppState, InitialAppState } from './app.state';

import { SearchReducers } from './search.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
	searches: SearchReducers
};