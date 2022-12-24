import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Season2022Component } from './pages/season2022/season2022.component';
import { Season2020Component } from './pages/season2020/season2020.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'season2022', component: Season2022Component},
  {path: 'season2020', component: Season2020Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
