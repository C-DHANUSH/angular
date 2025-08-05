import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsChildComponent } from './student-details-child.component';

describe('StudentDetailsChildComponent', () => {
  let component: StudentDetailsChildComponent;
  let fixture: ComponentFixture<StudentDetailsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
