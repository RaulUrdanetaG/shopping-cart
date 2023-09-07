import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsButtonsComponent } from './platforms-buttons.component';

describe('PlatformsButtonsComponent', () => {
  let component: PlatformsButtonsComponent;
  let fixture: ComponentFixture<PlatformsButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformsButtonsComponent]
    });
    fixture = TestBed.createComponent(PlatformsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
