import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenCloseSideBarService {
  public isOpen: boolean = false;
  constructor() {}

  openCloseSideBar() {
    this.isOpen = !this.isOpen;
  }
}
