import { Search } from './search.model';
import { SearchActionsEnum, SearchActions } from './search.actions';
import { SearchState, InitalSearchState } from './search.state';
import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
// import * as ProfileAction from '../actions/profile.action';

// import { ProfileActionNew, AddProfileAction } from '../actions/profile.action';



// export const profileFeatureKey = 'profiles';


/*const initialStatenew: Profile[] = [
	{
		id: '1',
		name: 'United States of America',
		login: 'US',
	},
];*/

export const SearchReducers = (
	state: SearchState = InitalSearchState,
	action: SearchActions
): SearchState => {
	switch (action.type) {
		case SearchActionsEnum.ADD_SEARCH:{
			const newArray = [...state.searches]; //Copying state array
			newArray.splice(2, 0, action.payload);
			return {
				...state,
				searches: newArray
			}

		}
		case SearchActionsEnum.GET_SEARCHES: {
			return {
				...state,
				searches: [...state.searches]
			};
		}
		case SearchActionsEnum.GET_SEARCH: {
			return {
				...state
			};
		}
		default:
			return state;
	}
}