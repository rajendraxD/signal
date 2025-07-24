import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/reusableComponent/header/header';
import { shardModule } from './shared/shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStore } from './core/store/user-store';
import { User } from './core/models/interface/user';

@Component({
  selector: 'app-root',
  imports: [ shardModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('jsonserver-api');
  userForm!: FormGroup;
  userStore!: UserStore;
  selectedUser: User | null = null;
  constructor(private _fb: FormBuilder) {
    this.initializeForm();
  }
  initializeForm() {
    this.userForm = this._fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
    });
    this.userStore = new UserStore();
  }
  onSave() {
    if (this.userForm.invalid) {
      alert('Please ensure all required fields are filled out correctly.');
      return;
    }
    let formValues = this.userForm.value;
    console.log(formValues);
    if (this.selectedUser) {
      //update
      formValues.id = this.selectedUser.id;
      this.userStore.updateUser(formValues);
    } else {
      this.userStore.addUser(formValues);
    }
    this.onClear();
  }
  onClear() {
    this.userForm.reset();
    this.userForm.controls['gender'].setValue('');
    this.selectedUser = null;
  }
  onEditUser(user: User) {
    console.log('Edit-click');
    this.userForm.patchValue(user);
    this.selectedUser = user;
  }
  onDeleteUser(user: User) {
    this.onClear();
    console.log('Delete-click');
    this.userStore.deleteUser(user);
  }
}
