import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carouselImage, Image } from 'src/app/interfaces/carouselImage';
import { Game } from 'src/app/interfaces/game';
import { GetGamesService } from 'src/app/services/games/get-games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  public gameId: number = 0;
  public gameDetails: any;
  public images: Image[] = [];

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
        this.images.unshift({ image: gameIdResponse.background_image });
      });

    this._getGameService
      .getScreenShots(this.gameId)
      .subscribe((screenShots) => {
        console.log(screenShots.results[0].image);
        screenShots.results.forEach((ss) => {
          this.images.push({ image: ss.image });
        });
        console.log(this.images);
      });
  }

  isLoading() {
    return this.gameDetails ? false : true;
  }
}
