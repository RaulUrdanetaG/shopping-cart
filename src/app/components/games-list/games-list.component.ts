import { Component, OnInit } from '@angular/core';
import { Games, Game } from 'src/app/interfaces/game';
import { GetGamesService } from 'src/app/services/games/get-games.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class GamesListComponent implements OnInit {
  public gamesResponse: Games | undefined;

  public gamesa = ['gta', 'cod', 'gow'];
  constructor(private _getGamesService: GetGamesService) {}

  ngOnInit(): void {
    this._getGamesService
      .getGames()
      .subscribe((games) => (this.gamesResponse = games));
  }

  isLoading() {
    return this.gamesResponse ? false : true;
  }

  getPrice(game: Game) {
    let releaseYear = parseInt(game.released.slice(0, 4));
    let price = 5 * releaseYear - 10055.01;
    let limitedPrice = Math.min(Math.max(price, 8.99), 60);
    return limitedPrice.toFixed(2);
  }
}
