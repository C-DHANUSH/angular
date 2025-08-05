import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListParentComponent } from './student-list-parent.component';

describe('StudentListParentComponent', () => {
  let component: StudentListParentComponent;
  let fixture: ComponentFixture<StudentListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
