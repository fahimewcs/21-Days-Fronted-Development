import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from './user';
import { AuthLogin } from '../authenticate/auth-login';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{

  isSidebarExpanded = false;
  username: string | null = null;
  searchText = '';

  books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 2500, image: 'https://covers.openlibrary.org/b/id/10594758-L.jpg', added: false },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', price: 3000, image: 'https://covers.openlibrary.org/b/id/11153221-L.jpg', added: false },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', price: 1500, image: 'https://covers.openlibrary.org/b/id/9611991-L.jpg', added: false },
  { id: 4, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 3000, image: 'https://covers.openlibrary.org/b/id/10958312-L.jpg', added: false },
  { id: 5, title: 'Deep Work', author: 'Cal Newport', price: 2200, image: 'https://covers.openlibrary.org/b/id/10595584-L.jpg', added: false },
  { id: 6, title: 'The Subtle Art of Not Giving', author: 'Mark Manson', price: 1800, image: 'https://covers.openlibrary.org/b/id/10616750-L.jpg', added: false },
  { id: 7, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', price: 3200, image: 'https://covers.openlibrary.org/b/id/10578820-L.jpg', added: false },
  { id: 8, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', price: 2700, image: 'https://covers.openlibrary.org/b/id/10751727-L.jpg', added: false },
  { id: 9, title: '1984', author: 'George Orwell', price: 1600, image: 'https://covers.openlibrary.org/b/id/11156664-L.jpg', added: false },
  { id: 10, title: 'The Lean Startup', author: 'Eric Ries', price: 2000, image: 'https://covers.openlibrary.org/b/id/10468341-L.jpg', added: false },
  { id: 11, title: 'The Power of Habit', author: 'Charles Duhigg', price: 2300, image: 'https://covers.openlibrary.org/b/id/10577864-L.jpg', added: false },
  { id: 12, title: 'Think and Grow Rich', author: 'Napoleon Hill', price: 2500, image: 'https://covers.openlibrary.org/b/id/10591235-L.jpg', added: false }
];


  constructor(public auth: AuthLogin, public cart: CartService) {}

  ngOnInit() {
    this.username = this.auth.user();
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  addToCart(book: any) {
    if (!book.added) {
      this.cart.addItem(book);
      book.added = true;
    }
  }

  onSearch() {
    console.log('Search:', this.searchText);
    // Implement search filter here if needed
  }

  viewDetails(book: any) {
  console.log("Viewing details:", book);
  // later you can navigate
  // this.router.navigate(['/book-details', book.id]);
}

  logout() {
    this.auth.logout();
    location.reload();
  }


}
