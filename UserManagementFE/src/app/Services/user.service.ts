import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:8000/users/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiURL}${user.id}/`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiURL}${id}/`;
    return this.http.delete(url);
  }
}
