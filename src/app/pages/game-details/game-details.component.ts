import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carouselImage } from 'src/app/interfaces/carouselImage';
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
  public images: carouselImage[] = [];

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
            this.images = [];

            this.game.short_screenshots.forEach((ss) => {
              this.images.push({ imageSrc: ss.image });
            });
          });
      });
  }

  isLoading() {
    return this.gameDetails ? false : true;
  }
}
