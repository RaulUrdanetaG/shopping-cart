import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from 'src/app/services/games/filter-service.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _filterService: FilterServiceService
  ) {}
  
  ngOnInit(): void {
    this._shoppingCartService.getCartLocal();
  }

  applyFilter(filter: string) {
    this._filterService.setFilter(filter);
  }
}
