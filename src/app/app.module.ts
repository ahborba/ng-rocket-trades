import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './logged-out/front-page/front-page.component';
import { LoginPageComponent } from './logged-out/login-page/login-page.component';
import { TradesPageComponent } from './logged-in/trades-page/trades-page.component';
import { InventoryPageComponent } from './logged-in/inventory-page/inventory-page.component';
import { StatisticsPageComponent } from './logged-in/statistics-page/statistics-page.component';
import { ProfilePageComponent } from './logged-in/profile-page/profile-page.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { HeaderComponent } from './logged-in/header/header.component';
import { HomePageComponent } from './logged-in/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    LoginPageComponent,
    TradesPageComponent,
    InventoryPageComponent,
    StatisticsPageComponent,
    ProfilePageComponent,
    LoggedInComponent,
    HeaderComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
