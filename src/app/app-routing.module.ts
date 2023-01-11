import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Season2022Component } from './pages/season2022/season2022.component';
import { Season2020Component } from './pages/season2020/season2020.component';
import { HistoryComponent } from './pages/history/history.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'season2022', component: Season2022Component},
  {path: 'season2020', component: Season2020Component},
  {path: 'about', component: AboutComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'sponsor', component: SponsorComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
