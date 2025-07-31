import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
