import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Headphone' },
    { id: 3, name: 'Keyboard' },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}


