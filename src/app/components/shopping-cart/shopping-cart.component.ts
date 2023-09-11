import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public cart: any;

  constructor(private _shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cart = this._shoppingCartService.getCart();
  }

  closeCart() {
    this._shoppingCartService.openCloseCart('close');
  }

  getTotal() {
    return this._shoppingCartService.getTotalPrice();
  }

  removeItem(id: number) {
    this._shoppingCartService.removeProduct(id);
    this.cart = this._shoppingCartService.getCart();
  }

  checkOut() {
    this._shoppingCartService.openCloseCart('close');
    this._shoppingCartService.deleteAll();
  }
}
