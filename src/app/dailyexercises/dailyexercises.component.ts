import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dailyexercises',
  templateUrl: './dailyexercises.component.html',
  styleUrls: ['./dailyexercises.component.css']
})
export class DailyexercisesComponent implements OnInit {
  @Input() exArray : [];
  
  constructor() { }

  ngOnInit() {
  }

}
