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
  painscale = '';
  calendarFirst = {
    _id: "",
    name: "",
    painscale: "",
    date: "",
    done: "",
    exercisedailydiaries: []
  };


  isVisible: boolean = false;

  feedbackDisplayedImg: string = "../../assets/feedbackIcons/1.png";
  FeedbackImages = [
    { url: "../../assets/feedbackIcons/1.png" },
    { url: "../../assets/feedbackIcons/2.png" },
    { url: "../../assets/feedbackIcons/3.png" },
    { url: "../../assets/feedbackIcons/4.png" },
    { url: "../../assets/feedbackIcons/5.png" },
    { url: "../../assets/feedbackIcons/6.png" },
    { url: "../../assets/feedbackIcons/7.png" },
    { url: "../../assets/feedbackIcons/8.png" },
    { url: "../../assets/feedbackIcons/9.png" },
    { url: "../../assets/feedbackIcons/10.png" }
  ];

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
    this.calendarFirst.painscale=this.painscale;
    this._calendar.registerDizzy(this.calendarFirst._id, this.calendarFirst)
    .subscribe(
      res => {
        console.log("SUCCESS");
        console.log(this.calendarFirst);
      },
      err => console.log(err)
    );
    this.isVisible = false
  }

  setRangeValue(e: boolean) {
    let feedbackValue = (<HTMLInputElement>document.getElementById("myRange"))
      .value;
    if (feedbackValue == "2") {
      this.feedbackDisplayedImg = this.FeedbackImages[1].url;
    } else if (feedbackValue == "3") {
      this.feedbackDisplayedImg = this.FeedbackImages[2].url;
    } else if (feedbackValue == "4") {
      this.feedbackDisplayedImg = this.FeedbackImages[3].url;
    } else if (feedbackValue == "5") {
      this.feedbackDisplayedImg = this.FeedbackImages[4].url;
    } else if (feedbackValue == "6") {
      this.feedbackDisplayedImg = this.FeedbackImages[5].url;
    } else if (feedbackValue == "7") {
      this.feedbackDisplayedImg = this.FeedbackImages[6].url;
    } else if (feedbackValue == "8") {
      this.feedbackDisplayedImg = this.FeedbackImages[7].url;
    } else if (feedbackValue == "9") {
      this.feedbackDisplayedImg = this.FeedbackImages[8].url;
    } else if (feedbackValue == "10") {
      this.feedbackDisplayedImg = this.FeedbackImages[9].url;
    } else {
      this.feedbackDisplayedImg = this.FeedbackImages[0].url;
    }
  }

  checkFeedback(e: boolean) {
    e = !e;
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
        this.user = res;

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
