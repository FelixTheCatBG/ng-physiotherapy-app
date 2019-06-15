import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ExerciseService } from '../../_services/exercises.service';

@Component({
  selector: 'app-trainingexercisebank',
  templateUrl: './trainingexercisebank.component.html',
  styleUrls: ['./trainingexercisebank.component.css']
})

export class TrainingexercisebankComponent implements OnInit {
  exercisesArray = [];

  constructor(
    private _exercise: ExerciseService,
    private _router: Router
  ) { }

  ngOnInit() {
     this.getExercises()
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
