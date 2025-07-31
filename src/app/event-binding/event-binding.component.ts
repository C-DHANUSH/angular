import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
    counter = 0;
  message = '';
  inputText = '';

  incrementCounter() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }

  onKeyUp() {
    this.message = 'Key released!';
  }

  onMouseOver() {
    this.message = 'Mouse is over the box!';
  }

  onFocus() {
    this.message = 'Input focused!';
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputText = target.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
