import { Component, Input, OnInit } from '@angular/core';
import { Games, Game } from 'src/app/interfaces/game';
import { GetGamesService } from 'src/app/services/games/get-games.service';
import { CommonModule } from '@angular/common';
import { FilterServiceService } from 'src/app/services/games/filter-service.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';

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
    public _shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._shoppingCartService.getCartLocal();
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

  onSelect(id: number) {
    this.router.navigate(['/all-games/game', id]);
  }
}
