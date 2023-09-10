import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Games } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GetGamesService {
  private _url: string =
    'https://api.rawg.io/api/games?key=941c11cee1cd44baa6bfb4fdb7cae169';

  public gamesResponse: Games | undefined;
  constructor(private http: HttpClient) {}

  getGames(filter: string = ''): Observable<Games> {
    if (filter === '') {
      return this.http.get<Games>(this._url + '&page_size=40');
    } else {
      return this.http.get<Games>(this._url + filter);
    }
  }

  getSearchGames(filter: string): Observable<Games> {
    return this.http.get<Games>(this._url + '&page_size=30' + filter);
  }
}
