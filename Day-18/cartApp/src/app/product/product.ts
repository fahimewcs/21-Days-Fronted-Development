import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '../cart/cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Product {
  constructor(public cart: CartService){}

  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Headphone', price: 3000 },
    { id: 4, name: 'Watch', price: 4500 },
    { id: 5, name: 'TV', price: 25000 },
    { id: 6, name: 'Camera', price: 25000 },
    { id: 7, name: 'Refrigerator', price: 250000 },
    { id: 8, name: 'Fan', price: 2500 },
    { id: 9, name: 'Printer', price: 19000 },
    { id: 10, name: 'Iron', price: 5000 },
    { id: 11, name: 'Micro Oven', price: 15000 }
  ];

  addToCart(product: any) {
    this.cart.addItem(product);
  }

  trackByProduct(index: number, product: any): number {
    return product.id;
  }

}
