import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { profileReducer } from './reducers/profile.reducer';
import { ProfileReducer } from './reducers/profile.reducer';
import { profileFeatureKey, reducer, profileReducers, addProfileReducer } from './reducers/profile.reducer';
import { FormsModule } from '@angular/forms';

import { CommonComponentModule } from './common/common-component.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

import { appReducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HistoryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	  CommonComponentModule,
    FormsModule,
    /*StoreModule.forRoot({
      state: profileReducer,
    }),*/
    /*StoreModule.forRoot({ profiles: reducer }),*/
    // StoreModule.forRoot(profileReducers),
    // StoreModule.forRoot(addProfileReducer),
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
