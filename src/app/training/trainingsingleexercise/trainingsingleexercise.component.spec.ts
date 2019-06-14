import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsingleexerciseComponent } from './trainingsingleexercise.component';

describe('TrainingsingleexerciseComponent', () => {
  let component: TrainingsingleexerciseComponent;
  let fixture: ComponentFixture<TrainingsingleexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsingleexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsingleexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
