import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Image } from 'src/app/interfaces/carouselImage';
import { GetGamesService } from 'src/app/services/games/get-games.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import format from 'date-fns/format';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  public gameId: number = 0;
  public gameDetails: any;
  public images: Image[] = [];
  public genres: any = [];
  public platforms: any = [];
  public devs: any = [];
  public publishers: any = [];

  constructor(
    private route: ActivatedRoute,
    private _getGameService: GetGamesService,
    public _shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this._shoppingCartService.getCartLocal();
    const gameIdParam = this.route.snapshot.paramMap.get('id');
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
        gameIdResponse.genres.forEach((genre: any) => {
          this.genres.push(genre.name);
        });
        gameIdResponse.parent_platforms.forEach((platform: any) => {
          this.platforms.push(platform.platform.name);
        });
        gameIdResponse.developers.forEach((dev: any) => {
          this.devs.push(dev.name);
        });
        gameIdResponse.publishers.forEach((pub: any) => {
          this.publishers.push(pub.name);
        });
      });

    this._getGameService
      .getScreenShots(this.gameId)
      .subscribe((screenShots) => {
        console.log(screenShots.results[0].image);
        screenShots.results.forEach((ss) => {
          this.images.push({ image: ss.image });
        });
      });
  }

  isLoading() {
    return this.gameDetails ? false : true;
  }

  formatDate(date: string) {
    let newDate = new Date(date);
    return format(newDate, 'dd MMM yyy');
  }

  loadList(list: any) {
    return list.join(', ');
  }
}
