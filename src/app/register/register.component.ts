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
  ) {  this.authenticationService.logout();}

  ngOnInit() {
   
  }

  registerUser() {
    this.authenticationService.registerUser(this.registerUserData)
      .subscribe(
        res => {          
          console.log(res)
          localStorage.setItem('token', res.jwt)
          this.authenticationService.isLoggedInSubject.next(true);
          console.log(this.authenticationService.isLoggedIn());
          this.router.navigate(["/"]);
        },
        err => console.log(err)
      )
  }

}
