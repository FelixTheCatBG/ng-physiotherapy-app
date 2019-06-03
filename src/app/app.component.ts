import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-physiotherapy-app';

  private isLoggedIn: boolean;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn()
      .subscribe(value => {
        this.isLoggedIn = value;
      });

  }
}
