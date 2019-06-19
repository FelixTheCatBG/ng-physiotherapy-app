import { Component, OnInit, Input } from '@angular/core';
import { ExerciseService } from '../_services/exercises.service';

@Component({
  selector: 'app-dailyexercises',
  templateUrl: './dailyexercises.component.html',
  styleUrls: ['./dailyexercises.component.css']
})
export class DailyexercisesComponent implements OnInit {
  @Input() exArray : [];

  constructor( private _exercise:ExerciseService) { }

  ngOnInit() {
   
  }

  getExerciseById(_id) {
    this._exercise.getExerciseById(_id)
    .subscribe(
        res => {       
          console.log(res)
        },
        err => console.log(err)
      )
  }
}
