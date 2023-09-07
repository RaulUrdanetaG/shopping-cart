import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresButtonsComponent } from './genres-buttons.component';

describe('GenresButtonsComponent', () => {
  let component: GenresButtonsComponent;
  let fixture: ComponentFixture<GenresButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenresButtonsComponent]
    });
    fixture = TestBed.createComponent(GenresButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
