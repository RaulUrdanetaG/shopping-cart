import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private _shoppingCartService: ShoppingCartService) {}

  openCart() {
    this._shoppingCartService.openCloseCart('open');
  }

  isOpen() {
    return this._shoppingCartService.isOpen;
  }

  cartIsFilled() {
    return this._shoppingCartService.getProductsCount() === 0 ? false : true;
  }
}
