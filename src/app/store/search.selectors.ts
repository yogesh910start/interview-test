import {createFeatureSelector, createSelector} from '@ngrx/store';

import { SearchState, InitalSearchState } from './search.state';

import { AppState } from './app.state';

// import * as fromCustomer from '../reducer/profile.reducer';

// import { ProfileState, profileFeatureKey } from '../reducers/profile.reducer';

import { Search } from './search.model';

// export const selectFeatureProfiles = createFeatureSelector<ProfileState>(profileFeatureKey);

export const selectFeatureSearches = (state: AppState) => state.searches;

export const selectSearches = createSelector(
	selectFeatureSearches,
	(state: SearchState) => {
		return state.searches
	}
);