import { Students } from './../interfaces/students';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  postStudents(data: Students) {
    return this.http.post<Students>(this.apiUrl, data);
  }

  getStudents(): Observable<Students[]>{
    return this.http.get<Students[]>(this.apiUrl);
  }
}
