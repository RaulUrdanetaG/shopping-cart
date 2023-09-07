import { TestBed } from '@angular/core/testing';

import { GetGamesService } from './get-games.service';

describe('GetGamesService', () => {
  let service: GetGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
