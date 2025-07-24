import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ApiConstant } from '../constant/api-constant';
import { User } from '../models/interface/user';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private _httpClient: HttpClient) {}
  getAllStudent() {
    return this._httpClient.get(
      environment.apiUrl + ApiConstant.MODULE_NAME.STUDENT
      // +
      // '/' +
      // ApiConstant.STUDENT_METHODS.GET_ALL_STUDENTS
    );
  }
  createStudent(student: User) {
    return this._httpClient.post(
      environment.apiUrl + ApiConstant.MODULE_NAME.STUDENT,
      // +
      // '/' +
      //   ApiConstant.STUDENT_METHODS.GET_ALL_STUDENTS
      student
    );
  }
  updateStudent(id: any) {
    return this._httpClient.post(
      environment.apiUrl + ApiConstant.MODULE_NAME.STUDENT,
      // +
      // '/' +
      // ApiConstant.STUDENT_METHODS.GET_ALL_STUDENTS
      id
    );
  }
}
