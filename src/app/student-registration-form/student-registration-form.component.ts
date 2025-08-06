import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.scss']
})
export class StudentRegistrationFormComponent implements OnInit {
 student = {
    name: '',
    email: '',
    age: null,
    gender: '',
    course: '',
    agree: false
  };

  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
    }
  }

}
