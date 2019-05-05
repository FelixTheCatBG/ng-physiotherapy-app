import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {AuthenticationService} from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
  }

  login(form: NgForm) {
    this.authenticationService.login(form);
  }
    
  logout(){
    this.authenticationService.logout();
  }

}
