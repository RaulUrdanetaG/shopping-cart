import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterServiceService } from 'src/app/services/games/filter-service.service';
import { OpenCloseSideBarService } from 'src/app/services/games/open-close-side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class SideBarComponent {
  activeButton: string | undefined;

  constructor(
    public _filterService: FilterServiceService,
    public _openSideBarService: OpenCloseSideBarService
  ) {}

  applyFilter(filter: string) {
    this._filterService.setFilter(filter);
  }

  selectButton(button: string) {
    this.activeButton = button;
  }

  closeSideBar() {
    this._openSideBarService.openCloseSideBar();
  }
}
