import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userId:any;
  userData:any="";

  constructor(private userService:UsersService,private activatedRouter:ActivatedRoute){
    this.userId = activatedRouter.snapshot.queryParams['id'];
    userService.getSingleUser(this.userId).subscribe((data)=>{
      this.userData = data;
    })
  }
}
