import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingComponent } from './training/training.component';
import { TrainingexercisebankComponent } from './training/trainingexercisebank/trainingexercisebank.component';
import { TrainingsingleexerciseComponent } from './training/trainingsingleexercise/trainingsingleexercise.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DailyexercisesComponent } from './dailyexercises/dailyexercises.component';
import { HeaderComponent } from './header/header.component';

import { FlatpickrModule } from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css';

import { SearchFilterPipe } from "./_pipes/searchfilter.pipe";
import { SettingsComponent } from './settings/settings.component';
import { GoalsComponent } from './goals/goals.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    TrainingComponent,
    TrainingexercisebankComponent,
    TrainingsingleexerciseComponent,
    CalendarComponent,
    DailyexercisesComponent,
    HeaderComponent,
    SearchFilterPipe,
    SettingsComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    JwtHelperService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
