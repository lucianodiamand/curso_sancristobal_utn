import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Chuck } from './chuck';
import { ChuckService } from './chuck.service';
import { OtroService } from './otro.service';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users$!: Observable<User[]>;

  title = 'api_client';

  userForm: FormGroup;

  constructor(
    private service: UserService,
    private fb: FormBuilder
  ) { 
    this.userForm = this.fb.group({
       username: [''],
       firstName: [''],
       lastName: ['']
    });
  }

  ngOnInit(): void {
    this.users$ = this.service.getAll();
  }

  borrar(id: number): void {
    this.service.borrarUser(id).subscribe();
  }

  onSubmit(): void {
    const user: User = this.userForm.value;
    this.service.crearUsuario(user).subscribe();
  }

}
