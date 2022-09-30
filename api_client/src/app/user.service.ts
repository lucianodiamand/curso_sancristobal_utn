import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.api;

  constructor(
    private service: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.service.get<User[]>(this.url);
  }

  borrarUser(id: number): Observable<User> {
    return this.service.delete<User>(`${this.url}/${id}`);
  }

  crearUsuario(user: User): Observable<User> {
    return this.service.post<User>(this.url, user);
  }

}
