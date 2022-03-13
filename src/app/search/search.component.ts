import { Component, OnInit } from '@angular/core';

import { GitProfileService } from '../services/git-profile.service';

import { SearchProfileHistoryService } from '../services/search-profile-history.service';

import { SearchService } from '../services/search.service';

import { Store } from '@ngrx/store'

import { Profile } from '../models/profile.model';

import { ProfileState } from '../reducers/profile.reducer';

import * as ProfileAction from '../actions/profile.action';


import { Search } from '../store/search.model';

import { AppState } from '../store/app.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	public profilesearch: string = "";
	public profile: any;

	// searches$ = this._store.pipe(select())

	// constructor(private gitProfileService: GitProfileService, private searchProfileHistoryService: SearchProfileHistoryService, private store: Store<ProfileState>) { }
	constructor(private gitProfileService: GitProfileService, private searchProfileHistoryService: SearchProfileHistoryService, private searchService: SearchService, private _store: Store<AppState>) { }

 	ngOnInit(): void {



  	}

	public onProfileSearchClick(): void {

		console.log("current profile search : " + this.profilesearch);

		/*const profile = new Profile();
		profile.name = this.profilesearch;
		this.store.dispatch(ProfileAction.addProfile(profile));*/


		this.gitProfileService.serachGitUserProfile(this.profilesearch).subscribe((res: any) => {

			console.log("res : ", JSON.stringify(res));

			this.profile = res;


			this.searchProfileHistoryService.addProfileHistory(this.profile);
			// this.searchProfileHistoryService.addProfileHistory(nprofile);

			// this._store.dispatch(this.profile)

			this.searchService.addSearchToHistory(this.profile);

		}, (error: any) => {

			this.profile = "Profile not found"

		});


	}

}
