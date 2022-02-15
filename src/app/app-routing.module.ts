import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends/friends.component';
import { GamesComponent } from './games/games/games.component';
import { LibraryComponent } from './library/library/library.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
];

@NgModule({
  declarations: [
  
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
