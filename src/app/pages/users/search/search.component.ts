import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private userService: UsersService) {}
  searchUser(val: string) {
    this.userService.ackSearchList.emit(val);
  }
}
