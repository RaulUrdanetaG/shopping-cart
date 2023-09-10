import { Component } from '@angular/core';
import { Games } from 'src/app/interfaces/game';
import { GetGamesService } from 'src/app/services/games/get-games.service';
import { FilterServiceService } from 'src/app/services/games/filter-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class SearchBarComponent {
  public gamesResponse: Games | undefined;
  public searchName: string = '';
  public isFocused: boolean = false;

  constructor(
    private _getGamesService: GetGamesService,
    private _filterService: FilterServiceService
  ) {}

  isLoading() {
    return this.gamesResponse ? false : true;
  }

  onType(search: string) {
    this.searchName = search;
    this.gamesResponse = undefined;
    this._getGamesService
      .getSearchGames(`&search=${this.searchName}`)
      .subscribe((games) => {
        this.gamesResponse = games;
      });
  }

  openSearch(search: string, isFocused: boolean) {
    if (search !== '' && isFocused === true) {
      return true;
    } else {
      return false;
    }
  }

  applyFilter(filter: string) {
    this._filterService.setSearchFilter(filter);
  }
}
