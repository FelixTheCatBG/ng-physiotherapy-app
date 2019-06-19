import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ExerciseService } from '../_services/exercises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {username:''};
  registerExerciseData = {exercise:'',user:''};

  constructor (
    private authenticationService: AuthenticationService,
    private _exercise: ExerciseService,
    private _router: Router
    ) { }

  ngOnInit() {
    //get user detailes
      this.getUser();
      //get my exercsises 
      this.getExercises();

      // this.getExerciseById(id)
  }

  getUser() {
    this.authenticationService.getUser()
      .subscribe(
        res => {
          this.user.username = res.username
          console.log(res.username)
        },
        err => console.log(err)
      )
  }

  getExercises(){
    this._exercise.getExercises()
    .subscribe(
        res => {       
          console.log(res)
        },
        err => console.log(err)
      )
  }
 
}
