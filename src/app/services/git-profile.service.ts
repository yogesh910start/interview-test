import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitProfileService {

	constructor(private http: HttpClient) { }

	public serachGitUserProfile(profileName: string): Observable<any> | Promise<any> | any {

		console.log("url %s : %s", environment.apiUrl + '/users/' + profileName);

		return this.http.get(environment.apiUrl + '/users/' + profileName);

	}

}
