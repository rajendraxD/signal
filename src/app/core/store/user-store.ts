import { inject, signal } from '@angular/core';
import { User } from '../models/interface/user';
import { Api } from '../services/api';

export class UserStore {
  // private _api: Api
  _api = inject(Api);
  constructor() {
    this.loadUser();
  }
  //Add user
  users = signal<User[]>([]);
  loadUser(){
    this._api.getAllStudent().subscribe((students:any)=>{
      this.users.set(students);
    })
  }
  addUser(user: User) {
    // user.id = (this.users().length + 1).toString();
    // this.users.update((users) => {
    //   return [...users, user];
    // });

    this._api.createStudent(user).subscribe((result: any) => {
      this.users.update((users) => {
        user.id = result.id;
        console.log(user)
        return [...users, user];
      });
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
