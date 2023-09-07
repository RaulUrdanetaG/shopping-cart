import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Games } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GetGamesService {
  private _url: string =
    'https://api.rawg.io/api/games?key=941c11cee1cd44baa6bfb4fdb7cae169&page_size=40';
  constructor(private http: HttpClient) {}

  getGames(): Observable<Games> {
    return this.http.get<Games>(this._url);
  }
}
