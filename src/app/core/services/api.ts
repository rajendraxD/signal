import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ApiConstant } from '../constant/api-constant';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private _httpClient: HttpClient) {}
  getAllStudent() {
    this._httpClient.get(
      environment.apiUrl +
        ApiConstant.MODULE_NAME.STUDENT +
        ApiConstant.STUDENT_METHODS.GET_ALL_STUDENTS
    );
  }
  createStudent(student: any) {
    this._httpClient.post(
      environment.apiUrl +
        ApiConstant.MODULE_NAME.STUDENT +
        ApiConstant.STUDENT_METHODS.GET_ALL_STUDENTS,
      student
    );
  }
}
