import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { GamesListComponent } from 'src/app/components/games-list/games-list.component';

@NgModule({
  declarations: [AllGamesComponent],
  imports: [
    CommonModule,
    AllGamesRoutingModule,
    SideBarComponent,
    GamesListComponent,
  ],
})
export class AllGamesModule {}
