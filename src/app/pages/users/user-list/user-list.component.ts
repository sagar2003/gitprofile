import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(private userService: UsersService) {
    userService.ackSearchList.subscribe((val) => {
      userService.getUsers(val).subscribe((data) => {
        this.userlist = data;
      });
    });
  }
  id:string="";

  userlist: any="";
}
