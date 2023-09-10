import { Component, Input, OnInit } from '@angular/core';
import { Games, Game } from 'src/app/interfaces/game';
import { GetGamesService } from 'src/app/services/games/get-games.service';
import { CommonModule } from '@angular/common';
import { FilterServiceService } from 'src/app/services/games/filter-service.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { CartProd } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
  imports: [CommonModule, SearchBarComponent],
  standalone: true,
})
export class GamesListComponent implements OnInit {
  public gamesResponse: Games | undefined;
  public filterTitle: string = '';

  constructor(
    private _getGamesService: GetGamesService,
    private _filterService: FilterServiceService,
    private _shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this._filterService.filterText$.subscribe((filterText) => {
      this.filterTitle = filterText;
    });
    this._filterService.filter$.subscribe((filter) => {
      this.gamesResponse = undefined;
      this._getGamesService.getGames(filter).subscribe((games) => {
        this.gamesResponse = games;
      });
    });
  }

  isLoading() {
    return this.gamesResponse ? false : true;
  }

  getPrice(game: Game) {
    if (game.genres.some((genre) => genre.slug == 'indie')) {
      return 9.99;
    }
    let releaseYear = parseInt(game.released.slice(0, 4));
    let price = 5 * releaseYear - 10055.01;
    let limitedPrice = Math.min(Math.max(price, 8.99), 60);
    return parseFloat(limitedPrice.toFixed(2));
  }

  addToCart(id: number, name: string, price: number, image: string) {
    let game: CartProd = { id: id, name: name, price: price, imageURL: image };
    this._shoppingCartService.addProduct(game);
    console.log(this._shoppingCartService.getCart());
    console.log(this._shoppingCartService.getTotalPrice());
  }

  removeFromCart(id: number) {
    this._shoppingCartService.removeProduct(id);
    console.log(this._shoppingCartService.getCart());
  }

  isAdded(id: number) {
    return this._shoppingCartService.productExists(id);
  }
}
