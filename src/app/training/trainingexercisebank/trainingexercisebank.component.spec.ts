import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingexercisebankComponent } from './trainingexercisebank.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('TrainingexercisebankComponent', () => {
  let component: TrainingexercisebankComponent;
  let fixture: ComponentFixture<TrainingexercisebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingexercisebankComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
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
