import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userlist:any;
  id="";

  constructor(private userService: UsersService) {
    
  }

  ngOnInit(){
    this.userService.ackSearchList.subscribe((val) => {
      this.userService.getUsers(val).subscribe((data) => {
        this.userlist = data;
        this.userlist=this.userlist.items
      });
    });
  }

}
