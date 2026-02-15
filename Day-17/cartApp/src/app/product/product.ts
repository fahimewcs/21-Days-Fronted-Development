import { Component } from '@angular/core';
import { CartService } from '../cart/cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(public cart: CartService){}

  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Headphone', price: 3000 },
    { id: 4, name: 'Watch', price: 4500 },
    { id: 5, name: 'Camera', price: 25000 }
  ];

  addToCart(product: any) {
    this.cart.addItem(product);
  }

}
