import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class login {
  private loginStatus = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loginStatus.asObservable();

  login() {
    this.loginStatus.next(true);
  }

  logout() {
    this.loginStatus.next(false);
  }
}
