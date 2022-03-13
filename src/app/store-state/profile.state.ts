/*import { MenuItem } from "../../models";

export interface MenusState {
  menuItems: MenuItem[];
}

export const initialState: MenusState = {
  menuItems: [],
};
*/

import { Profile } from '../models/profile.model';

export interface ProfileState {
	readonly profiles: Profile[];
}