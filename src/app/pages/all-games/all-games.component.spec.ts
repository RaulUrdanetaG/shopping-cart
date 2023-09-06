import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGamesComponent } from './all-games.component';

describe('AllGamesComponent', () => {
  let component: AllGamesComponent;
  let fixture: ComponentFixture<AllGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllGamesComponent]
    });
    fixture = TestBed.createComponent(AllGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
