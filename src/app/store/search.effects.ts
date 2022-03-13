import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Effect, ofType, Actions } from '@ngrx/effects';

import { of } from 'rxjs';

import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { AppState, InitialAppState } from './app.state';

import { SearchActionsEnum, SearchActions, GetSearchesAction } from './search.actions';

@Injectable()
export class SearchEffects {

	constructor(private _actions$: Actions, private _store: Store<AppState>) {

	}

	/*getSearches$ = this._actions$.pipe(
		ofType<GetSearchesAction>(SearchActionsEnum.GET_SEARCHES),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(""))),
		switchMap(())
	);*/

	/*getSearches$ = this._actions$.pipe(
		ofType<GetSearchesAction>(SearchActionsEnum.GET_SEARCHES),
		switchMap(() => this._)
	);*/

}