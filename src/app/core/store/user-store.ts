import { signal } from '@angular/core';
import { User } from '../models/interface/user';

export class UserStore {
  constructor() {}
  users = signal<User[]>([]);
  //Add user
  addUser(user: User) {
    user.id = (this.users().length + 1).toString();
    this.users.update((users) => {
      return [...users, user];
    });
  }
  //Update user
  updateUser(user: User) {
    this.users.update((users) => {
      return users.map((u) => {
        if (u.id === user.id) {
          return user;
        }
        return u;
      });
    });
  }
  //Delete user
  deleteUser(user: User) {
    this.users.update((users) => {
      return users.filter((u) => {
        return u.id != user.id;
      });
    });
  }
}
