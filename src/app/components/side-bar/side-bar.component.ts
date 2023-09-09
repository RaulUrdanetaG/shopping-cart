import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterServiceService } from 'src/app/services/games/filter-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class SideBarComponent {
  activeButton: string | undefined;

  constructor(public _filterService: FilterServiceService) {}

  applyFilter(filter: string) {
    this._filterService.setFilter(filter);
  }

  selectButton(button: string) {
    this.activeButton = button;
  }
}
