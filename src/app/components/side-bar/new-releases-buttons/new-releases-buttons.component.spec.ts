import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesButtonsComponent } from './new-releases-buttons.component';

describe('NewReleasesButtonsComponent', () => {
  let component: NewReleasesButtonsComponent;
  let fixture: ComponentFixture<NewReleasesButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReleasesButtonsComponent]
    });
    fixture = TestBed.createComponent(NewReleasesButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
