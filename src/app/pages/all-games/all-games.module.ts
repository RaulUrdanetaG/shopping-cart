import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';


@NgModule({
  declarations: [
    AllGamesComponent
  ],
  imports: [
    CommonModule,
    AllGamesRoutingModule
  ]
})
export class AllGamesModule { }
