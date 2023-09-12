import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'all-games',
    loadChildren: () =>
      import('./pages/all-games/all-games.module').then(
        (m) => m.AllGamesModule
      ),
  },
  {
    path: 'all-games/game/:slug',
    loadChildren: () =>
      import('./pages/game-details/game-details.module').then(
        (m) => m.GameDetailsModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/new/new.module').then((m) => m.NewModule),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
