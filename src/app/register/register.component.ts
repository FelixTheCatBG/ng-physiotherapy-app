import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = { email: '', username: '', password: '' }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  registerUser() {
    this.authenticationService.registerUser(this.registerUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.jwt)
          console.log(res)
        },
        err => console.log(err)
      )
  }

}
