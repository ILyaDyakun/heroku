import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { DataServices } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User | undefined = undefined;

  constructor(private dataService: DataServices) { }

  public login(email: string, password: string): boolean {
    const users = this.dataService.getUserList();
    const index = users.findIndex(user => user.email === email && user.password === password);
    if (index !== -1) {
      localStorage.setItem('token', users[index].token)
    }
    return index !== -1;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }
}

