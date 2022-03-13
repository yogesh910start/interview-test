import { Component, OnInit } from '@angular/core';

import { SearchProfileHistoryService } from '../services/search-profile-history.service';

import { select, Store } from '@ngrx/store'

import { selectProfiles } from '../selectors/profile.selector';

// import { CourseItem } from './store/models/courseItem.model';

import { Profile } from '../models/profile.model';

import { ProfileState } from '../reducers/profile.reducer';

import { of, Observable, Subject } from 'rxjs';

import { switchMap, map, take, first } from 'rxjs/operators';

import { Search } from '../store/search.model';

import { AppState } from '../store/app.state';

import { selectSearches } from '../store/search.selectors';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

	profilestate$: Observable<Profile[]>;

	searches$: Observable<Search[]>

	searchesresult: Search[]

	// profiles$: Observable<Profile[]>;

	constructor(private searchProfileHistoryService: SearchProfileHistoryService, private store: Store<ProfileState>, private _store: Store<AppState>) { }

	ngOnInit(): void {

		console.log("check history : ");


		// let history = this.searchProfileHistoryService.getProfileHistory();
		/*.subscribe(history => {

			console.log("history : ", JSON.stringify(history) );

		}, error => {

			console.log(error);

		});*/


		/*this.profiles$ = this.store.select((store) => store.profiles);

		console.log("history : ");
		console.log(this.profiles$);*/

		/*this.store.pipe(select(selectProfiles)).subscribe(profiles => {
			console.log("profiles : ");
			console.log(profiles);
		});*/

		/*this.searchProfileHistoryService.getProfileHistory().subscribe(profiles => {
			console.log("profiles : ");
			console.log(profiles);
		});*/

		// this.store.pipe(select(selectProfiles)).subscribe(profiles => console.log(profiles));

		// this.profiles$ = this.store.select(selectProfiles);

		// this.profiles$ = this.store.select((store) => store.profiles);

		// this.store.select(selectProfiles).subscribe(profiles => console.log(JSON.stringify(profiles)));



		/*this.store.select(selectProfiles, take(1)).subscribe((data: any) => {
			console.log(data);
		});*/

		// this.store.select((state) => state.profiles);



		// this.profilestate$ = this.searchProfileHistoryService.getProfileHistory();

		// this.searchProfileHistoryService.getProfileHistory().pipe(first()).subscribe(data => console.log(data));

		// console.log("profilestate$ : ");
		// console.log(this.profilestate$);

		// this.store.select<Profile[]>(selectProfiles).subscribe(profiles => console.log(JSON.stringify(profiles)));


		/*console.log("profiles$ : ");
		console.log(this.profiles$);*/

		// this.searches$ = this._store.pipe(select(selectSearches));

		// this._store.value.AppReducer

		/*this._store.pipe(take(1)).subscribe(
			s => this.searchesresult = s.searches.searches
		);*/

		this._store.subscribe(s => {
			console.log(s);
			this.searchesresult = s.searches.searches;
		});


		/*console.log("searches$ : ");
		console.log(this.searches$);
		console.log("searchesresult : ");
		console.log(this.searchesresult);*/
	}



}
