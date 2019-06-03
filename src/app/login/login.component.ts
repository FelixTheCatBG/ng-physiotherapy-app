import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from '../_services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginUserData = {identifier:'',password:''}
	
	constructor(
		private router: Router,
		private http: HttpClient,
		private authenticationService: AuthenticationService
	) {
		// reset login status
		this.authenticationService.logout();
	}

	ngOnInit() {
	}

	loginUser() {
		this.authenticationService.loginUser(this.loginUserData)
		  .subscribe(
			res => {
				console.log(res);
				localStorage.setItem("jwt", (<any>res).jwt);
				this.authenticationService.isLoggedInSubject.next(true);
				this.router.navigate(["/"]);
			},
			err => {
				this.authenticationService.isLoggedInSubject.next(false);
				console.log(err);
			});
	  }

	logout() {
		this.authenticationService.logout();
	}

}
