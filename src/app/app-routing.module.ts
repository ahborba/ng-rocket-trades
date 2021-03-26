import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './logged-in/home-page/home-page.component';
import { InventoryPageComponent } from './logged-in/inventory-page/inventory-page.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { StatisticsPageComponent } from './logged-in/statistics-page/statistics-page.component';
import { TradesPageComponent } from './logged-in/trades-page/trades-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      { path: 'home',
        component: HomePageComponent
      },
      { path: 'trades',
        component: TradesPageComponent
      },
      {
        path: 'inventory',
        component: InventoryPageComponent,
      },
      {
        path: 'statistics',
        component: StatisticsPageComponent,
      },
      {
        path: 'profile',
        component: StatisticsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
