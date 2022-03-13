import { SearchState, InitalSearchState } from './search.state';

export interface AppState {
	searches: SearchState;
}

export const InitialAppState: AppState = {
	searches: InitalSearchState
}

export function getInitialAppState(): AppState {
	return InitialAppState;
}