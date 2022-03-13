import { Component, OnInit } from '@angular/core';

import { Injectable, EventEmitter } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store'

// import { CourseItem } from './store/models/courseItem.model';

import { Profile } from '../models/profile.model';

import { ProfileState } from '../reducers/profile.reducer';

import * as ProfileAction from '../actions/profile.action';

import { ProfileActionNew, AddProfileAction } from '../actions/profile.action';

import { AppState } from '../store/app.state';

import { SearchActions, AddSearchAction } from '../store/search.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchProfileHistoryService implements OnInit {

	/*count: number = 0;
	simpleObservable = new Subject();
	simpleObservable$ = this.simpleObservable.asObservable();*/

	private _historylist: any[] = [];

	historyObservable = new Subject<Profile[]>();
	profilehistoryObservable$: Observable<Profile[]> = this.historyObservable.asObservable();

	prfilesObservable$: Observable<Profile[]>;

	constructor(private store: Store<ProfileState>, private _store: Store<ProfileState>) {

		this.profilehistoryObservable$ = this.store.select((store) => store.profiles);

	}

	ngOnInit(): void {

		this.prfilesObservable$ = this.store.select((store) => store.profiles);

	}

	addProfileHistory(profile: Profile) {
		/*this._historylist.push(profile);
		this.historyObservable.next(this._historylist);
		console.log("current list : ", JSON.stringify(this._historylist));*/

		/*const newprofile = new Profile();
		newprofile.name = profile;
		this.store.dispatch(ProfileAction.addProfile(newprofile));*/

		this.store.dispatch(new AddProfileAction(profile));

		// this._store.dispatch(new AddSearchAction(profile))

		this.profilehistoryObservable$ = this.store.select((store) => store.profiles);

		this.prfilesObservable$ = this.store.select((store) => store.profiles);

		// console.log("current profilehistoryObservable$ : ");
		// console.log(this.profilehistoryObservable$);

		console.log("current prfilesObservable$ : ");
		console.log(this.prfilesObservable$);

		console.log("new state : ");

		this._store.subscribe(s => {
			console.log(s);
		});
	}

	getProfileHistory(): Observable<Profile[]> {

		return this.profilehistoryObservable$

		// return this.prfilesObservable$
	}

	getProfiles(): Observable<Profile[]> {

		return this.store.select((store) => store.profiles);

		// return this.prfilesObservable$
	}

	/*removeProfileHistory() {
		if (this.count > 0) { this.count -= 1 };
		this.simpleObservable.next(this.count)
	}
	getCount() {
		return this.simpleObservable$;
	}
	setCount(count: number) {
		this.count = count;
		this.simpleObservable.next(this.count)
	}

	setCart(cart: Cart) {
		this.cartObservable.next(cart);
		if (cart && cart.products && cart.products.length > 0) {
			this.setCount(cart.products.length);
		} else {
			this.setCount(0);
		}

	}

	getCart() {

		return this.cartObservable$;

	}*/
}
