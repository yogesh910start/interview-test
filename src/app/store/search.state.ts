import { Search } from './search.model';

export interface SearchState {
	readonly searches: Search[];
}

export const InitalSearchState: SearchState = {
	searches: [/*{
		"id": "1",
		"login": "mojombo",
		"name": "MDQ6VXNlcjE=",
	}, {
		"id": "1",
		"login": "mojombo",
		"name": "MDQ6VXNlcjE=",
	}, {
		"id": "1",
		"login": "mojombo",
		"name": "MDQ6VXNlcjE=",
	}*/]
}