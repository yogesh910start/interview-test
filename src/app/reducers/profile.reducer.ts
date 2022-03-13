
import { Profile } from '../models/profile.model';
import { ProfileActionType } from '../actions/profile.action';
import * as ProfileAction from '../actions/profile.action';

import { ProfileActionNew, AddProfileAction } from '../actions/profile.action';



export const profileFeatureKey = 'profiles';

import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';

export interface ProfileState {
	profiles: Profile[];
}

export interface ProfileStore {
	profileState: ProfileState;
}

export const initialState: ProfileState = {
	profiles : [
		{
			id: '1',
			name: 'United States of America',
			login: 'US',
		}]
};


export const profileReducer = createReducer(initialState, 
	on(ProfileAction.addProfile,
			(state: ProfileState, { profile }) =>
	({
		...state,
        profiles: [...state.profiles, profile]
      }))

);

export function addProfileReducer(state: Profile[] = [], action: AddProfileAction) {
	switch (action.type) {
		case ProfileActionType.ADD_PROFILE:
			return [...state, action.payload];
		default:
			return state;
	}
}

/*export function reducer(state: ProfileState | undefined, action: Action): any {
	return profileReducer(state, action);
}*/

const initialStatenew: Profile[] = [
	{
		id: '1',
		name: 'United States of America',
		login: 'US',
	},
];

export function ProfileReducer(
	state: ProfileState = initialState,
	action: AddProfileAction
): ProfileState {
	switch (action.type) {
		case ProfileActionType.ADD_PROFILE:
			// return [...state, action.payload];
			// return { ...state, profiles: [...state.profiles, action.payload] }
			// const profiles = [...state.profiles, action.payload];
			// return { profiles }
			return {
				...state,
				profiles: [...state.profiles, action.payload]
			}
		default:
			return state;
	}
}

export function reducer(state: ProfileState | undefined, action: ProfileAction.AddProfileAction): any {
	return ProfileReducer(state, action);
}

export const profileReducers: ActionReducerMap<ProfileStore> = {
	profileState: profileReducer
};



/*const initialState: Array<Profile> = [
	{
		name: 'Computer Engineering'
	},
];
*/
/*export function profileReducer(
	state: Array<Profile> = initialState,
	action: ProfileAction
): ProfileState {


	switch (action.type) {
		case ProfileActionType.Load_PROFILE:
			return action.payload;

		default:
			return state;
	}
}

export function reducer(state: ProfileState | undefined, action: Action): any {
	return profileReducer(state, action);
}*/