import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReleasesButtonsComponent } from './new-releases-buttons/new-releases-buttons.component';
import { TopButtonsComponent } from './top-buttons/top-buttons.component';
import { PlatformsButtonsComponent } from './platforms-buttons/platforms-buttons.component';
import { GenresButtonsComponent } from './genres-buttons/genres-buttons.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  imports: [
    CommonModule,
    NewReleasesButtonsComponent,
    TopButtonsComponent,
    PlatformsButtonsComponent,
    GenresButtonsComponent,
  ],
  standalone: true,
})
export class SideBarComponent {
  hovered: boolean = false;
}
