import { Component } from '@angular/core';
import {AuthenticationService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-physiotherapy-app';
  private userLoggedIn: boolean;
  

  constructor( 
    private authenticationService: AuthenticationService
    ){
   this.authenticationService.getLoggedIn().subscribe(value => {
     this.userLoggedIn = value;
    });
  }
 
}
