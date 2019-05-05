import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import {NgForm} from '@angular/forms';

import { User } from '../_models/user';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
     private currentUserSubject: BehaviorSubject<User>;
     public currentUser: Observable<User>;

     //without user object
     private userLoggedIn = new BehaviorSubject(true);

    constructor(
        private http: HttpClient,
        private router:Router
    ) 
    {
         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
         this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }    

    login(form:NgForm) {
        let credentials = JSON.stringify(form.value);
        
        console.log(credentials);
        this.http.post("http://localhost:1337/auth/local", credentials,
        {
            headers: new HttpHeaders({
            "Content-Type": "application/json"
            })
        })
        .subscribe(response => {
            console.log(response);
            let token = (<any>response).jwt;    
            let userRole = (<any>response).user.role;     
            localStorage.setItem("jwt", token);
            console.log(userRole.name);
            this.router.navigate(["/"]);
            this.setLoggedIn(true);
        }, err => {
            this.currentUserSubject.next(null);
        });
          
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('jwt');
        this.currentUserSubject.next(null);
        this.setLoggedIn(false);
        console.log("loggedout")
    }

    //with logged in as boolean
    getLoggedIn(): Observable<boolean> {
        return this.userLoggedIn.asObservable();
      }
    
      getLoggedInValue(): boolean {
        return this.userLoggedIn.getValue();
      }
    
      setLoggedIn(val: boolean) {
        this.userLoggedIn.next(val);
      }
}