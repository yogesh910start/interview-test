import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from "rxjs";

import { GitProfileService } from '../services/git-profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any>{

	constructor(private service: GitProfileService) { }

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> | Promise<any> | any {
		return this.service.serachGitUserProfile(route.params.profileloginname);
	}

}
