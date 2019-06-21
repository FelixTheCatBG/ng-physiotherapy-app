import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyexercisesComponent } from './dailyexercises.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DailyexercisesComponent', () => {
  let component: DailyexercisesComponent;
  let fixture: ComponentFixture<DailyexercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyexercisesComponent ],
      imports: [RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyexercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
