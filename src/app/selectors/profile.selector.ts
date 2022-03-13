import {createFeatureSelector, createSelector} from '@ngrx/store';

// import * as fromCustomer from '../reducer/profile.reducer';

import { ProfileState, profileFeatureKey } from '../reducers/profile.reducer';

import { Profile } from '../models/profile.model';

// export const selectFeatureProfiles = createFeatureSelector<ProfileState>(profileFeatureKey);

export const selectFeatureProfiles = (state: ProfileState) => state;

export const selectProfiles = createSelector(
	selectFeatureProfiles,
	(state): Profile[] => state.profiles
);