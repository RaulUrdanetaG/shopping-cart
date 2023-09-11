import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GameOn';

  constructor(private _shoppingCartService: ShoppingCartService) {}

  isOpen() {
    return this._shoppingCartService.isOpen;
  }
}
