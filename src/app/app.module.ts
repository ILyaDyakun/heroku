import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { GamesModule } from './games/games.module';
import { SharedModule } from './shared/shared.module';
import { LibraryModule } from './library/library.module';
import { FriendsModule } from './friends/friends.module';
import { FriendsComponent } from './friends/friends/friends.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FriendsModule,
    SharedModule,
    GamesModule,
    LibraryModule,
    FriendsComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
