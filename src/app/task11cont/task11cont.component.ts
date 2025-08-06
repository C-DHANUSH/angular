import { Component, OnInit } from '@angular/core';
import { login } from '../login.service';

@Component({
  selector: 'app-task11cont',
  templateUrl: './task11cont.component.html',
  styleUrls: ['./task11cont.component.scss']
})
export class Task11contComponent implements OnInit {
 isLoggedIn = false;

  constructor(private root: login) {
    this.root.isLoggedIn$.subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
  }
}
