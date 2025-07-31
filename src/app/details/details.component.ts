import { Component } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  name: string = 'C.Dhanush';
  age: number = 22;
  designation: string = 'Web Developer';
  salary: number = 25000;
  date: Date = new Date();
  greeting: string = '';

  constructor() {
    const now = new Date();
    this.greeting = this.getGreeting(now.getHours());
  }

  get yearlySalary(): number {
    return this.salary * 12;
  }

  getGreeting(hour: number): string {
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 21) return 'Good Evening';
    return 'Good Night';
  }
}
