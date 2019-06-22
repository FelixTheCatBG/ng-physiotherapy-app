import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';

import { CalendarService } from '../_services/calendar.service';
import { ExerciseService } from '../_services/exercises.service';


import 'flatpickr/dist/flatpickr.css'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
})
export class CalendarComponent implements OnInit {
  
  calendarArray = [];
  exercisesArray = [];

  constructor(
    private _calendar: CalendarService,  
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCalendar();
  }
  
  getCalendar(){
    this._calendar.getCalendar()
    .subscribe(
        res => {
        this.calendarArray = res
        console.log(this.calendarArray)
        },
        err => console.log(err)
      )
  }  

}
