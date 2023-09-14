import { TestBed } from '@angular/core/testing';

import { OpenCloseSideBarService } from './open-close-side-bar.service';

describe('OpenCloseSideBarService', () => {
  let service: OpenCloseSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCloseSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
