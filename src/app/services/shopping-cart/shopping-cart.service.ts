import { Injectable } from '@angular/core';
import { CartProd } from 'src/app/interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public cart: any;
  public isOpen: boolean;

  constructor() {
    this.cart = [];
    this.isOpen = false;
  }

  addProduct(product: CartProd) {
    if (this.cart.some((prod: CartProd) => prod.id === product.id)) {
    } else {
      this.cart.push(product);
      this.saveCartLocal(this.cart);
    }
  }

  removeProduct(id: number) {
    this.cart = this.cart.filter((prod: CartProd) => prod.id !== id);
    this.saveCartLocal(this.cart);
  }

  deleteAll() {
    this.cart = [];
    this.saveCartLocal(this.cart);
  }

  productExists(id: number) {
    return this.cart.some((prod: CartProd) => prod.id === id) ? true : false;
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

  //local storage

  saveCartLocal(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartLocal() {
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  }

  // open and close cart

  openCloseCart(command: string) {
    if (command === 'open') {
      this.isOpen = true;
    } else if (command === 'close') {
      this.isOpen = false;
    }
  }
}
