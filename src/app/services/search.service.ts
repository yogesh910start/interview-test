import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';

import { of, Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store'

import { AppState } from '../store/app.state';

import { SearchActions, AddSearchAction } from '../store/search.actions';

import { Search } from '../store/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

	constructor(private _store: Store<AppState>) {

	}

	addSearchToHistory(search: Search) {


		this._store.dispatch(new AddSearchAction(search))

		/*this._store.subscribe(s => {
			console.log(s);
		});*/
	}

	/*getProfileHistory(): Observable<Profile[]> {

		return this.profilehistoryObservable$

	}*/
}
