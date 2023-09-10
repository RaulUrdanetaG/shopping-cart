import { Injectable } from '@angular/core';
import { CartProd } from 'src/app/interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public cart: any;

  constructor() {
    this.cart = [];
  }

  addProduct(product: CartProd) {
    if (this.cart.some((prod: CartProd) => prod.id === product.id)) {
    } else {
      this.cart.push(product);
    }
  }

  productExists(id: number) {
    return this.cart.some((prod: CartProd) => prod.id === id) ? true : false;
  }

  removeProduct(id: number) {
    this.cart = this.cart.filter((prod: CartProd) => prod.id !== id);
  }

  getCart() {
    return this.cart;
  }

  getProductsCount() {
    return this.cart.length;
  }

  getTotalPrice() {
    return this.cart
      .reduce((total: number, product: CartProd) => total + product.price, 0)
      .toFixed(2);
  }
}
