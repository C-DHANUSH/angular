import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list-parent',
  templateUrl: './student-list-parent.component.html',
  styleUrls: ['./student-list-parent.component.scss']
})
export class StudentListParentComponent implements OnInit {
   students = [
    { id: 1, name: 'Arun', age: 20 },
    { id: 2, name: 'Priya', age: 21 },
    { id: 3, name: 'Rahul', age: 22 }
  ];

  selectedStudent: any = null;
  favoriteStudent: string = '';

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

  onMarkedFavorite(name: string) {
    this.favoriteStudent = name;
    alert(`${name} marked as Favorite!`);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
