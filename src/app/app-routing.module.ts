import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainingComponent } from './training/training.component';
import { TrainingexercisebankComponent } from './training/trainingexercisebank/trainingexercisebank.component';
import { DailyexercisesComponent } from './dailyexercises/dailyexercises.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'myexercises',
    component: TrainingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'exercises',
    component:  TrainingexercisebankComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dailyexercises',
    component: DailyexercisesComponent,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
