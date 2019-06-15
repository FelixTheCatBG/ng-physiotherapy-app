import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { User } from '../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class DailyExerciseService {
	
	private _getCalendar = "http://localhost:1337/exercises";
    private _getMyDailyExercises = "http://localhost:1337/myexercises";   
   

	constructor(
		private http: HttpClient,
        private router: Router,
	) { }


	getExercises() {
		return this.http.get<any>(this._getCalendar)
    }   
    
	getMyExercises() {
		return this.http.get<any>(this._getCalendar)
	}

	// setExercise(user) {
	// 	return this.http.post<any>(this._getMyExercises)
	// }

}