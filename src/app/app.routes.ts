import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
  },
  {
    path: 'student',
    loadComponent: () =>
      import('./pages/student/student-list/student-list').then(
        (c) => c.StudentList
      ),
  }
];
