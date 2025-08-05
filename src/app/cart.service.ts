import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cart$;
  }
}


