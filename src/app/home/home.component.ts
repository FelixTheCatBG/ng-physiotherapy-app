import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../_services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { ExerciseService } from "../_services/exercises.service";
import { CalendarService } from "../_services/calendar.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user = { username: "" };
  registerExerciseData = { exercise: "", user: "" };
  calendarFirst = {
    name: "",
    painscale: "",
    date: "",
    done: "",
    exercisedailydiaries: []
  };
  isVisible: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private _exercise: ExerciseService,
    private _calendar: CalendarService,
    private _router: Router
  ) {}

  ngOnInit() {
    //get user detailes
    this.getUser();
    //get my exercsises
    this.getExercises();
    this.getCalendar();
    // this.getExerciseById(id)
  }


  submitDizziness(){

    this.isVisible = false
  }


  checkFeedback(e:boolean) {
    e=!e;
    let temp = true;

    this.calendarFirst.exercisedailydiaries.forEach(ex => {
      // console.log(ex.done);
      // console.log("sdfoghjdfhjg");
      
      if (ex.done == false) {
        temp = false;
        console.log(ex.done);
      }
      return temp;
    });


    if (temp) {
      console.log("ready");
      this.isVisible = true;
      console.log(this.isVisible);
    } else {
      console.log("not ready");
    }
  }


  getUser() {
    this.authenticationService.getUser().subscribe(
      res => {
        this.user.username = res.username;
        console.log(res.username);
      },
      err => console.log(err)
    );
  }

  getExercises() {
    this._exercise.getExercises().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  getCalendar() {
    this._calendar.getCalendar().subscribe(
      res => {
        this.calendarFirst = res[0];
        console.log(this.calendarFirst);
      },
      err => console.log(err)
    );
  }
}
