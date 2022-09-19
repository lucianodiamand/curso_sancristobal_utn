import { Injectable } from '@angular/core';
import { User } from './user';

const USERS: User[] = [
  {
    id: 1,
    username: 'ldiamand',
    name: 'Luciano',
    lastName: 'Diamand'
  },
  {
    id: 2,
    username: 'spinelli',
    name: 'Sergio',
    lastName: 'Pinelli'
  },
  {
    id: 3,
    username: 'ldiamand',
    name: 'Luciano',
    lastName: 'Diamand'
  },
  {
    id: 4,
    username: 'ldiamand',
    name: 'Luciano',
    lastName: 'Diamand'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  getUserById(id: string | null): User | undefined {
    if (!id) {
      return undefined;
    }
    return USERS.find(user => user.id === +id);
  }

}
