import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './reusableComponent/header/header';
import { CommonModule } from '@angular/common';

export const shardModule = [
  RouterModule, //for routing
  ReactiveFormsModule,
  FormsModule,
  RouterOutlet,
  CommonModule,
  Header,
];
