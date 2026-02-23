import { Component } from '@angular/core';
import { CartService } from './cart-service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RouterLink,CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cart: CartService){}

}
