import { computed, Injectable, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items = signal<CartItem[]>([]);
  items = this._items.asReadonly();

  totalPrice = computed(() =>
    this._items().reduce((total, item) =>
      total + item.price * item.quantity, 0)
  );

  addItem(product: Omit<CartItem, 'quantity'>) {
    const existing = this._items().find(i => i.id === product.id);

    if (existing) {
      this._items.update(items =>
        items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this._items.update(items => [
        ...items,
        { ...product, quantity: 1 }
      ]);
    }
  }

  removeItem(id: number) {
    this._items.update(items =>
      items.filter(item => item.id !== id)
    );
  }

  increase(id: number) {
    this._items.update(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  decrease(id: number) {
    this._items.update(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }  

  clearCart() {
    this._items.set([]);
  }
  
}
