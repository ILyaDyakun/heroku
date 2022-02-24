import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

const userList = [
  {
    firstName: "Brent",
    lastName: "Nelson",
    id: 1,
    age: 22,
    email: "nelson@gmail.com",
    password: "qwerty12",
    token: "qwsrhdthd"
  },
  {
    firstName: "James",
    lastName: "Darvin",
    id: 2,
    age: 26,
    email: "darvin@gmail.com",
    password: "qwerty345",
    token: "qwerty"
  },
  {
    firstName: "Robert",
    lastName: "Anderson",
    id: 3,
    age: 28,
    email: "anderson@gmail.com",
    password: "qwerty567",
    token: "erhae"
  },
  {
    firstName: "William",
    lastName: "Ball",
    id: 4,
    age: 20,
    email: "ball@gmail.com",
    password: "qwerty128",
    token: "dshgndfgndf"
  },
  {
    firstName: "David",
    lastName: "Carter",
    id: 5,
    age: 25,
    email: "Carter@gmail.com",
    password: "qwerty1278",
    token: "sthrtjryjr" 
  },
  {
    firstName: "Robert",
    lastName: "Griffiths ",
    id: 6,
    age: 23,
    email: "griffiths@gmail.com",
    password: "qwerty12456",
    token: "trhrtwrth" 
  },
  {
    firstName: "Richard",
    lastName: "Fisher",
    id: 7,
    age: 22,
    email: "fisher@gmail.com",
    password: "qwerty12345",
    token: "teherh" 
  },
  {
    firstName: "Thomas",
    lastName: "Davidson",
    id: 8,
    age: 22,
    email: "davidson@gmail.com",
    password: "qwerty12987",
    token: "esthetharth" 
  },
  {
    firstName: "Mark",
    lastName: "Cooper",
    id: 9,
    age: 29,
    email: "Cooper@gmail.com",
    password: "qwerty12876",
    token: "rhjrdyjry" 
  },
  {
    firstName: "Donald",
    lastName: "Trump",
    id: 10,
    age: 55,
    email: "trump@gmail.com",
    password: "qwerty55",
    token: "gsnbgfnsfhnm" 
  },
]

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  constructor() { }
  
  public getUserList(): User[] {
    return userList;
  } 

  public getUser(token: string | null): User | undefined {
    return this.getUserList().find(user => user.token === token)
  }

  public updateUser(user: User): void {
    const id = user.id;
    const index = this.getUserList().findIndex(user => user.id === id);
    this.getUserList().splice(index, 1, user);
  }
}

