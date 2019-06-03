import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { User } from '../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	
	private _loginUrl = "http://localhost:1337/auth/local";
	private _registerUrl = "http://localhost:1337/auth/local/register";

	isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
	loginUserData = { identifier: '', password: '' };

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	isLoggedIn(): Observable<boolean> {
		return this.isLoggedInSubject.asObservable();
	}

	login(form: NgForm) {
		let credentials = form.value;

		this.http.post(this._loginUrl, credentials,
		)
			.subscribe(res => {
				console.log(res);
				localStorage.setItem("jwt", (<any>res).jwt);
				this.isLoggedInSubject.next(true);
				this.router.navigate(["/"]);
			}, err => {
				this.isLoggedInSubject.next(false);
				console.log(err);
			});
	}

	registerUser(user) {
		return this.http.post<any>(this._registerUrl, user)
	}

	logout() {
		localStorage.removeItem('jwt');
		this.isLoggedInSubject.next(false);
		console.log("loggedout")
	}

	private hasToken(): boolean {
		return !!localStorage.getItem('jwt');
	}
}