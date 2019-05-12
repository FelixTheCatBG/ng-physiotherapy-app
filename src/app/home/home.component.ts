import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // let currentUser = this.authenticationService.getLoggedInValue;
    // console.log("aa" + JSON.stringify(currentUser));
  }

}
