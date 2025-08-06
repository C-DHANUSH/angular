import { Component, OnInit } from '@angular/core';
import { login } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  statusText = 'Logged Out';

  constructor(private root: login) {
    this.root.isLoggedIn$.subscribe(isLogged =>
      this.statusText = isLogged ? 'Logged In' : 'Logged Out'
    );
  }

  ngOnInit(): void {
  }
}
