import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListForComponent } from './task-list-for.component';

describe('TaskListForComponent', () => {
  let component: TaskListForComponent;
  let fixture: ComponentFixture<TaskListForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
