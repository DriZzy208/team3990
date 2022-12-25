import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Season2022Component } from './pages/season2022/season2022.component';
import { Season2020Component } from './pages/season2020/season2020.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/history/history.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Season2022Component,
    Season2020Component,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    SponsorComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
