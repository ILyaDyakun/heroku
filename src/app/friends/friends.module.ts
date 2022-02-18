import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from '../components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FriendsComponent, HeaderComponent],
  imports: [CommonModule, BrowserModule],
})
export class FriendsModule {}
