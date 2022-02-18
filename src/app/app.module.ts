import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { FriendsComponent } from './friends/friends/friends.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FriendsComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
