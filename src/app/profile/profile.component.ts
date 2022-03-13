import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	public profile: any;

	constructor(private route: ActivatedRoute, private router: Router) { }

	  ngOnInit(): void {

		  this.profile = this.route.snapshot.data['profile'];

		  console.log("profile snapshot", JSON.stringify(this.profile));
	  }

}
