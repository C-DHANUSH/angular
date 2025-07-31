import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-for',
  templateUrl: './task-list-for.component.html',
  styleUrls: ['./task-list-for.component.scss']
})
export class TaskListForComponent implements OnInit {
  tasks: string[] = ['Do Homework', 'Clean Room', 'Practice Angular'];

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
