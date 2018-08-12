import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoadingScreenComponent} from './loading-screen/loading-screen.component';
import {GameViewComponent} from './game-view/game-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/loading_screen', pathMatch: 'full' },//default
  { path: 'loading_screen', component: LoadingScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game_view', component: GameViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
