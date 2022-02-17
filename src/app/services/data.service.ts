import { Injectable } from '@angular/core';

const userList = [
  {
    firstName: "Brent",
    lastName: "Nelson",
    id: 1,
    age: 22,
    email: "nelson@gmail.com",
    password: "qwerty12" 
  },
  {
    firstName: "James",
    lastName: "Darvin",
    id: 2,
    age: 26,
    email: "darvin@gmail.com",
    password: "qwerty345"
  },
  {
    firstName: "Robert",
    lastName: "Anderson",
    id: 3,
    age: 28,
    email: "anderson@gmail.com",
    password: "qwerty567" 
  },
  {
    firstName: "William",
    lastName: "Ball",
    id: 4,
    age: 20,
    email: "ball@gmail.com",
    password: "qwerty128" 
  },
  {
    firstName: "David",
    lastName: "Carter",
    id: 5,
    age: 25,
    email: "Carter@gmail.com",
    password: "qwerty1278" 
  },
  {
    firstName: "Robert",
    lastName: "Griffiths ",
    id: 6,
    age: 23,
    email: "griffiths@gmail.com",
    password: "qwerty12456" 
  },
  {
    firstName: "Richard",
    lastName: "Fisher",
    id: 7,
    age: 22,
    email: "fisher@gmail.com",
    password: "qwerty12345" 
  },
  {
    firstName: "Thomas",
    lastName: "Davidson",
    id: 8,
    age: 22,
    email: "davidson@gmail.com",
    password: "qwerty12987" 
  },
  {
    firstName: "Mark",
    lastName: "Cooper",
    id: 9,
    age: 29,
    email: "Cooper@gmail.com",
    password: "qwerty12876" 
  },
  {
    firstName: "Donald",
    lastName: "Trump",
    id: 10,
    age: 55,
    email: "trump@gmail.com",
    password: "qwerty55" 
  },
]

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  constructor() { }
  
  public getUserList() {
    return userList;
  } 
}

