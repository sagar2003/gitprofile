import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-temp-holder',
  templateUrl: './temp-holder.component.html',
  styleUrls: ['./temp-holder.component.css']
})
export class TempHolderComponent {
  constructor(private userService:UsersService){

  }
  searchUser(val:string){
this.userService.ackSearchList.emit(val);
  }
}
