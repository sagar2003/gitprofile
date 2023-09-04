import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-user-detail',
  templateUrl: './nav-user-detail.component.html',
  styleUrls: ['./nav-user-detail.component.css']
})
export class NavUserDetailComponent {

  tab:number=1;
  @Input() userId:any;

  
  tabChange(t:number){
    this.tab=t;
  }

}
