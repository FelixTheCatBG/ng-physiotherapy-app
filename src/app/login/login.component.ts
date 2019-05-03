import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private router:Router,
    private http: HttpClient
    ) { }

  login(form: NgForm) {
      let credentials = JSON.stringify(form.value);
      console.log(credentials);
      this.http.post("http://localhost:1337/auth/local", credentials
       , {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {
        console.log(response);
        let token = (<any>response).jwt;       
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/"]);
        
      }, err => {
      this.invalidLogin = true;
      });
    }
  ngOnInit() {
    
  }

}
