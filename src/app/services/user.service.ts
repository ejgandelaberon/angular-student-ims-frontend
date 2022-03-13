import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from '../interfaces/users';

/* const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
} */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUrl);
  }
}
