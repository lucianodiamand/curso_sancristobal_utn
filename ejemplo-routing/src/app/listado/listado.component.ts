import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  users!: User[];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
