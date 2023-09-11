import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  constructor(private _shoppingCartService: ShoppingCartService) {}

  closeCart() {
    this._shoppingCartService.openCloseCart('close');
  }
}
