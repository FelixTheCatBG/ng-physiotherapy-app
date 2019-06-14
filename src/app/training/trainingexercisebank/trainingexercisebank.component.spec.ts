import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingexercisebankComponent } from './trainingexercisebank.component';

describe('TrainingexercisebankComponent', () => {
  let component: TrainingexercisebankComponent;
  let fixture: ComponentFixture<TrainingexercisebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingexercisebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingexercisebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
