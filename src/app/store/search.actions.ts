import { Action, createAction, props } from '@ngrx/store';
import { Search } from './search.model';

export enum SearchActionsEnum {
	ADD_SEARCH = '[Search] Add Search',
	GET_SEARCHES = '[Search] Load Searches',
	GET_SEARCH = '[Search] Load Search'
}


export class AddSearchAction implements Action {
	public readonly type = SearchActionsEnum.ADD_SEARCH;
	constructor(public payload: Search) { }
}

export class GetSearchesAction implements Action {
	public readonly type = SearchActionsEnum.GET_SEARCHES;
	constructor(public payload: Search[]) { }
}

export class GetSearcAction implements Action {
	public readonly type = SearchActionsEnum.GET_SEARCH;
	constructor(public payload: Search) { }
}

export type SearchActions = AddSearchAction | GetSearchesAction | GetSearcAction;