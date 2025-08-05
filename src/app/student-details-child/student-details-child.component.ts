import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-details-child',
  templateUrl: './student-details-child.component.html',
  styleUrls: ['./student-details-child.component.scss']
})
export class StudentDetailsChildComponent implements OnInit {
  @Input() student: any;
  @Output() markFavorite = new EventEmitter<string>();

  markAsFavorite() {
    if (this.student) {
      this.markFavorite.emit(this.student.name);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
