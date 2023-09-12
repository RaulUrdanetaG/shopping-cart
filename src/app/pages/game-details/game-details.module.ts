import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';
import { ImageCarouselComponent } from 'src/app/components/image-carousel/image-carousel.component';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [CommonModule, GameDetailsRoutingModule, ImageCarouselComponent],
})
export class GameDetailsModule {}
