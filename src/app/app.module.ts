import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GetGamesService } from './services/games/get-games.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavBarComponent, SearchBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [GetGamesService, ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
