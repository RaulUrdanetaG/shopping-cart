import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { GetGamesService } from 'src/app/services/games/get-games.service';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  public gameId: number = 0;
  public game: Game | undefined;
  public gameDetails: any;

  constructor(
    private route: ActivatedRoute,
    private _getGameService: GetGamesService
  ) {}

  ngOnInit(): void {
    const gameIdParam = this.route.snapshot.paramMap.get('slug');
    if (gameIdParam !== null) {
      this.gameId = parseInt(gameIdParam);
    } else {
      console.error('null id');
    }
    this._getGameService
      .getGameById(this.gameId)
      .subscribe((gameIdResponse) => {
        this.gameDetails = gameIdResponse; // gets deatils like description, ratings, etc...
        this._getGameService
          .getGameByName(gameIdResponse.slug)
          .subscribe((gameResponse) => {
            this.game = gameResponse.results[0]; // gets screnshoots.
            console.log(this.game);
          });
      });
  }

  isLoading() {
    return this.gameDetails ? false : true;
  }
}
