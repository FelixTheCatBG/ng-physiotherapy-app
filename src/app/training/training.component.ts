import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { AuthenticationService } from '../_services/auth.service';
import { ExerciseService } from '../_services/exercises.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  setExerciseData = {user:'',timestamp:'',rate:1,description:''};
  exercisesArray = [];

  constructor(
    private authenticationService: AuthenticationService,
    private _exercise: ExerciseService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getExercises();
  }

  getUser() {
    this.authenticationService.getUser()
      .subscribe(
        res => {
          this.setExerciseData.user = res
          console.log(res.username)
        },
        err => console.log(err)
      )
  }

  getExercises(){
    this._exercise.getExercises()
    .subscribe(
        res => {
          this.exercisesArray = res;       
          console.log(this.exercisesArray)
        },
        err => console.log(err)
      )
  }

}
