import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpworkComponent } from './task-upwork.component';

describe('TaskUpworkComponent', () => {
  let component: TaskUpworkComponent;
  let fixture: ComponentFixture<TaskUpworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUpworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
