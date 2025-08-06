import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11contComponent } from './task11cont.component';

describe('Task11contComponent', () => {
  let component: Task11contComponent;
  let fixture: ComponentFixture<Task11contComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task11contComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task11contComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
