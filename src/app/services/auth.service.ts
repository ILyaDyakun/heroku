import { Injectable } from '@angular/core';
import { DataServices } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataServices) { 
    
  }

  public login(email: string, password: string) {
    let users = this.dataService.getUserList();
    console.log(email);
    console.log(password);
    //check if user contain email and password
    return false;
  }
}

