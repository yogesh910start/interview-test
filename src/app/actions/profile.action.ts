/*
import { createAction, props } from '@ngrx/store';
2
import {Customer} from '../../../models/customer';
3
4
export const addCustomer = createAction(
5
  '[Customer] Add Customer',
6
  (customer: Customer) => ({customer})
7
);*/

import { Action, createAction, props } from '@ngrx/store';
import { Profile } from '../models/profile.model';

export const addProfile = createAction(
	'[Profile] Add Profile',
	(profile: Profile) => ({ profile })
);

export const fetchProfiles = createAction(
	"[Profile] Fetch Profiles",
	props<{ profiles: Profile[] }>()
);

export enum ProfileActionType {
	ADD_PROFILE = '[Profile] Add Profile',
	LOAD_PROFILE = '[Profile] Load Profiles'
}


export class AddProfileAction implements Action {
	readonly type = ProfileActionType.ADD_PROFILE;
	constructor(public payload: Profile) { }
}

export class GetProfileAction implements Action {
	readonly type = ProfileActionType.LOAD_PROFILE;
	constructor() { }
}

export type ProfileActionNew = AddProfileAction;

