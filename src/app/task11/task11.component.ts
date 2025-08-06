import { Component, OnInit } from '@angular/core';
import { login } from '../login.service';

@Component({
  selector: 'app-task11',
  templateUrl: './task11.component.html',
  styleUrls: ['./task11.component.scss']
})
export class Task11Component implements OnInit {
  loggedIn = false;
  constructor(private root: login) {
    this.root.isLoggedIn$.subscribe(status => this.loggedIn = status);
  }
  ngOnInit(): void {
  }
  toggleLogin() {
    this.loggedIn ? this.root.logout() : this.root.login();
  }
}
