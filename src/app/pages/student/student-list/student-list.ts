import { Component } from '@angular/core';
import { Api } from '../../../core/services/api';
import { shardModule } from '../../../shared/shared';

@Component({
  selector: 'app-student-list',
  imports: [shardModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {
  studentList!: any;
  constructor(private _api: Api) {
    this.fetchStudent();
  }
  fetchStudent() {
    this._api.getAllStudent().subscribe((res: any) => {
      console.log(res);
      this.studentList = res;
    });
  }

  editStudent(id: number) {
    console.log('Edit student with id:', id);
    this._api.updateStudent(id).subscribe((res: any) => {
      console.log('updated');
    });
  }

  deleteStudent(id: number) {
    console.log('Delete student with id:', id);
  }
}
