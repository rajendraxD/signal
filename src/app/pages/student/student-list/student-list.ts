import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

interface students {
  data: {
    carId: number;
    brand: string;
  }[];
}

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents() {
    this.http.get<students>(environment.apiUrl).subscribe((data) => {
      data.data.map((item) => {
        console.log(item.carId + ` => ` + item.brand);
      });
    });
  }
}
