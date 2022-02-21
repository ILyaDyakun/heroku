import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';

import { GamesModule } from './games/games.module';
import { SharedModule } from './shared/shared.module';
import { LibraryModule } from './library/library.module';
import { FriendsModule } from './friends/friends.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,

    ProfileModule,
    SharedModule
    FriendsModule,
    SharedModule,
    GamesModule,
    LibraryModule,

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
