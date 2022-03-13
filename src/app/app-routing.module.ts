import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

import { ProfileResolver } from './resolvers/profile.resolver';

const routes: Routes = [{
	path: '',
	redirectTo: 'home',
	pathMatch: 'full'
}, {
	path: 'home', component: HomeComponent
}, {
	path: 'search', component: SearchComponent
}, {
	path: 'history', component: HistoryComponent
}, {
	path: 'profile/:profileloginname', component: ProfileComponent, resolve: { profile: ProfileResolver }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
