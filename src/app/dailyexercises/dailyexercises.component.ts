import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ExerciseService } from '../_services/exercises.service';

@Component({
  selector: 'app-dailyexercises',
  templateUrl: './dailyexercises.component.html',
  styleUrls: ['./dailyexercises.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyexercisesComponent implements OnInit {
  @Input() exArray : [];
  exName = {name:''}

  constructor( private _exercise:ExerciseService) { }

  ngOnInit() {
  
  }
	
  getExerciseById(_id : String) {
    this._exercise.getExerciseById(_id)
    .subscribe(
        res => {    
          this.exName = res.name;         
          console.log(res.name)
        },
        err => console.log(err)
      )
  }

}
